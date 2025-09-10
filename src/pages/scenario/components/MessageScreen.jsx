import { useState, useEffect } from 'react';
import { Button } from '../../../components/Button';

export default function MessageScreen({ simuationData, sender, onNext }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
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
    <div className='flex h-full w-full flex-col gap-y-6 bg-gray-100'>
      <div className='flex h-16 items-center justify-between bg-white px-4 shadow-sm'>
        <div className='flex items-center gap-3'>
          <img src='/icons/message.svg' alt='발신자' className='size-8' />
          <div>
            <div className='font-medium'>{sender}</div>
            <div className='text-sm text-gray-500'>+82-2-XXXX-XXXX</div>
          </div>
        </div>
      </div>
      <div className='scrollbar-hide flex h-100 overflow-y-scroll p-4'>
        <div className='flex flex-col gap-3'>
          {simuationData
            .slice(0, currentMessageIndex + 1)
            .map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'scammer' && (
                  <div className='flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-200'>
                    <img
                      src='/icons/relation-other.svg'
                      alt='발신자'
                      className='size-5'
                    />
                  </div>
                )}
                <div
                  className={`mx-2 max-w-[80%] rounded-2xl p-4 ${
                    message.sender === 'user'
                      ? 'bg-sjz-blue text-white'
                      : message.sender === 'message_system'
                        ? 'bg-red-500 text-white'
                        : 'bg-white'
                  }`}
                >
                  <p className='text-xl break-keep'>{message.text}</p>
                  <div className='mt-1 text-right text-sm'>
                    {new Date().toLocaleTimeString('ko-KR', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })}
                  </div>
                </div>
              </div>
            ))}
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
