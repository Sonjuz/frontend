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
    <div className='w-24 h-36 cursor-pointer'>
      <img
        src={book.icon}
        alt={book.title}
        className='w-24 h-36'
        onClick={() => handleClick(book)}
      />
    </div>
  );
}
