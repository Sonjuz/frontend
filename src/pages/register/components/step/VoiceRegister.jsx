import { RECORD_SCRIPT, PRIVACY_NOTICE } from '../../../../constants/script';
import { Button } from '../../../../components/Button';
import { ReactMediaRecorder } from 'react-media-recorder';
import { useState } from 'react';
import WavEncoder from 'wav-encoder';

const RecordScriptSection = ({ onAudioFileChange }) => {
  return (
    <div className='h-130 w-80 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl'>
      <div className='text-center text-lg font-bold text-gray-800'>
        다음 문장을 읽어주세요
      </div>
      <div className='flex items-center justify-center text-base text-gray-500'>
        <img src='/icons/time.svg' alt='' className='mr-1 h-4 w-4' />
        <span>최소 1분 녹음 진행</span>
      </div>
      <div className='scrollbar-hide mb-8 h-80 w-full overflow-y-auto rounded-xl bg-gray-50 p-4'>
        <p className='text-lg leading-relaxed whitespace-pre-line text-gray-800'>
          {RECORD_SCRIPT}
        </p>
      </div>
      <RecordButton onAudioFileChange={onAudioFileChange} />
    </div>
  );
};

const RecordButton = ({ audioFile, onAudioFileChange }) => {
  const [error, setError] = useState('');

  // WAV 형식으로 변환 및 크기 제한
  const handleRecordingComplete = async (blobUrl, blob) => {
    try {
      // 오디오 데이터 추출
      const audioContext = new (window.AudioContext || window.AudioContext)();
      const arrayBuffer = await blob.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      // 모노로 변환 (채널 수 줄이기)
      const monoChannel = new Float32Array(audioBuffer.length);
      const left = audioBuffer.getChannelData(0);
      const right =
        audioBuffer.numberOfChannels > 1 ? audioBuffer.getChannelData(1) : null;

      for (let i = 0; i < audioBuffer.length; i++) {
        monoChannel[i] = right ? (left[i] + right[i]) / 2 : left[i];
      }

      // WAV 인코딩 설정
      const wavData = {
        sampleRate: audioBuffer.sampleRate,
        channelData: [monoChannel],
      };

      // WAV로 인코딩
      const wavArrayBuffer = await WavEncoder.encode(wavData);
      const wavBlob = new Blob([wavArrayBuffer], { type: 'audio/wav' });

      // 파일 크기 체크 (3MB)
      if (wavBlob.size > 3 * 1024 * 1024) {
        setError('녹음 파일이 3MB를 초과합니다. 더 짧게 녹음해 주세요.');
        onAudioFileChange(null);
        return;
      }

      const wavFile = new File([wavBlob], 'recording.wav', {
        type: 'audio/wav',
      });
      onAudioFileChange(wavFile);
      setError('');
    } catch (err) {
      setError('오디오 처리 중 오류가 발생했습니다.');
      console.error('Audio processing error:', err);
    }
  };

  return (
    <ReactMediaRecorder
      audio
      onStop={(blobUrl, blob) => handleRecordingComplete(blobUrl, blob)}
      mediaRecorderOptions={{
        mimeType: 'audio/webm',
        audioBitsPerSecond: 128000, // 128kbps로 제한
      }}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className='space-y-4'>
          {status === 'recording' ? (
            <button
              onClick={stopRecording}
              className='group flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-red-50 transition-colors hover:bg-red-100'
            >
              <div className='h-2 w-2 animate-pulse rounded-full bg-red-500' />
              <span className='text-lg font-semibold text-red-700'>
                녹음 중지
              </span>
            </button>
          ) : (
            <button
              onClick={() => {
                setError('');
                startRecording();
              }}
              className='group flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-50 transition-colors hover:bg-green-100'
            >
              <img
                src='/icons/mic.svg'
                alt='녹음'
                className='h-5 w-5 text-green-700'
              />
              <span className='text-lg font-semibold text-green-700'>
                {audioFile ? '다시 녹음하기' : '녹음 시작'}
              </span>
            </button>
          )}

          {error && <p className='text-center text-sm text-red-600'>{error}</p>}

          {mediaBlobUrl && !error && (
            <div className='rounded-xl bg-gray-50 p-3'>
              <audio
                src={mediaBlobUrl}
                controls
                className='h-10 w-full'
                controlsList='nodownload noplaybackrate'
              />
            </div>
          )}
        </div>
      )}
    />
  );
};

const NoticeCard = () => {
  return (
    <div className='w-80 rounded-xl bg-green-50 p-4 shadow-xl'>
      <div className='flex items-start gap-3'>
        <div className='shrink-0'>
          <img src='/icons/guard.svg' alt='' className='h-5 w-5' />
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='text-sm font-medium text-green-700'>
            {PRIVACY_NOTICE.title}
          </h3>
          <p className='text-xs leading-relaxed text-green-600'>
            {PRIVACY_NOTICE.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function VoiceRegister({
  audioFile,
  onVoiceChange,
  onNextStep,
}) {
  const [audio, setAudio] = useState(audioFile);

  // audioFile이 변경될 때만 상위 컴포넌트에 알림
  const handleAudioFileChange = newAudioFile => {
    setAudio(newAudioFile);
    onVoiceChange(newAudioFile);
  };

  return (
    <div className='flex flex-col justify-between gap-y-4 pb-4'>
      <div className='text-center'>
        <p className='mb-4 text-2xl font-bold text-gray-800'>
          목소리를 등록해주세요
        </p>
        <p className='text-sm leading-relaxed text-gray-600'>
          가족들이 익숙한 목소리로
          <br />
          안내를 들을 수 있어요
        </p>
      </div>
      <RecordScriptSection onAudioFileChange={handleAudioFileChange} />
      <NoticeCard />
      <Button
        className={'bg-sjz-red-main h-14 w-80 font-semibold text-white'}
        disabled={!audio}
        onClick={onNextStep}
      >
        다음
      </Button>
    </div>
  );
}
