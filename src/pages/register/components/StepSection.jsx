const STEPS = [
  {
    id: 'photo',
    title: '사진 등록',
    description:
      '가족이 쉽게 알아볼 수 있도록 최근 사진을 등록해주세요.\n할머니, 할아버지가 더욱 친근하게\n느끼실 수 있어요.',
    iconBg: '#DBEAFE',
    icon: <img src='/icons/camera.svg' alt='photo' />,
  },
  {
    id: 'voice',
    title: '목소리 등록',
    description:
      '1분 정도의 목소리를 등록하면, 예방 교육을 할 때 실제 가족의 목소리로 안내를 들을 수 있어요.',
    iconBg: '#DCFCE7',
    icon: <img src='/icons/mic.svg' alt='microphone' />,
  },
  {
    id: 'security',
    title: '안전한 보관',
    description:
      '등록된 사진과 음성은 암호화되어 안전하게 보관되며, 오직 가족 보호 목적으로만 사용됩니다.',
    iconBg: '#F3E8FF',
    icon: <img src='/icons/guard.svg' alt='lock' />,
  },
];

const StepSectionItem = ({ step }) => {
  return (
    <div
      key={step.id}
      className='flex flex-col p-6 bg-white border border-gray-200 rounded-2xl shadow-xl'
    >
      <div className='flex items-start gap-4'>
        <div
          className='flex justify-center items-center w-12 h-12 rounded-full flex-shrink-0'
          style={{ backgroundColor: step.iconBg }}
        >
          {step.icon}
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-sm font-bold'>{step.title}</h3>
          <p className='text-sm text-gray-800 whitespace-pre-line break-keep'>
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function StepSection() {
  return (
    <div className='flex flex-col gap-6 w-80 mx-auto'>
      {STEPS.map(step => (
        <StepSectionItem key={step.id} step={step} />
      ))}
    </div>
  );
}
