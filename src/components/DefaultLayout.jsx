import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 p-2'>
      <div className='scrollbar-hide h-[853px] w-[393px] overflow-hidden overflow-y-scroll rounded-4xl border-4 border-black bg-gradient-to-b from-white to-[#FFEFEF] shadow-2xl'>
        <Outlet />
      </div>
    </div>
  );
}
