import { Button } from '../../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ResultSection = ({ handleCopyUrl }) => {
  const baseUrl = 'http://localhost:5173/';
  const [profile_url, setProfile_url] = useState(null);

  const getProfileUrl = () => {
    const url = localStorage.getItem('profile_url');
    return url;
  };

  useEffect(() => {
    const url = getProfileUrl();
    setProfile_url(url);
  }, [profile_url]);

  return (
    <div className='flex h-90 w-80 flex-col gap-y-2 rounded-2xl bg-white p-6 text-center shadow-xl outline-1 outline-offset-[-1px] outline-gray-100'>
      <div className='flex items-center justify-center'>
        <div className='grid size-12 place-items-center rounded-full bg-blue-100'>
          <img src='/icons/register-link.svg' alt='링크' className='size-6' />
        </div>
      </div>
      <div className='text-xl font-semibold'>나만의 전용 URL</div>
      <div className='text-lg break-keep whitespace-pre-line text-gray-600'>
        가족과 공유할 수 있는 전용 링크가 생성되었습니다
      </div>
      <div className='rounded-xl bg-gray-50 p-3'>
        <div
          onClick={() => handleCopyUrl(baseUrl + profile_url)}
          className='flex cursor-pointer flex-wrap justify-center text-lg text-blue-600 hover:underline'
        >
          <span>{baseUrl}</span>
          <span>{profile_url}</span>
        </div>
      </div>
      <button
        onClick={() => handleCopyUrl(baseUrl + profile_url)}
        className='flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-100 px-4 py-3 text-lg font-medium text-blue-700'
      >
        <img src='/icons/register-copy.svg' alt='복사' className='size-6' />
        URL 복사하기
      </button>
    </div>
  );
};

export default function Done() {
  const navigate = useNavigate();

  const handleCopyUrl = url => {
    navigator.clipboard.writeText(url);
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center justify-between gap-8'>
      <div className='flex w-80 flex-col items-center gap-y-2 text-center'>
        <div className='flex size-15 items-center justify-center rounded-full bg-gradient-to-br from-green-300 to-green-500'>
          <img src='/icons/register-done.svg' alt='완료' className='size-10' />
        </div>
        <h1 className='text-2xl font-bold text-gray-800'>
          프로필 등록이 완료되었습니다!
        </h1>
        <div className='text-lg break-keep whitespace-pre-line text-gray-600'>
          이제 가족의 목소리로 안전한 보이스피싱 방지 서비스를 이용할 수
          있습니다.
        </div>
      </div>

      <ResultSection handleCopyUrl={handleCopyUrl} />
      <Button
        onClick={navigateToHome}
        className='bg-sjz-red-main h-15 w-full text-xl font-bold text-white'
      >
        홈으로 돌아가기
      </Button>
    </div>
  );
}
