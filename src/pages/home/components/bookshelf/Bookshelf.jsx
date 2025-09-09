import ShelfRow from './ShelfRow';

export default function Bookshelf({ books }) {
  const [bestBooks, newBooks, defaultBooks] = books;

  return (
    <div className='flex flex-col items-center h-110'>
      <ShelfRow books={bestBooks} />
      <ShelfRow books={newBooks} />
      <ShelfRow books={defaultBooks} />
    </div>
  );
}
