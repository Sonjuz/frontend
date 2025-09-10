import { useNavigate } from 'react-router-dom';
import StepSection from './components/StepSection';
import { Button } from '../../components/Button';
import FeatureSection from './components/FeatureSection';

const RegisterHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='flex items-center p-4'>
      <button onClick={handleBack} className='mr-2'>
        <img
          src='/icons/back-btn.svg'
          alt='back'
          className='h-10 w-10 cursor-pointer'
        />
      </button>
      <div className='text-lg font-bold'>가족 등록이란?</div>
    </div>
  );
};

const RegisterContent = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex w-full items-center justify-center'>
        <div className='from-sjz-red-main flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br to-[#F472B6]'>
          <img
            src='/icons/family-detail.svg'
            alt='family-detail'
            className='h-6 w-6'
          />
        </div>
      </div>
      <div className='my-4 text-center text-base text-gray-600'>
        <div>가족의 사진과 목소리를 등록하면</div>
        <div>보이스피싱 예방 교육을 할 때</div>
        <div>실제 가족의 목소리로 안내를 들을 수 있어요</div>
      </div>
    </div>
  );
};

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register/profile');
  };

  return (
    <>
      <RegisterHeader />
      <div className='flex flex-col gap-y-2'>
        <RegisterContent />
        <div className='flex w-full flex-col items-center gap-y-2 py-2'>
          <Button
            onClick={handleRegister}
            className='bg-sjz-red-main font-semibold text-white'
            icon='/icons/register.svg'
          >
            가족 프로필 등록하기
          </Button>
          <div className='mt-2'>
            <p className='mb-1 text-center text-base text-gray-500'>
              등록 과정은 약 3-5분 정도 소요됩니다
            </p>
            <div className='flex items-center justify-center space-x-4 text-sm text-gray-400'>
              <span>1. 사진 등록</span>
              <span>→</span>
              <span>2. 정보 입력</span>
              <span>→</span>
              <span>3. 목소리 등록</span>
            </div>
          </div>
        </div>
        <StepSection />
        <div className='my-4 flex flex-col items-center'>
          <div className='py-2 text-xl font-bold'>
            등록하면 이런 점이 좋아요
          </div>
          <FeatureSection />
        </div>
      </div>
    </>
  );
}
