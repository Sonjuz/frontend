import { Button } from '../../../../components/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Notice = () => {
  return (
    <div className='flex w-80 items-center rounded-xl bg-blue-50 p-4'>
      <img src='/icons/notice.svg' alt='info' className='h-5 w-5' />
      <div className='ml-3 flex flex-col'>
        <span className='text-sm font-medium text-blue-700'>
          안전한 사진 보관
        </span>
        <span className='text-xs text-blue-600'>
          등록된 사진은 안전하게 암호화되어 저장됩니다
        </span>
      </div>
    </div>
  );
};

export default function PhotoRegister({ onNextStep }) {
  const { register, setValue, watch } = useForm();
  const [preview, setPreview] = useState(null);

  const handleSubmit = () => {
    if (!watch('photo')?.name) {
      alert('사진을 등록해주세요');
      return;
    }

    const file = watch('photo');
    const fileUrl = URL.createObjectURL(file);

    console.log('Selected File Info:', {
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(2)}MB`,
      url: fileUrl,
    });

    onNextStep();
  };

  const handleImageChange = e => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('파일 크기는 10MB 이하여야 합니다.');
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 선택 가능합니다.');
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setValue('photo', file);
    }
  };

  const handleNextStep = () => {
    if (!watch('photo')?.name) {
      alert('사진을 등록해주세요');
      return;
    }

    onNextStep();
  };

  return (
    <div className='flex h-full w-80 flex-col items-center justify-between'>
      <div className='flex h-full flex-col items-center justify-center'>
        <div className='mb-8 text-center'>
          <h1 className='mb-4 text-2xl font-bold text-gray-800'>
            프로필 사진을 등록해주세요
          </h1>
          <p className='text-sm text-gray-600'>
            가족이 쉽게 알아볼 수 있도록
            <br />
            최근 사진을 등록해주세요
          </p>
        </div>
        <form
          className='flex w-full flex-col items-center'
          onSubmit={handleNextStep}
        >
          <label className='group relative mb-4 flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden rounded-full transition-all duration-200'>
            <input
              type='file'
              accept='image/*'
              className='hidden'
              {...register('photo', { required: true })}
              onChange={handleImageChange}
            />
            <div className='absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:bg-black/30 group-hover:opacity-100'>
              <img src='/icons/camera.svg' alt='camera' className='h-8 w-8' />
            </div>
            <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200'>
              {preview ? (
                <img
                  className='h-full w-full object-cover'
                  src={preview}
                  alt='프로필 사진'
                />
              ) : (
                <div className='flex flex-col items-center justify-center p-2'>
                  <img
                    src='/icons/upload.svg'
                    alt='upload'
                    className='mb-2 h-8 w-8'
                  />
                  <span className='text-center text-xs text-gray-500'>
                    클릭하여
                    <br />
                    사진 추가
                  </span>
                </div>
              )}
            </div>
          </label>
          <div className='mb-4 flex w-full items-center justify-center text-sm text-gray-500'>
            {watch('photo')?.name && (
              <span className='max-w-[200px] truncate'>
                {watch('photo').name}
              </span>
            )}
          </div>
        </form>
        <Notice />
      </div>
      <Button
        disabled={!watch('photo')?.name}
        type='submit'
        onClick={handleSubmit}
        className='bg-sjz-red-main h-15 w-full text-xl font-bold disabled:cursor-not-allowed disabled:opacity-50'
      >
        다음
      </Button>
    </div>
  );
}
