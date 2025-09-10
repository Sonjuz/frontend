export const Button = ({ icon, onClick, disabled, className, children }) => {
  return (
    <button
      className={`
        flex items-center justify-center
        w-70 h-12
        py-3
        rounded-xl
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      <div className='flex items-center pr-2'>
        {icon && <img src={icon} alt={icon} className='w-6 h-6' />}
      </div>
      {children}
    </button>
  );
};
