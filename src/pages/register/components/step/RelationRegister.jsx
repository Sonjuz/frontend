import { Button } from '../../../../components/Button';
import { useForm } from 'react-hook-form';

const NoticeCard = () => {
  return (
    <div className='w-80 p-4 bg-yellow-50 rounded-xl flex items-start'>
      <div className='w-5 h-5 mt-0.5'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z'
            fill='#EAB308'
          />
        </svg>
      </div>
      <div className='ml-3 flex flex-col'>
        <h3 className='mb-1 text-sm font-medium text-yellow-700'>
          이름 등록 팁
        </h3>
        <p className='text-xs text-yellow-600'>
          평소 가족들이 부르는 애칭이나 별명을 사용하면 더욱
          <br />
          친근해요
        </p>
      </div>
    </div>
  );
};

export default function RelationRegister() {
  const { register, setValue, watch } = useForm({
    defaultValues: {
      name: '',
      relation: '',
    },
  });

  const selectedRelation = watch('relation');

  const handleRelationSelect = relation => {
    setValue('relation', relation);
  };

  return (
    <div className='w-80 flex flex-col justify-between h-full'>
      <div className='text-center'>
        <h1 className='mb-4 text-3xl font-bold text-gray-800'>
          이름과 관계를
          <br />
          알려주세요
        </h1>
        <p className='text-base text-gray-600 leading-relaxed'>
          가족들이 친근하게 부르는
          <br />
          이름으로 등록해주세요
        </p>
      </div>
      <label className='block mb-3 text-lg font-medium text-gray-700'>
        이름 (별명)
      </label>
      <div className='w-full h-14 px-5 bg-white rounded-2xl border-2 border-gray-200 flex items-center focus-within:border-sjz-red-main'>
        <input
          type='text'
          placeholder='예: 영희, 철수, 민수 등'
          className='w-full text-lg text-gray-900 placeholder-gray-400 outline-none'
          {...register('name', { required: true })}
        />
      </div>
      <label className='block my-4 text-lg font-medium text-gray-700'>
        가족 관계
      </label>
      <div className='grid grid-cols-3 gap-3 mb-6'>
        <button
          onClick={() => handleRelationSelect('아들/딸')}
          className={`aspect-square p-4 rounded-3xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-200
            ${
              selectedRelation === '아들/딸'
                ? 'bg-gradient-to-br from-sjz-red-bright/10 to-sjz-red-main/5 border-sjz-red-main shadow-lg'
                : 'bg-white border-gray-100 hover:border-gray-200'
            }`}
        >
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200
            ${
              selectedRelation === '아들/딸'
                ? 'bg-gradient-to-br from-sjz-red-bright to-sjz-red-main/30'
                : 'bg-gradient-to-br from-red-50 to-red-50'
            }`}
          >
            <img
              src='/icons/relation-son.svg'
              alt='아들/딸'
              className='w-8 h-8'
            />
          </div>
          <div className='text-center'>
            <p
              className={`font-medium transition-colors duration-200 ${selectedRelation === '아들/딸' ? 'text-sjz-red-main' : 'text-gray-700'}`}
            >
              아들/딸
            </p>
          </div>
        </button>
        <button
          onClick={() => handleRelationSelect('손자/손녀')}
          className={`aspect-square p-4 rounded-3xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-200
            ${
              selectedRelation === '손자/손녀'
                ? 'bg-gradient-to-br from-sjz-red-bright/10 to-sjz-red-main/5 border-sjz-red-main shadow-lg'
                : 'bg-white border-gray-100 hover:border-gray-200'
            }`}
        >
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200
            ${
              selectedRelation === '손자/손녀'
                ? 'bg-gradient-to-br from-sjz-red-bright to-sjz-red-main/30'
                : 'bg-gradient-to-br from-red-50 to-red-50'
            }`}
          >
            <img
              src='/icons/relation-grandchildren.svg'
              alt='손자/손녀'
              className='w-8 h-8'
            />
          </div>
          <div className='text-center'>
            <p
              className={`font-medium transition-colors duration-200 ${selectedRelation === '손자/손녀' ? 'text-sjz-red-main' : 'text-gray-700'}`}
            >
              손자/손녀
            </p>
          </div>
        </button>
        <button
          onClick={() => handleRelationSelect('기타')}
          className={`aspect-square p-4 rounded-3xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-200
            ${
              selectedRelation === '기타'
                ? 'bg-gradient-to-br from-sjz-red-bright/10 to-sjz-red-main/5 border-sjz-red-main shadow-lg'
                : 'bg-white border-gray-100 hover:border-gray-200'
            }`}
        >
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200
            ${
              selectedRelation === '기타'
                ? 'bg-gradient-to-br from-sjz-red-bright to-sjz-red-main/30'
                : 'bg-gradient-to-br from-red-50 to-red-50'
            }`}
          >
            <img
              src='/icons/relation-other.svg'
              alt='기타'
              className='w-8 h-8'
            />
          </div>
          <div className='text-center'>
            <p
              className={`font-medium transition-colors duration-200 ${selectedRelation === '기타' ? 'text-sjz-red-main' : 'text-gray-700'}`}
            >
              기타
            </p>
          </div>
        </button>
      </div>
      <NoticeCard />
      <Button
        onClick={() => {
          console.log(watch('name'));
          console.log(watch('relation'));
        }}
        disabled={!watch('name') || !watch('relation')}
        className='bg-sjz-red-main h-12 w-80 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
      >
        다음
      </Button>
    </div>
  );
}
