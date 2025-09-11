import { useNavigate } from 'react-router-dom';

export default function BookItem({ book }) {
  const navigate = useNavigate();

  const handleClick = book => {
    navigate('/scenario/detail', {
      state: {
        scenarioId: book.id,
        title: book.title,
        icon: book.icon,
      },
    });
  };

  return (
    <div className='h-36 w-24 cursor-pointer'>
      <div className='text-sm font-bold text-gray-600'>
        {book.target_impersonation}
      </div>
      <img
        src={book.cover_image}
        alt={book.title}
        className='h-36 w-24 rounded-lg'
        onClick={() => handleClick(book)}
      />
    </div>
  );
}
