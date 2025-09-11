import PhotoRegister from './components/step/PhotoRegister';
import RelationRegister from './components/step/RelationRegister';
import VoiceRegister from './components/step/VoiceRegister';
import Done from './components/step/Done';
import { ProgressBar } from './components/ProgressBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerProfile } from '../../api';
import Modal from '../../components/Modal';

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
  const [isError, setIsError] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [1, 2, 3];

  // 프로필 정보 상태 관리
  const [profileData, setProfileData] = useState({
    voiceFile: null,
    profileImage: null,
    name: '',
    familyRelation: '',
  });

  const updateProfileData = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNextStep = async () => {
    if (currentStep === steps.length - 1) {
      try {
        await handleRegister();
      } catch {
        setIsError(true);
      }
      setCurrentStep(steps.length);
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep <= 0) return;
    setCurrentStep(currentStep - 1);
  };

  const handleRegister = async () => {
    try {
      const response = await registerProfile(profileData);
      localStorage.setItem('profile_url', response.id);
      return response.id;
    } catch (error) {
      console.error(error);
    }
  };

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
    <div className='mx-auto flex h-full max-w-md flex-col items-center justify-between p-4'>
      {currentStep !== 3 && (
        <>
          <ProfileRegisterHeader />
          <ProgressBar steps={steps} currentStep={currentStep} />
        </>
      )}
      <div className='mt-6 flex h-full flex-col items-center justify-between'>
        {currentStep === 0 && (
          <PhotoRegister
            profileImage={profileData.profileImage}
            onPhotoChange={profileImage =>
              updateProfileData('profileImage', profileImage)
            }
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 1 && (
          <RelationRegister
            name={profileData.name}
            familyRelation={profileData.familyRelation}
            onNameChange={name => updateProfileData('name', name)}
            onRelationChange={familyRelation =>
              updateProfileData('familyRelation', familyRelation)
            }
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 2 && (
          <VoiceRegister
            voiceFile={profileData.voiceFile}
            onVoiceChange={voiceFile =>
              updateProfileData('voiceFile', voiceFile)
            }
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 3 && (
          <Done
            profileData={profileData}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
      </div>
    </div>
  );
}
