import { useNavigate } from 'react-router-dom';

export default function BookItem({ book }) {
  const navigate = useNavigate();

  const handleClick = book => {
    // 페이지 새로고침 시에도 유지되도록 sessionStorage에 저장
    sessionStorage.setItem(
      `scenario_${book.id}`,
      JSON.stringify({
        cover_image: book.cover_image,
      })
    );

    navigate(`/scenario/${book.id}`, {
      state: { cover_image: book.cover_image },
    });
  };

  return (
    <div className='h-36 w-24 cursor-pointer'>
      <div className='mb-1 w-24 overflow-hidden text-sm font-bold whitespace-nowrap text-gray-600'>
        {book.target_impersonation}
      </div>
      <img
        src={book.cover_image}
        alt={book.scenario_title}
        className='h-32 w-24 transform rounded-r-xl border border-gray-300 bg-gradient-to-r from-gray-200 via-white to-white shadow-[2px_2px_10px_rgba(0,0,0,0.1),_-1px_-1px_4px_rgba(0,0,0,0.05)] transition-transform hover:scale-105 hover:shadow-[4px_4px_20px_rgba(0,0,0,0.15),_-2px_-2px_8px_rgba(0,0,0,0.08)]'
        style={{
          perspective: '500px',
          transformStyle: 'preserve-3d',
          boxShadow: 'inset -8px 0 8px -8px rgba(0,0,0,0.4)',
        }}
        onClick={() => handleClick(book)}
      />
    </div>
  );
}
