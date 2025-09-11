import AutoPlayTTS from './AutoPlayTTS';

export default function StoryCard({
  title,
  description,
  ttsUrl,
  onTTSEnd,
  image,
}) {
  return (
    <div className='flex h-120 w-full flex-col items-center gap-6 rounded-r-2xl border-2 bg-white p-4 pt-10 shadow-2xl'>
      <img
        src={image}
        alt={title}
        className='animate-swing-in-left-fwd size-40'
      />
      <h2 className='text-3xl font-bold text-gray-900 delay-100'>{title}</h2>
      <div className='flex items-center justify-center text-center text-2xl break-keep text-gray-700 delay-300'>
        {description}
      </div>
      <div className='hidden w-full'>
        <AutoPlayTTS ttsUrl={ttsUrl} onEnded={onTTSEnd} />
      </div>
    </div>
  );
}
