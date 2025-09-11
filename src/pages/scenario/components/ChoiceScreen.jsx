import { useState } from 'react';
import { Button } from '../../../components/Button';

export default function ChoiceScreen({ choices, onSelect }) {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showEducation, setShowEducation] = useState(false);

  const handleChoiceClick = choice => {
    setSelectedChoice(choice);
    setShowEducation(true);
  };

  const handleNextClick = () => {
    onSelect(selectedChoice);
  };

  if (showEducation && selectedChoice) {
    return (
      <div className='flex h-full w-full flex-col items-center gap-y-4 p-4'>
        <img
          src={
            selectedChoice.isCorrect
              ? '/images/character-success.png'
              : '/images/character-fail.png'
          }
          alt='결과'
          className='size-40'
        />
        <div className='border-sjz-red-main flex flex-col items-center gap-4 rounded-2xl border-2 bg-white p-6 text-center'>
          <h2 className='text-sjz-red-main text-2xl font-bold'>
            {selectedChoice.isCorrect ? '정답이에요!' : '이렇게 하면 위험해요!'}
          </h2>
          <p className='text-center text-xl text-gray-700'>
            {selectedChoice.resultMessage}
          </p>
        </div>
        <div className='w-full rounded-2xl bg-blue-50 p-4'>
          <div className='flex items-start gap-2'>
            <img
              src='/icons/guard.svg'
              alt='가드'
              className='size-8 shrink-0'
            />
            <div className='flex flex-col gap-2'>
              <h3 className='text-xl font-bold text-blue-900'>
                이렇게 기억하세요!
              </h3>
              <p className='text-lg text-blue-800'>
                {selectedChoice.educationPoint}
              </p>
            </div>
          </div>
        </div>
        <Button
          onClick={handleNextClick}
          className='bg-sjz-red-main mt-auto h-16 w-full rounded-2xl text-xl font-bold text-white'
        >
          다음
        </Button>
      </div>
    );
  }

  return (
    <div className='flex h-full w-full flex-col gap-6 p-6'>
      <div className='rounded-2xl bg-gray-50 p-4'>
        <h2 className='text-center text-2xl font-bold'>
          어떻게 대응하면 좋을까요?
        </h2>
      </div>
      {choices && (
        <div className='flex h-full flex-col justify-center gap-2'>
          {choices.map(choice => (
            <button
              key={choice.choiceId}
              onClick={() => handleChoiceClick(choice)}
              className='hover:border-sjz-red-main hover:bg-sjz-red-bright focus:ring-sjz-red-main flex min-h-24 w-full cursor-pointer items-center rounded-2xl border-2 border-gray-200 bg-white p-6 text-left text-xl focus:ring-2 focus:ring-offset-2 focus:outline-none'
            >
              <span className='mr-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg font-bold'>
                {choice.choiceId}
              </span>
              {choice.choiceText}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
