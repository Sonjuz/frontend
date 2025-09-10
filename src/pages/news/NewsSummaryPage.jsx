import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useState } from 'react';

const NEWS_SUMMARY = [
  {
    id: 1,
    story_image: '/images/news-1.png',
    title: '보이스피싱 사기 주의보',
    description:
      '옛날 옛적에 한 사람이 가족을 사칭해 금전을 요구하는 사기가 있었어요. 하지만 우리 모두가 잘 알고 대처하여 피해를 막을 수 있었답니다.',
  },
  {
    id: 2,
    story_image: '/images/news-2.png',
    title: '우리 동네 보이스피싱 예방',
    description:
      '우리 동네에서는 모두가 힘을 합쳐 보이스피싱을 예방하고 있어요. 수상한 전화는 바로 끊고, 가족들과 상의하는 것이 가장 중요해요.',
  },
];

const StoryCard = ({ title, image, description }) => (
  <div className='flex w-full flex-col items-center gap-6 rounded-3xl bg-white p-8'>
    <h2 className='text-3xl font-bold text-gray-900'>{title}</h2>
    <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-8 border-gray-100'>
      <img src={image} alt={title} className='h-full w-full object-cover' />
    </div>
    <p className='text-center text-2xl leading-relaxed text-gray-700'>
      {description}
    </p>
  </div>
);

export default function NewsSummaryPage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNextPage = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsFlipping(false);
    }, 500);
  };

  const handlePrevPage = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(prev => prev - 1);
      setIsFlipping(false);
    }, 500);
  };

  const isLastPage = currentPage === NEWS_SUMMARY.length;
  const currentNews = NEWS_SUMMARY[currentPage];

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
      <div className='relative flex w-full overflow-hidden'>
        <div
          className={`w-full flex-shrink-0 transform-gpu transition-all duration-500 ease-in-out ${
            isFlipping
              ? currentPage > 0
                ? 'translate-x-full opacity-0'
                : '-translate-x-full opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          {isLastPage ? (
            <div className='flex h-full flex-col items-center justify-center gap-8'>
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
              title={currentNews.title}
              image={currentNews.story_image}
              description={currentNews.description}
            />
          )}
        </div>
        <div
          className={`absolute top-0 left-0 w-full flex-shrink-0 transform-gpu transition-all duration-500 ease-in-out ${
            isFlipping
              ? 'translate-x-0 opacity-100'
              : currentPage > 0
                ? '-translate-x-full opacity-0'
                : 'translate-x-full opacity-0'
          }`}
        >
          {currentPage > 0 && !isLastPage && (
            <StoryCard
              title={NEWS_SUMMARY[currentPage - 1].title}
              image={NEWS_SUMMARY[currentPage - 1].story_image}
              description={NEWS_SUMMARY[currentPage - 1].description}
            />
          )}
        </div>
      </div>

      {/* 페이지 인디케이터 */}
      <div className='mt-4 flex items-center gap-2'>
        {NEWS_SUMMARY.map((_, index) => (
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
