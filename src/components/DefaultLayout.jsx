import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-2'>
      <div className='w-[393px] h-[853px] bg-gradient-to-b from-white to-[#FFEFEF] border-4 border-black rounded-4xl overflow-hidden shadow-2xl overflow-y-scroll scrollbar-hide'>
        <Outlet />
      </div>
    </div>
  );
}
