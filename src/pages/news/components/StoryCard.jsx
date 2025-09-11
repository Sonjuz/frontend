import AutoPlayTTS from './AutoPlayTTS';

export default function StoryCard({
  title,
  alt,
  image,
  description,
  ttsUrl,
  onTTSEnd,
}) {
  return (
    <div className='flex h-140 w-full flex-col items-center gap-6 rounded-3xl bg-white p-4'>
      <h2 className='text-3xl font-bold text-gray-900'>{title}</h2>
      <div className='relative w-full overflow-hidden rounded-2xl border-8 border-gray-100'>
        <img src={image} alt={alt} className='h-full w-full object-cover' />
      </div>
      <div className='flex items-center justify-center text-center text-2xl break-keep text-gray-700'>
        {description}
      </div>
      <AutoPlayTTS ttsUrl={ttsUrl} onEnded={onTTSEnd} />
    </div>
  );
}
