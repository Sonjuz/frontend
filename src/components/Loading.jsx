import { useEffect, useState } from 'react';

export default function Loading() {
  const [currentDot, setCurrentDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDot(prev => (prev + 1) % 8);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex h-full flex-col items-center justify-center gap-8'>
      <img src='/images/character-success.png' alt='캐릭터' className='w-40' />
      <div className='flex items-center gap-2'>
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ease-in-out ${
              index === currentDot
                ? 'bg-sjz-red-main translate-y-[-4px] scale-125 transform'
                : index === (currentDot - 1 + 8) % 8 ||
                    index === (currentDot + 1) % 8
                  ? 'translate-y-[-2px] scale-110 transform bg-pink-300'
                  : 'scale-100 bg-pink-200'
            }`}
          />
        ))}
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-sjz-red-main text-2xl font-bold'>
          틀려도 괜찮으니까 함께 해봐요!
        </p>
        <p className='text-center text-xl text-black'>
          잠시만 기다려주세요
          <br />
          안전한 연습 환경을 설정하고 있어요...
        </p>
      </div>
    </div>
  );
}
