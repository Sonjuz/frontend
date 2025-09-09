import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function NewsSummaryPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1>NewsSummaryPage</h1>
      <Button
        className='bg-sjz-red-main w-80 h-12'
        buttonText={'다음'}
        onClick={handleNext}
      />
    </div>
  );
}
