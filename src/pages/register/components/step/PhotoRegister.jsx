import { Button } from '../../../../components/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Notice = () => {
  return (
    <div className='w-80 p-4 bg-blue-50 rounded-xl flex items-center'>
      <img src='/icons/notice.svg' alt='info' className='w-5 h-5' />
      <div className='ml-3 flex flex-col'>
        <span className='text-blue-700 text-sm font-medium'>
          안전한 사진 보관
        </span>
        <span className='text-blue-600 text-xs'>
          등록된 사진은 안전하게 암호화되어 저장됩니다
        </span>
      </div>
    </div>
  );
};

export default function PhotoRegister({ onNextStep }) {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [preview, setPreview] = useState(null);

  const onSubmit = data => {
    if (!data.photo) {
      alert('사진을 등록해주세요');
      return;
    }
    console.log('Form Data:', data);
    onNextStep();
  };

  const handleImageChange = e => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('파일 크기는 5MB 이하여야 합니다.');
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

  return (
    <div className='w-80 flex flex-col items-center justify-between h-full'>
      <div className='flex flex-col items-center justify-center h-full'>
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
          onSubmit={handleSubmit(onSubmit)}
          className='w-full flex flex-col items-center'
        >
          <label className='relative w-32 h-32 rounded-full flex items-center justify-center overflow-hidden mb-4 cursor-pointer group transition-all duration-200'>
            <input
              type='file'
              accept='image/*'
              className='hidden'
              {...register('photo', { required: true })}
              onChange={handleImageChange}
            />
            <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center group-hover:bg-black/30'>
              <img src='/icons/camera.svg' alt='camera' className='w-8 h-8' />
            </div>
            <div className='w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
              {preview ? (
                <img
                  className='w-full h-full object-cover'
                  src={preview}
                  alt='프로필 사진'
                />
              ) : (
                <div className='flex flex-col items-center justify-center p-2'>
                  <img
                    src='/icons/upload.svg'
                    alt='upload'
                    className='w-8 h-8 mb-2'
                  />
                  <span className='text-xs text-gray-500 text-center'>
                    클릭하여
                    <br />
                    사진 추가
                  </span>
                </div>
              )}
            </div>
          </label>
          <div className='w-full mb-4 flex items-center justify-center text-sm text-gray-500'>
            {watch('photo')?.name && (
              <span className='truncate max-w-[200px]'>
                {watch('photo').name}
              </span>
            )}
          </div>
        </form>
        <Notice />
      </div>
      <Button
        onClick={handleSubmit(onSubmit)}
        className='bg-sjz-red-main w-full h-15 font-bold text-xl'
      >
        다음
      </Button>
    </div>
  );
}
