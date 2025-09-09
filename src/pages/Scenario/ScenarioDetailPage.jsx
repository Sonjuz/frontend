import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

const ScenarioDetailHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='flex items-center justify-between p-4'>
      <button onClick={handleBack} className='text-2xl'>
        <img
          src='/icons/back-btn.svg'
          alt='back'
          className='w-10 h-10 cursor-pointer'
        />
      </button>
      <h1 className='text-2xl font-bold'>시나리오 상세</h1>
      <div className='w-6' />
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
    <div className='flex flex-col h-full bg-white'>
      <ScenarioDetailHeader />
      <div className='flex-1 flex flex-col items-center justify-center px-6'>
        <div className='w-24 h-32 bg-gray-200 rounded-lg mb-8 flex items-center justify-center'>
          <img
            src='/images/temp-book.png'
            alt={title}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        <p className='text-2xl font-bold mb-4 text-center'>{title}</p>
        <p className='text-lg text-gray-600 mb-4 text-center'>
          실제 발생할 수 있는 상황을 체험하며
          <br />
          올바른 대응 방법을 학습해보세요.
        </p>
      </div>
      <div className='flex justify-center mb-8'>
        <Button
          className='w-[340px] h-[56px] bg-sjz-red-main text-white text-xl font-bold rounded-xl'
          buttonText='책방으로 돌아가기'
          onClick={navigateToHome}
        />
      </div>
    </div>
  );
}
