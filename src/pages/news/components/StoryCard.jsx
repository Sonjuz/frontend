import AutoPlayTTS from './AutoPlayTTS';

export default function StoryCard({ title, description, ttsUrl, onTTSEnd }) {
  return (
    <div className='content-fade-in flex h-80 w-full flex-col items-center gap-6 rounded-2xl bg-white p-4 pt-10 shadow-2xl'>
      <h2 className='content-fade-in text-3xl font-bold text-gray-900 delay-100'>
        {title}
      </h2>
      <div className='content-fade-in flex items-center justify-center text-center text-2xl break-keep text-gray-700 delay-300'>
        {description}
      </div>
      <div className='content-fade-in hidden w-full'>
        <AutoPlayTTS ttsUrl={ttsUrl} onEnded={onTTSEnd} />
      </div>
    </div>
  );
}
