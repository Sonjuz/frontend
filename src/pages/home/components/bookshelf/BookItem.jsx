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
      <img
        src={book.icon}
        alt={book.title}
        className='h-36 w-24'
        onClick={() => handleClick(book)}
      />
    </div>
  );
}
