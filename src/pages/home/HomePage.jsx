import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import HomeHeader from './components/HomeHeader';
import Bookshelf from './components/bookshelf/Bookshelf';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { fetchAllSimulations } from '../../api';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/register');
  };

  const getAllSimulations = async () => {
    try {
      const simulations = await fetchAllSimulations();
      setPopular(simulations.popular_simulations || []);
      setLatest(simulations.latest_simulations || []);
      setRecommended(simulations.recommended_simulations || []);
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

  useEffect(() => {
    console.log(popular, latest, recommended);
  }, [popular, latest, recommended]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error</div>;
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
