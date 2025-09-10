import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const ScoreItem = ({ value, label, color }) => (
  <div className='flex w-32 flex-col items-center gap-1'>
    <div className={`text-4xl font-bold ${color}`}>{value}</div>
    <div className='text-lg font-bold text-gray-600'>{label}</div>
  </div>
);

const ActionButton = ({ onClick, icon, children, variant = 'white' }) => {
  const baseStyle =
    'h-16 w-full rounded-2xl text-xl font-bold transition-all duration-200';
  const styles = {
    red: `${baseStyle} bg-sjz-red-main text-white hover:bg-red-600`,
    white: `${baseStyle} bg-white text-black hover:bg-gray-100`,
    outline: `${baseStyle} bg-white text-black hover:bg-gray-100 border-sjz-red-main border-2`,
  };

  return (
    <Button onClick={onClick} className={styles[variant]}>
      {icon && <img src={icon} alt='' className='mr-2 size-6' />}
      {children}
    </Button>
  );
};

export default function EndScreen({ correctCount, totalCount, percentage }) {
  const navigate = useNavigate();
  const roundedPercentage = Math.round(percentage);
  const isPassed = roundedPercentage >= 50;

  return (
    <div className='flex h-full w-full flex-col items-center gap-8 p-6'>
      {/* 점수 카드 */}
      <div className='w-full rounded-2xl bg-white p-6 shadow-sm'>
        <div className='flex justify-between'>
          <ScoreItem
            value={`${roundedPercentage}%`}
            label='정답률'
            color='text-green-600'
          />
          <ScoreItem
            value={`${correctCount}/${totalCount}`}
            label='정답 수'
            color='text-rose-500'
          />
        </div>
      </div>

      {/* 결과 캐릭터와 메시지 */}
      <div className='flex flex-col items-center gap-6'>
        <img
          src={`/images/character-${isPassed ? 'success' : 'fail'}.png`}
          alt='결과 캐릭터'
          className='size-48'
        />
        <div className='text-3xl font-bold text-gray-900'>
          {isPassed ? '잘 하셨어요!' : '조금 더 연습해볼까요?'}
        </div>
      </div>

      {/* 버튼 그룹 */}
      <div className='mt-auto flex w-full flex-col gap-4'>
        <ActionButton
          onClick={() => navigate('/news')}
          icon='/icons/speaker.svg'
          variant='red'
        >
          뉴스 요약 들으러 가기
        </ActionButton>
        <ActionButton
          onClick={() => window.location.reload()}
          icon='/icons/reload.svg'
          variant='outline'
        >
          다시 연습하기
        </ActionButton>
        <ActionButton onClick={() => navigate('/')}>
          홈으로 돌아 가기
        </ActionButton>
      </div>
    </div>
  );
}
