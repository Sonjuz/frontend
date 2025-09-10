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
          className='w-10 h-10 cursor-pointer'
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
      <div className='flex flex-col bg-white rounded-xl p-4 gap-4 shadow-2xl border border-gray-300'>
        <div className='flex items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-[#F87171] to-[#EF4444] rounded-2xl flex items-center justify-center'>
            <img src='/icons/simulate.svg' alt='재생' className='w-10 h-10' />
          </div>
          <div className='flex flex-col ml-4'>
            <div className='text-black text-lg font-bold mb-2'>체험하기</div>
            <div className='text-gray-600 text-sm w-44'>
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
            'bg-gradient-to-r from-[#F87171] to-[#EF4444] focus:outline-none focus:ring-2 focus:ring-[#EF4444] focus:ring-offset-2'
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
      <div className='flex flex-col bg-white rounded-xl p-4 gap-4 shadow-2xl border border-gray-300'>
        <div className='flex items-center'>
          <div className='w-16 h-16 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-2xl flex items-center justify-center'>
            <img src='/icons/listening.svg' alt='듣기' className='w-10 h-10' />
          </div>
          <div className='flex flex-col ml-4'>
            <div className='text-black text-lg font-bold mb-2'>
              예시 시나리오
            </div>
            <div className='text-gray-600 text-sm w-44'>
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
            'bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2'
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
    <div className='flex flex-col h-full pb-4'>
      <ScenarioDetailHeader />
      <div className='flex flex-col items-center px-6'>
        <div className='w-20 h-28 bg-gray-200 rounded-lg mb-4 flex items-center justify-center'>
          <img
            src='/images/temp-book.png'
            alt={title}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-y-1 mb-2'>
          <p className='text-2xl font-bold text-center'>{title}</p>
          <p className='text-base text-gray-600 text-center'>
            실제 발생할 수 있는 상황을 체험하며
            <br />
            올바른 대응 방법을 학습해보세요.
          </p>
        </div>
      </div>
      <div className='flex items-center flex-col gap-4'>
        <ScenarioTrySection />
        <ListeningScenarioSection />
      </div>
      <div className='flex justify-center my-4'>
        <Button
          className='w-[340px] h-[56px] bg-sjz-red-main text-white text-xl font-bold rounded-xl'
          onClick={navigateToHome}
        >
          책방으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
