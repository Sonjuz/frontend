import { useState, useEffect } from 'react';
import { Button } from '../../../components/Button';

export default function CallScreen({ simuationData, onNext }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    // 3초 간격으로 다음 메시지 표시
    const timer = setInterval(() => {
      setCurrentMessageIndex(prev => {
        if (prev < simuationData.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setShowNextButton(true);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex w-80 flex-col items-center gap-4'>
      <div className='my-1 w-full gap-y-2 text-center'>
        <div className='text-2xl font-bold text-black'>수신 전화</div>
        <div className='text-2xl text-black'>010-XXXX-XXXX</div>
      </div>
      <img
        className='size-32 rounded-full border-4 border-red-500'
        src='/images/scammer_profile.png'
        alt='발신자'
      />

      <div
        className={`${simuationData[currentMessageIndex].sender === 'scammer' ? 'bg-sjz-red-main' : 'bg-sjz-blue'} relative h-64 w-full rounded-3xl p-6`}
      >
        <div
          className={`absolute -top-2 left-1/2 size-4 -translate-x-1/2 rotate-45 ${simuationData[currentMessageIndex].sender === 'scammer' ? 'bg-sjz-red-main' : 'bg-sjz-blue'}`}
        />
        <div className='flex h-full items-center justify-center'>
          <div className='w-full rounded-2xl p-6 break-keep whitespace-pre-line'>
            <div className='text-center text-2xl font-semibold text-white'>
              {simuationData[currentMessageIndex].text}
            </div>
          </div>
        </div>
      </div>
      {showNextButton && (
        <Button
          onClick={onNext}
          className='bg-sjz-red-main h-16 w-full rounded-2xl text-xl font-bold text-white'
        >
          다음
        </Button>
      )}
    </div>
  );
}
