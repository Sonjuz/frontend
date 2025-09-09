import { useNavigate } from 'react-router-dom';

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
          className='w-10 h-10 cursor-pointer'
        />
      </button>
      <div className='text-lg font-bold'>가족 등록이란?</div>
    </div>
  );
};

export default function RegisterPage() {
  const handleRegister = () => {
    console.log('가족 프로필 등록으로 이동');
  };

  return (
    <>
      <RegisterHeader />
      <div className='flex flex-col items-center justify-center h-full'>
        <div className='flex flex-col items-start'>
          <div className='flex justify-center w-full items-center'>
            <div className='w-20 h-20 rounded-full bg-gradient-to-br from-sjz-red-main to-[#F472B6] flex items-center justify-center'>
              <img
                src='/icons/family-detail.svg'
                alt='family-detail'
                className='w-6 h-6'
              />
            </div>
          </div>
          <div className='flex justify-center w-full items-center py-2 flex-col gap-y-2'>
            <div className='text-2xl font-bold text-center'>가족 등록이란?</div>
            <div className='text-base text-gray-600 text-center'>
              <div>가족의 사진과 목소리를 등록하면</div>
              <div>보이스피싱 예방 교육을 할 때</div>
              <div>실제 가족의 목소리로 안내를 들을 수 있어요</div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleRegister}
            className='w-full h-[60px] bg-sjz-red-main rounded-2xl flex items-center justify-center space-x-2 text-white text-[18px] font-semibold leading-7'
          >
            <svg width='19' height='18' viewBox='0 0 19 18' fill='none'>
              <path
                d='M9.87539 11.07V12.63C9.39499 12.46 8.89457 12.375 8.37414 12.375C7.56347 12.375 6.80784 12.58 6.10725 12.99C5.42669 13.39 4.88624 13.93 4.4859 14.61C4.07556 15.31 3.87039 16.065 3.87039 16.875H2.36914C2.36914 15.785 2.64437 14.775 3.19483 13.845C3.72527 12.945 4.44087 12.23 5.34162 11.7C6.27239 11.15 7.28323 10.875 8.37414 10.875C8.88457 10.875 9.38498 10.94 9.87539 11.07ZM8.37414 10.125C7.55346 10.125 6.79783 9.92 6.10725 9.51C5.42669 9.11 4.88624 8.57 4.4859 7.89C4.07556 7.2 3.87039 6.445 3.87039 5.625C3.87039 4.805 4.07556 4.05 4.4859 3.36C4.88624 2.68 5.42669 2.14 6.10725 1.74C6.79783 1.33 7.55346 1.125 8.37414 1.125C9.19482 1.125 9.95045 1.33 10.641 1.74C11.3216 2.14 11.862 2.68 12.2624 3.36C12.6727 4.05 12.8779 4.805 12.8779 5.625C12.8779 6.445 12.6727 7.2 12.2624 7.89C11.862 8.57 11.3216 9.11 10.641 9.51C9.95045 9.92 9.19482 10.125 8.37414 10.125ZM8.37414 8.625C8.91459 8.625 9.41501 8.49 9.87539 8.22C10.3358 7.95 10.7011 7.585 10.9713 7.125C11.2415 6.665 11.3766 6.165 11.3766 5.625C11.3766 5.085 11.2415 4.585 10.9713 4.125C10.7011 3.665 10.3358 3.3 9.87539 3.03C9.41501 2.76 8.91459 2.625 8.37414 2.625C7.83369 2.625 7.33327 2.76 6.87289 3.03C6.41251 3.3 6.0472 3.665 5.77698 4.125C5.50675 4.585 5.37164 5.085 5.37164 5.625C5.37164 6.165 5.50675 6.665 5.77698 7.125C6.0472 7.585 6.41251 7.95 6.87289 8.22C7.33327 8.49 7.83369 8.625 8.37414 8.625ZM12.8779 13.125V10.875H14.3791V13.125H16.631V14.625H14.3791V16.875H12.8779V14.625H10.626V13.125H12.8779Z'
                fill='white'
              />
            </svg>
            <span>가족 프로필 등록하기</span>
          </button>
          <div className='mt-4'>
            <p className='text-center text-[12px] text-[#6B7280] leading-4 mb-2'>
              등록 과정은 약 3-5분 정도 소요됩니다
            </p>
            <div className='flex items-center justify-center space-x-4 text-[12px] text-[#9CA3AF] leading-4'>
              <span>1. 사진 등록</span>
              <span>→</span>
              <span>2. 정보 입력</span>
              <span>→</span>
              <span>3. 목소리 등록</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
