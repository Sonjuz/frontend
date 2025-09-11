import { useEffect } from 'react';

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  image = '/images/character-success.png',
  confirmText = '확인',
  cancelText,
  onConfirm,
  type = 'success', // success, warning, error
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getImageSrc = () => {
    switch (type) {
      case 'warning':
        return '/images/character-fail.png';
      case 'error':
        return '/images/character-fail.png';
      default:
        return image;
    }
  };

  const getColorClass = () => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'error':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-sjz-red-main hover:bg-sjz-red-dark';
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div
        className='absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity'
        onClick={onClose}
      />
      <div className='relative z-10 w-[320px] scale-100 transform rounded-2xl bg-white p-6 shadow-2xl transition-all duration-200'>
        <div className='flex flex-col items-center gap-6'>
          <div className='relative flex items-center justify-center'>
            <div className='relative'>
              <img
                src={getImageSrc()}
                alt='캐릭터'
                className='animate-bounce-gentle w-32 select-none'
              />
              {(type === 'warning' || type === 'error') && (
                <div
                  className={`absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg ${
                    type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                >
                  !
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-col items-center gap-2 text-center'>
            <h2 className='text-2xl font-bold text-gray-900'>{title}</h2>
            <p className='text-lg break-keep whitespace-pre-line text-gray-600'>
              {description}
            </p>
          </div>
          <div className='flex w-full gap-3'>
            {cancelText && (
              <button
                onClick={onClose}
                className='flex-1 rounded-xl border border-gray-200 bg-white py-3 text-base font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98]'
              >
                {cancelText}
              </button>
            )}
            <button
              onClick={() => {
                onConfirm?.();
                onClose();
              }}
              className={`flex-1 rounded-xl py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 active:scale-[0.98] ${getColorClass()}`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
