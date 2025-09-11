import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import { fetchSummaryById } from '../../api';
import StoryCard from './components/StoryCard';

export default function NewsSummaryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [summaryData, setSummaryData] = useState([]);
  const [scenes, setScenes] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const { id } = useParams();

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => prev - 1);
  };

  const getSummaryData = async () => {
    try {
      const response = await fetchSummaryById(id);
      setSummaryData(response);
      setScenes(response.scenes);
    } catch (error) {
      console.error('Error fetching summary data:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const isLastPage = currentPage === scenes.length;
  const currentNews = scenes[currentPage];

  useEffect(() => {
    getSummaryData();
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className='flex h-full flex-col items-center justify-center gap-8'>
        <img src='/images/character-fail.png' alt='에러' className='size-48' />
        <h2 className='text-3xl font-bold text-gray-900'>문제가 발생했어요</h2>
        <p className='text-center text-2xl text-gray-700'>
          잠시 후 다시 시도해주세요
        </p>
        <Button
          onClick={() => window.location.reload()}
          className='bg-sjz-red-main h-16 w-80 rounded-2xl text-2xl font-bold text-white'
        >
          다시 시도하기
        </Button>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen flex-col items-center bg-gray-50 p-6'>
      {/* 헤더 */}
      <div className='mb-8 flex w-full items-center'>
        <button onClick={() => navigate(-1)} className='mr-4'>
          <img src='/icons/back-btn.svg' alt='뒤로가기' className='h-12 w-12' />
        </button>
        <h1 className='text-3xl font-bold'>오늘의 뉴스</h1>
      </div>

      {/* 페이지 컨텐츠 */}
      <div className='w-full'>
        {isLastPage ? (
          <div className='content-fade-in flex h-full flex-col items-center justify-center gap-8 rounded-xl bg-white p-8'>
            <img
              src='/images/character-success.png'
              alt='완료'
              className='size-48'
            />
            <h2 className='text-3xl font-bold text-gray-900'>
              오늘의 뉴스를 모두 읽었어요!
            </h2>
            <p className='text-center text-2xl text-gray-700'>
              내일도 새로운 소식으로 찾아올게요.
            </p>
          </div>
        ) : (
          <StoryCard
            key={currentPage}
            title={summaryData.title}
            alt={currentNews.alt}
            image={currentNews.imageUrl}
            description={currentNews.text}
            ttsUrl={currentNews.ttsUrl}
            onTTSEnd={handleNextPage}
          />
        )}
      </div>

      {/* 페이지 인디케이터 */}
      <div className='mt-4 flex items-center gap-2'>
        {scenes.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentPage === index ? 'bg-sjz-red-main' : 'bg-gray-300'
            }`}
          />
        ))}
        <div
          className={`h-2 w-2 rounded-full ${
            isLastPage ? 'bg-sjz-red-main' : 'bg-gray-300'
          }`}
        />
      </div>

      {/* 하단 버튼 */}
      <div className='mt-8 flex w-full gap-4'>
        {currentPage > 0 && (
          <Button
            onClick={handlePrevPage}
            className='h-16 w-full rounded-2xl bg-white text-2xl font-bold text-gray-900 transition-all duration-200 hover:bg-gray-100'
          >
            이전 페이지
          </Button>
        )}
        {!isLastPage ? (
          <Button
            onClick={handleNextPage}
            className='bg-sjz-red-main h-16 w-full rounded-2xl text-2xl font-bold text-white transition-all duration-200 hover:bg-red-600'
          >
            다음 페이지
          </Button>
        ) : (
          <Button
            onClick={() => navigate('/')}
            className='bg-sjz-red-main h-16 w-full rounded-2xl text-2xl font-bold text-white transition-all duration-200 hover:bg-red-600'
          >
            홈으로 돌아가기
          </Button>
        )}
      </div>
    </div>
  );
}
