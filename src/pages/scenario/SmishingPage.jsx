import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

export default function SmishingPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/news');
  };

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1>SmishingPage</h1>
      <Button
        className='bg-sjz-red-main w-80 h-12'
        buttonText={'다음'}
        onClick={handleNext}
      />
    </div>
  );
}
