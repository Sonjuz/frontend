import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import HomeHeader from './components/HomeHeader';
import Bookshelf from './components/bookshelf/Bookshelf';
import { TEMP_SCENARIOS } from '../../constants/tempData';

export default function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/register');
  };

  return (
    <div className='flex h-full flex-col items-center'>
      <HomeHeader />
      <div className='my-8 flex h-full flex-col items-center justify-between'>
        <Bookshelf books={TEMP_SCENARIOS} />
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
