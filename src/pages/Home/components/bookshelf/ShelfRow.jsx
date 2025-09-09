import BookItem from './BookItem';

const ShelfDivider = () => {
  return <div className='w-full h-2 bg-amber-800 mt-2 rounded-lg' />;
};

export default function ShelfRow({ books }) {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-4 items-center mb-1'>
        {books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <ShelfDivider />
    </div>
  );
}
