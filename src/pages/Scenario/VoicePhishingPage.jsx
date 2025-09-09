import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';

export default function VoicePhishingPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/scenario/smishing');
  };

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1>VoicePhishingPage</h1>
      <Button
        className='bg-sjz-red-main w-80 h-12'
        buttonText={'다음'}
        onClick={handleNext}
      />
    </div>
  );
}
