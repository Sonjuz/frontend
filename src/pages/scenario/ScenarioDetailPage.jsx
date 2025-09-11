import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import Loading from '../../components/Loading';
import { fetchSimulationById } from '../../api';
import Modal from '../../components/Modal';

const ScenarioDetailHeader = ({ book }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const title = fraud_type => {
    switch (fraud_type) {
      case 'smishing':
        return '스미싱';
      case 'voicephishing':
        return '보이스피싱';
    }
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
      <div className='flex flex-col'>
        <div className='text-lg font-bold'>{title(book.fraud_type)}</div>
      </div>
    </div>
  );
};

const ScenarioTrySection = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <div className='flex items-center gap-2'>
      <div className='flex flex-col gap-4 rounded-xl border border-gray-300 bg-white p-4 shadow-2xl'>
        <div className='flex items-center'>
          <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#F87171] to-[#EF4444]'>
            <img src='/icons/simulate.svg' alt='재생' className='h-10 w-10' />
          </div>
          <div className='ml-4 flex flex-col'>
            <div className='mb-2 text-lg font-bold text-black'>
              시나리오 체험
            </div>
            <div className='w-44 text-sm text-gray-600'>
              실제 상황처럼 금융 사기 예방 연습을 시작합니다.
              <br />
              천천히 읽고 신중하게 선택해주세요!
            </div>
          </div>
        </div>
        <Button
          icon='/icons/simulate.svg'
          onClick={() => navigate(`/simulation/${id}`)}
          className={
            'bg-gradient-to-r from-[#F87171] to-[#EF4444] text-white focus:ring-2 focus:ring-[#EF4444] focus:ring-offset-2 focus:outline-none'
          }
        >
          체험 시작하기
        </Button>
      </div>
    </div>
  );
};

const ListeningScenarioSection = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <div className='flex items-center gap-2'>
      <div className='flex flex-col gap-4 rounded-xl border border-gray-300 bg-white p-4 shadow-2xl'>
        <div className='flex items-center'>
          <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]'>
            <img src='/icons/listening.svg' alt='듣기' className='h-10 w-10' />
          </div>
          <div className='ml-4 flex flex-col'>
            <div className='mb-2 text-lg font-bold text-black'>
              관련된 뉴스 요약
            </div>
            <div className='w-44 text-sm text-gray-600'>
              시나리오와 관련된 뉴스를 요약해서 보여드립니다.
              <br />
              뉴스를 통해 배운 내용을 확인해보세요.
            </div>
          </div>
        </div>
        <Button
          icon='/icons/listening.svg'
          onClick={() => navigate(`/news/${id}`)}
          className={
            'bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:outline-none'
          }
        >
          가족 목소리로 듣기
        </Button>
      </div>
    </div>
  );
};

export default function ScenarioDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  // location.state나 sessionStorage에서 cover_image 가져오기
  const storedData = sessionStorage.getItem(`scenario_${id}`);
  const cover_image =
    location.state?.cover_image ||
    (storedData ? JSON.parse(storedData).cover_image : null);

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetchSimulationById(id);
        setBook(response);
      } catch (error) {
        console.error('Error fetching book:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBook();
  }, [id, navigate]);

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
    <div className='flex h-full flex-col pb-4'>
      <ScenarioDetailHeader book={book} />
      <div className='flex flex-col items-center px-6'>
        <div className='mb-4 flex h-28 w-20 items-center justify-center overflow-hidden rounded-lg bg-gray-200'>
          <img
            src={cover_image || book.cover_image || '/images/temp-book.png'}
            alt={book.scenario_title}
            className='h-full w-full rounded-lg object-cover'
            onError={e => {
              e.target.src = '/images/temp-book.png';
              // 에러 발생 시 sessionStorage에서도 제거
              sessionStorage.removeItem(`scenario_${id}`);
            }}
          />
        </div>
        <div className='mb-2 flex flex-col gap-y-1'>
          <p className='text-center text-2xl font-bold break-keep'>
            {book.scenario_title}
          </p>
          <p className='text-center text-base text-gray-600'>
            실제 발생할 수 있는 상황을 체험하며 올바른 대응 방법을 학습해보세요.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <ScenarioTrySection />
        <ListeningScenarioSection />
      </div>
      <div className='my-4 flex justify-center'>
        <Button
          className='bg-sjz-red-main h-[56px] w-[340px] rounded-xl text-xl font-bold text-white'
          onClick={navigateToHome}
        >
          책방으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
