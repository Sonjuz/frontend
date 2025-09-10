import ShelfRow from './ShelfRow';

export default function Bookshelf({ books }) {
  const [bestBooks, newBooks, defaultBooks] = books;

  return (
    <div className='flex h-110 flex-col items-center'>
      <ShelfRow books={bestBooks} />
      <ShelfRow books={newBooks} />
      <ShelfRow books={defaultBooks} />
    </div>
  );
}
