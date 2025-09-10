import PhotoRegister from './components/step/PhotoRegister';
import RelationRegister from './components/step/RelationRegister';
import VoiceRegister from './components/step/VoiceRegister';
import Done from './components/step/Done';
import { ProgressBar } from './components/ProgressBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileRegisterHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='flex w-full items-center p-4'>
      <button onClick={handleBack} className='mr-2'>
        <img
          src='/icons/back-btn.svg'
          alt='back'
          className='w-10 h-10 cursor-pointer'
        />
      </button>
      <div className='w-full flex'>
        <div className='text-lg font-bold'>프로필 설정</div>
      </div>
    </div>
  );
};

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3];

  const handleNextStep = () => {
    if (currentStep >= 3) return;
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep <= 0) return;
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className='mx-auto max-w-md p-4 flex flex-col items-center justify-between h-full'>
      <ProfileRegisterHeader />
      <ProgressBar steps={steps} currentStep={currentStep} />
      <div className='flex flex-col items-center justify-between h-full mt-6'>
        {currentStep === 0 && (
          <PhotoRegister
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 1 && (
          <RelationRegister
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 2 && (
          <VoiceRegister
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 3 && (
          <Done onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
        )}
      </div>
    </div>
  );
}
