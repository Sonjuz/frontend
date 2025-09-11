export default function HomeHeader() {
  return (
    <div className='flex flex-col items-center gap-2 pt-4'>
      <img src='/images/logo.png' alt='로고' className='w-fulll h-10' />
      <p className='text-center text-xl text-black'>
        사례를 선택해서
        <br />
        금융 사기 대응 방법을 배워보세요
      </p>
    </div>
  );
}
