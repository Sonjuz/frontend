import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

export default function ProfilePage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/scenario/voice');
  };

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1>ProfilePage</h1>
      <Button
        className='bg-sjz-red-main w-80 h-12'
        buttonText={'다음'}
        onClick={handleNext}
      />
    </div>
  );
}
