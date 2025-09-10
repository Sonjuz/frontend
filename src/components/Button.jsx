export const Button = ({ icon, onClick, disabled, className, children }) => {
  return (
    <button
      className={`flex h-12 w-70 cursor-pointer items-center justify-center rounded-xl py-3 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${className} `}
      onClick={onClick}
      disabled={disabled}
    >
      <div className='flex items-center pr-2'>
        {icon && <img src={icon} alt={icon} className='h-6 w-6' />}
      </div>
      {children}
    </button>
  );
};
