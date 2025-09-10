import { Button } from '../../../../components/Button';

const RelationCard = ({ icon, title }) => {
  return (
    <button className='relative h-22 w-full bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 flex items-center px-6 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group'>
      <div className='w-16 h-16 bg-gradient-to-br from-red-50 to-red-50 rounded-2xl flex items-center justify-center mr-4 group-hover:from-sjz-red-bright group-hover:to-white transition-all duration-200 rotate-3 group-hover:rotate-6'>
        <img
          src={icon}
          alt={title}
          className='w-10 h-10 group-hover:scale-110 transition-transform duration-200'
        />
      </div>
      <div className='flex flex-col items-start'>
        <span className='text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
          {title}
        </span>
        <span className='text-sm text-gray-400 mt-1'>선택하기</span>
      </div>
    </button>
  );
};

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
      <div className='w-full h-14 px-5 bg-white rounded-2xl border-2 border-gray-200 flex items-center focus-within:border-blue-400'>
        <input
          type='text'
          placeholder='예: 영희, 철수, 민수 등'
          className='w-full text-lg text-gray-900 placeholder-gray-400 outline-none'
        />
      </div>
      <label className='block my-4 text-lg font-medium text-gray-700'>
        가족 관계
      </label>
      <div className='relative h-40 overflow-y-scroll scrollbar-hide'>
        <div className='flex flex-col gap-6 pb-4'>
          <RelationCard icon='/icons/relation-son.svg' title='아들/딸' />
          <RelationCard
            icon='/icons/relation-grandchildren.svg'
            title='손자/손녀'
          />
          <RelationCard icon='/icons/relation-other.svg' title='기타' />
        </div>
      </div>
      <NoticeCard />
      <div className='flex gap-x-2'>
        <Button
          onClick={() => {}}
          className='bg-white h-12 w-30 border border-[#BABABA] text-black!'
        >
          이전
        </Button>
        <Button
          onClick={() => {}}
          className='bg-sjz-red-main h-12 w-30 text-white'
        >
          다음
        </Button>
      </div>
    </div>
  );
}
