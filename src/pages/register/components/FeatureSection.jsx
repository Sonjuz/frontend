const FEATURES = [
  {
    id: 'feature1',
    icon: '/icons/heart.svg',
    iconBg: '#DBEAFE',
    title: '친근한 교육',
    description: '가족의 목소리로 더욱 친근한 안내',
  },
  {
    id: 'feature2',
    icon: '/icons/focus.svg',
    iconBg: '#DBEAFE',
    title: '집중력 향상',
    description: '익숙한 목소리로 더 집중해서 학습',
  },
  {
    id: 'feature3',
    icon: '/icons/smile.svg',
    iconBg: '#FEE2E2',
    title: '정서적 안정',
    description: '가족의 목소리로 안정감 제공',
  },
  {
    id: 'feature4',
    icon: '/icons/guard.svg',
    iconBg: '#F3E8FF',
    title: '효과적 예방',
    description: '더욱 현실적인 보이스 피싱 예방',
  },
];

const FeatureSectionItem = ({ feature }) => {
  return (
    <div className='flex h-38 w-38 flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white shadow-2xl'>
      <div
        className='flex h-10 w-10 items-center justify-center rounded-full'
        style={{ backgroundColor: feature.iconBg }}
      >
        <img src={feature.icon} alt={feature.title} className='h-6 w-6' />
      </div>
      <div className='text-base font-semibold'>{feature.title}</div>
      <div className='w-30 text-center text-sm break-keep whitespace-pre-line text-gray-800'>
        {feature.description}
      </div>
    </div>
  );
};

export default function FeatureSection() {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-4'>
      {FEATURES.map(feature => (
        <FeatureSectionItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
