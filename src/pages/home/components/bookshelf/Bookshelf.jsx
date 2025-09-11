import ShelfRow from './ShelfRow';

export default function Bookshelf({ popular, latest, recommended }) {
  return (
    <div className='flex h-full flex-col gap-1'>
      <div className='text-xl font-bold text-gray-600'>인기 책</div>
      <ShelfRow books={popular} />
      <div className='text-xl font-bold text-gray-600'>최신 책</div>
      <ShelfRow books={latest} />
      <div className='text-xl font-bold text-gray-600'>추천 책</div>
      <ShelfRow books={recommended} />
    </div>
  );
}
