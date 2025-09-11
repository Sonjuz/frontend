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
      <div className='text-sm font-bold text-gray-600'>
        {book.target_impersonation}
      </div>
      <img
        src={book.cover_image}
        alt={book.scenario_title}
        className='h-36 w-24 rounded-lg'
        onClick={() => handleClick(book)}
      />
    </div>
  );
}
