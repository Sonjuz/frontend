import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import HomeHeader from './components/HomeHeader';
import Bookshelf from './components/bookshelf/Bookshelf';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { fetchAllSimulations } from '../../api';
import Modal from '../../components/Modal';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const navigate = useNavigate();
  const { profile_url } = useParams();

  useEffect(() => {
    if (profile_url) {
      localStorage.setItem('profile_url', profile_url);
    }
  }, [profile_url]);

  const handleStart = () => {
    navigate('/register');
  };

  const getAllSimulations = async () => {
    try {
      const simulations = await fetchAllSimulations();
      setPopular(simulations.popular_books || []);
      setLatest(simulations.latest_books || []);
      setRecommended(simulations.recommended_books || []);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching simulations:', error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllSimulations();
  }, []);

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

  const allBooks = [popular, latest, recommended];

  return (
    <div className='flex h-full flex-col items-center'>
      <HomeHeader />
      <div className='my-1 flex h-full flex-col items-center justify-between'>
        <Bookshelf books={allBooks} />
        <Button
          className='bg-sjz-red-main h-16 w-80 rounded-xl text-2xl font-bold text-white'
          onClick={handleStart}
          icon='/icons/family-register.svg'
        >
          가족 등록
        </Button>
      </div>
    </div>
  );
}
