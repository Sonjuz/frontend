import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import HomeHeader from './components/HomeHeader';
import Bookshelf from './components/bookshelf/Bookshelf';
import { TEMP_SCENARIOS } from '../../constants/tempData';

export default function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/profile');
  };

  return (
    <div className='flex flex-col h-full bg-white items-center'>
      <HomeHeader />
      <div className='flex flex-col items-center justify-between h-full my-8'>
        <Bookshelf books={TEMP_SCENARIOS} />
        <Button
          className='w-[340px] h-[56px] bg-sjz-red-main text-white text-2xl font-bold rounded-xl'
          buttonText='가족 등록'
          onClick={handleStart}
          icon='/icons/family-register.svg'
        />
      </div>
    </div>
  );
}
