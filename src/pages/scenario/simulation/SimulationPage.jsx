import { ProgressBar } from '../components/Progressbar';
import { SMISHING_SCENARIO } from '../../../constants/scenario';
import { useState, useEffect } from 'react';
import CallScreen from '../components/CallScreen';
import { useNavigate } from 'react-router-dom';
import MessageScreen from '../components/MessageScreen';

const SimulationHeader = () => {
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
        <div className='text-lg font-bold'>시뮬레이션</div>
      </div>
    </div>
  );
};

const NoticeCard = () => {
  return (
    <div className='flex w-80 items-center gap-7 rounded-2xl bg-green-50 p-3'>
      <img src='/icons/simulation-guard.svg' alt='guard' className='h-7 w-7' />
      <div className='flex flex-col gap-1'>
        <div className='text-base font-semibold text-green-700'>
          안전 연습 중
        </div>
        <div className='text-base text-green-600'>
          실제 상황에서 어떻게 대응해야 하는지 <br />
          배우는 시간이에요!
        </div>
      </div>
    </div>
  );
};

export default function SimulationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsLength, setStepsLength] = useState(0);
  const [simuationStepsData, setSimuationStepsData] = useState(null);

  useEffect(() => {
    setStepsLength(SMISHING_SCENARIO.steps.length);
    setSimuationStepsData(SMISHING_SCENARIO.steps);
  }, []);

  useEffect(() => {
    if (simuationStepsData) {
      console.log(simuationStepsData[currentStep].messages);
    }
  }, [simuationStepsData]);

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className='flex h-full flex-col items-center p-4'>
      <SimulationHeader />
      <ProgressBar steps={stepsLength} currentStep={currentStep} />
      <NoticeCard />
      {simuationStepsData &&
        simuationStepsData[currentStep].screen_type === 'call' && (
          <CallScreen
            simuationData={simuationStepsData[currentStep].messages}
            onNext={handleNext}
          />
        )}
      {simuationStepsData &&
        simuationStepsData[currentStep].screen_type === 'message' && (
          <MessageScreen />
        )}
    </div>
  );
}
