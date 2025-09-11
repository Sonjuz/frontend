import AutoPlayTTS from './AutoPlayTTS';

export default function StoryCard({
  title,
  description,
  ttsUrl,
  onTTSEnd,
  image,
}) {
  return (
    <div className='flex h-120 w-full'>
      <div className='animate-swing-in-left-fwd flex h-120 w-full flex-col items-center gap-6 rounded-r-2xl bg-white p-4 pt-10 shadow-2xl'>
        <img src={image} alt={title} className='size-40' />
        <h2 className='text-3xl font-bold text-gray-900 delay-100'>{title}</h2>
        <div className='flex items-center justify-center text-center text-2xl break-keep text-gray-700 delay-300'>
          {description}
        </div>
        <div className='hidden w-full'>
          <AutoPlayTTS ttsUrl={ttsUrl} onEnded={onTTSEnd} />
        </div>
      </div>
      <div className='h-full w-4 rounded-r-2xl border-r-2 border-gray-200' />
      <div className='h-full w-4 rounded-r-2xl border-t-2 border-r-2 border-b-2 border-gray-200' />
    </div>
  );
}
