import BookItem from './BookItem';

const ShelfDivider = () => {
  return <div className='mt-2 h-2 w-full rounded-lg bg-amber-800' />;
};

export default function ShelfRow({ books }) {
  return (
    <div className='flex flex-col'>
      <div className='mb-1 flex h-35 items-center gap-4'>
        {books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <ShelfDivider />
    </div>
  );
}
