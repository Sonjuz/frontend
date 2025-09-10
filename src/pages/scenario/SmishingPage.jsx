import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

export default function SmishingPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/news');
  };

  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h1>SmishingPage</h1>
      <Button
        className='bg-sjz-red-main h-12 w-80'
        buttonText={'다음'}
        onClick={handleNext}
      />
    </div>
  );
}
