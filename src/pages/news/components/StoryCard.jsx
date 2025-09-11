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
    <div className='content-fade-in flex h-140 w-full flex-col items-center gap-6 rounded-3xl bg-white p-4'>
      <h2 className='content-fade-in text-3xl font-bold text-gray-900 delay-100'>
        {title}
      </h2>
      <div className='content-fade-in relative w-full overflow-hidden rounded-2xl border-8 border-gray-100 delay-200'>
        <img src={image} alt={alt} className='h-full w-full object-cover' />
        {/* 동화책 느낌의 반짝이는 효과 */}
        <div className='animate-sparkle absolute -top-2 -right-2 size-4 rounded-full bg-yellow-200' />
        <div className='animate-sparkle absolute -top-1 right-1/4 size-3 rounded-full bg-yellow-200 delay-100' />
        <div className='animate-sparkle absolute -top-2 right-2/3 size-3 rounded-full bg-yellow-200 delay-200' />
      </div>
      <div className='content-fade-in flex items-center justify-center text-center text-2xl break-keep text-gray-700 delay-300'>
        {description}
      </div>
      <div className='content-fade-in w-full delay-300'>
        <AutoPlayTTS ttsUrl={ttsUrl} onEnded={onTTSEnd} />
      </div>
    </div>
  );
}
