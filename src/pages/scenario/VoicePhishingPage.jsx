import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

export default function VoicePhishingPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/scenario/smishing');
  };

  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h1>VoicePhishingPage</h1>
      <Button
        className='bg-sjz-red-main h-12 w-80'
        buttonText={'다음'}
        onClick={handleNext}
      />
    </div>
  );
}
