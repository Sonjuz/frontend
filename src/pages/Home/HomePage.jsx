import React from 'react';

import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/profile');
  };

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1>HomePage</h1>
      <Button
        className='bg-sjz-red-main w-80 h-12'
        buttonText={'다음'}
        onClick={handleNext}
      />
    </div>
  );
}
