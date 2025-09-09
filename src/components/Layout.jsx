import React from 'react';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='sjz-width bg-white shadow-lg rounded-lg overflow-hidden'>
        {children}
      </div>
    </div>
  );
}
