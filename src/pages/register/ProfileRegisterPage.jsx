import PhotoRegister from './components/step/PhotoRegister';
import RelationRegister from './components/step/RelationRegister';
import VoiceRegister from './components/step/VoiceRegister';
import Done from './components/step/Done';
import { ProgressBar } from './components/ProgressBar';
import { useState } from 'react';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(0);
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
