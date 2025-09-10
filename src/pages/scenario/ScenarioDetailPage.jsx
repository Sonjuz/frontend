import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

const ScenarioDetailHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='flex items-center p-4'>
      <button onClick={handleBack} className='mr-2'>
        <img
          src='/icons/back-btn.svg'
          alt='back'
          className='h-10 w-10 cursor-pointer'
        />
      </button>
      <div className='flex flex-col'>
        <div className='text-lg font-bold'>시나리오 제목</div>
        <div className='text-sm text-gray-500'>시나리오 부제목 표시 예정</div>
      </div>
    </div>
  );
};

const ScenarioTrySection = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex flex-col gap-4 rounded-xl border border-gray-300 bg-white p-4 shadow-2xl'>
        <div className='flex items-center'>
          <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#F87171] to-[#EF4444]'>
            <img src='/icons/simulate.svg' alt='재생' className='h-10 w-10' />
          </div>
          <div className='ml-4 flex flex-col'>
            <div className='mb-2 text-lg font-bold text-black'>체험하기</div>
            <div className='w-44 text-sm text-gray-600'>
              실제 전화가 온 것처럼
              <br />
              연습해보세요.
              <br />
              어떻게 대답해야 하는지
              <br />
              단계별로 배울 수 있어요.
            </div>
          </div>
        </div>
        <Button
          icon='/icons/simulate.svg'
          onClick={() => {}}
          className={
            'bg-gradient-to-r from-[#F87171] to-[#EF4444] focus:ring-2 focus:ring-[#EF4444] focus:ring-offset-2 focus:outline-none'
          }
        >
          체험 시작하기
        </Button>
      </div>
    </div>
  );
};

const ListeningScenarioSection = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex flex-col gap-4 rounded-xl border border-gray-300 bg-white p-4 shadow-2xl'>
        <div className='flex items-center'>
          <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]'>
            <img src='/icons/listening.svg' alt='듣기' className='h-10 w-10' />
          </div>
          <div className='ml-4 flex flex-col'>
            <div className='mb-2 text-lg font-bold text-black'>
              예시 시나리오
            </div>
            <div className='w-44 text-sm text-gray-600'>
              다양한 시나리오를 통해
              <br />
              실제 전화가 온 것처럼
              <br />
              연습해보세요.
            </div>
          </div>
        </div>
        <Button
          icon='/icons/listening.svg'
          onClick={() => {}}
          className={
            'bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:outline-none'
          }
        >
          가족 목소리로 듣기
        </Button>
      </div>
    </div>
  );
};

export default function ScenarioDetailPage() {
  const location = useLocation();
  const { title } = location.state;

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='flex h-full flex-col pb-4'>
      <ScenarioDetailHeader />
      <div className='flex flex-col items-center px-6'>
        <div className='mb-4 flex h-28 w-20 items-center justify-center rounded-lg bg-gray-200'>
          <img
            src='/images/temp-book.png'
            alt={title}
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
        <div className='mb-2 flex flex-col gap-y-1'>
          <p className='text-center text-2xl font-bold'>{title}</p>
          <p className='text-center text-base text-gray-600'>
            실제 발생할 수 있는 상황을 체험하며
            <br />
            올바른 대응 방법을 학습해보세요.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <ScenarioTrySection />
        <ListeningScenarioSection />
      </div>
      <div className='my-4 flex justify-center'>
        <Button
          className='bg-sjz-red-main h-[56px] w-[340px] rounded-xl text-xl font-bold text-white'
          onClick={navigateToHome}
        >
          책방으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
