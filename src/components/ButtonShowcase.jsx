import React from 'react';
import Button from './Button';

const ButtonShowcase = () => {
  const handleClick = () => {
    console.log('버튼이 클릭되었습니다!');
  };

  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-2xl font-bold text-center mb-8'>
        버튼 컴포넌트 쇼케이스
      </h1>

      <div className='bg-white p-6 rounded-lg shadow-sm space-y-4'>
        <h2 className='text-lg font-semibold mb-4'>기본 버튼 (Figma 디자인)</h2>
        <Button
          onClick={handleClick}
          buttonText='다음'
          className='bg-sjz-red-main hover:bg-sjz-red-bright w-[325px] h-15'
        />
      </div>
      <div className='bg-white p-6 rounded-lg shadow-sm space-y-4'>
        <h2 className='text-lg font-semibold mb-4'>비활성화 상태</h2>

        <Button
          disabled
          onClick={handleClick}
          buttonText='비활성화된 버튼'
          className='bg-sjz-red-main hover:bg-sjz-red-bright w-[150px] h-15'
        />
      </div>
    </div>
  );
};

export default ButtonShowcase;
