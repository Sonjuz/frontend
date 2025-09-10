import { RECORD_SCRIPT, PRIVACY_NOTICE } from '../../../../constants/script';
import { Button } from '../../../../components/Button';

const RecordScriptSection = () => {
  return (
    <div className='h-130 w-80 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl'>
      <div className='text-center text-lg font-bold text-gray-800'>
        다음 문장을 읽어주세요
      </div>
      <div className='flex items-center justify-center text-base text-gray-500'>
        <img src='/icons/time.svg' alt='' className='mr-1 h-4 w-4' />
        <span>최소 1분 녹음 진행</span>
      </div>
      <div className='scrollbar-hide h-80 w-full overflow-y-auto rounded-xl bg-gray-50 p-4'>
        <p className='text-lg leading-relaxed whitespace-pre-line text-gray-800'>
          {RECORD_SCRIPT}
        </p>
      </div>
      <button className='group mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-50 transition-colors hover:bg-green-100'>
        <img src='/icons/mic.svg' alt='' className='h-5 w-5 text-green-700' />
        <span className='text-lg font-semibold text-green-700'>녹음 시작</span>
      </button>
    </div>
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

export default function VoiceRegister() {
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
      <RecordScriptSection />
      <NoticeCard />
      <Button className={'bg-sjz-red-main h-14 w-80 font-semibold text-white'}>
        다음
      </Button>
    </div>
  );
}
