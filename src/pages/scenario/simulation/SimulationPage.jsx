const NoticeCard = () => {
  return (
    <div className='flex w-80 items-center gap-7 rounded-2xl bg-green-50 p-3'>
      <img src='/icons/simulation-guard.svg' alt='guard' className='h-7 w-7' />
      <div className='flex flex-col gap-1'>
        <div className='text-base font-semibold text-green-700'>
          안전 연습 중
        </div>
        <div className='text-base text-green-600'>
          실제 상황에서 어떻게 대응해야 하는지 <br />
          배우는 시간이에요!
        </div>
      </div>
    </div>
  );
};

export default function SimulationPage() {
  return (
    <div className='flex h-full flex-col items-center p-4'>
      <NoticeCard />
    </div>
  );
}
