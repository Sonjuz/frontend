import { useState, useEffect } from 'react';
import { Button } from '../../../components/Button';

const TEMP_DATA = {
  step_number: 1,
  screen_type: 'call',
  messages: [
    {
      sender: 'scammer',
      text: '안녕하세요, 고객님. 저희 OO택배입니다. 오늘 소포가 배송될 예정인데, 받으실 주소가 맞는지 확인 전화드렸습니다.',
    },
    { sender: 'user', text: '네? 택배요? 제가 시킨 적이 있나...' },
    {
      sender: 'scammer',
      text: '요즘 비슷한 이름의 수취인이 많아서 실수로 반송되거나, 주소 오류로 배송이 안 되는 경우가 많습니다. 혹시 주소 확인을 위해 조금만 시간 괜찮으실까요?',
    },
  ],
};

export const CallScreen = ({ onNext }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    // 3초 간격으로 다음 메시지 표시
    const timer = setInterval(() => {
      setCurrentMessageIndex(prev => {
        if (prev < TEMP_DATA.messages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setShowNextButton(true);
          return prev;
        }
      });
    }, 4000);

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
      <div className='bg-SJZ_MAIN relative h-64 w-full rounded-3xl p-6'>
        <div className='bg-SJZ_MAIN absolute -top-2 left-1/2 size-4 -translate-x-1/2 rotate-45' />
        <div className='flex h-full items-center justify-center'>
          <div className='bg-sjz-red-main w-full rounded-2xl p-6 break-keep whitespace-pre-line'>
            <div className='text-center text-2xl font-semibold text-white'>
              {TEMP_DATA.messages[currentMessageIndex].text}
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
};
