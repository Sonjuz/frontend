import { ProgressBar } from '../components/Progressbar';
import { useState, useEffect } from 'react';
import CallScreen from '../components/CallScreen';
import { useNavigate, useParams } from 'react-router-dom';
import MessageScreen from '../components/MessageScreen';
import ChoiceScreen from '../components/ChoiceScreen';
import EndScreen from '../components/EndScreen';
import Loading from '../../../components/Loading';
import { fetchSimulationById } from '../../../api';
import Modal from '../../../components/Modal';

const SimulationHeader = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const handleBack = () => {
    navigate(`/scenario/${id}`);
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
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepsLength, setStepsLength] = useState(0);
  const [score, setScore] = useState(0);
  const [simuationStepsData, setSimuationStepsData] = useState(null);
  const [sender, setSender] = useState(null);
  const [totalChoice, setTotalChoice] = useState(0);

  const { id } = useParams();

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleSelect = choice => {
    handleNext();
    if (choice.is_correct) {
      setScore(prev => prev + 1);
    }
  };

  const calculateScore = () => {
    return (score / totalChoice) * 100;
  };

  const getSimulationById = async id => {
    try {
      const response = await fetchSimulationById(id);
      setSimuationStepsData(response.steps);
      setStepsLength(response.steps.length);
      setSender(response.target_impersonation);
    } catch (error) {
      console.error('Error fetching simulation:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      simuationStepsData &&
      currentStep < stepsLength &&
      simuationStepsData[currentStep].screen_type === 'choice'
    ) {
      setTotalChoice(prev => prev + 1);
    }
  }, [currentStep]);

  useEffect(() => {
    getSimulationById(id);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Modal
        isOpen={isError}
        title='문제가 발생했어요'
        description='문제가 발생했어요.잠시 후 다시 시도해주세요.'
        image='/icons/family-register.svg'
        type='warning'
        onConfirm={() => {
          window.location.reload();
        }}
        confirmText='다시 시도하기'
      />
    );
  }

  return (
    <div className='flex h-full flex-col items-center justify-between bg-gray-50 p-6'>
      {simuationStepsData &&
        (() => {
          const isSimulationEnd = stepsLength === currentStep;
          const currentStepData = simuationStepsData[currentStep];

          if (isSimulationEnd) {
            return (
              <EndScreen
                correctCount={score}
                totalCount={totalChoice}
                percentage={calculateScore()}
              />
            );
          }

          return (
            <>
              <SimulationHeader />
              <ProgressBar steps={stepsLength} currentStep={currentStep} />
              <NoticeCard />
              {(() => {
                switch (currentStepData.screen_type) {
                  case 'call':
                    return (
                      <CallScreen
                        simuationData={currentStepData.messages}
                        onNext={handleNext}
                      />
                    );
                  case 'message':
                    return (
                      <MessageScreen
                        sender={sender}
                        simuationData={currentStepData.messages}
                        onNext={handleNext}
                      />
                    );
                  case 'choice':
                    return (
                      <ChoiceScreen
                        choices={currentStepData.choices}
                        onSelect={handleSelect}
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </>
          );
        })()}
    </div>
  );
}
