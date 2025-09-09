export default function BookItem({ book }) {
  const handleClick = book => {
    alert(`${book.title} 클릭`);
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
