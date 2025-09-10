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
          className='h-10 w-10 cursor-pointer'
        />
      </button>
      <div className='flex w-full'>
        <div className='text-lg font-bold'>프로필 설정</div>
      </div>
    </div>
  );
};

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(2);
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
    <div className='mx-auto flex h-full max-w-md flex-col items-center justify-between p-4'>
      <ProfileRegisterHeader />
      <ProgressBar steps={steps} currentStep={currentStep} />
      <div className='mt-6 flex h-full flex-col items-center justify-between'>
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
