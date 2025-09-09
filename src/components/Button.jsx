export const Button = ({ onClick, disabled, buttonText, className }) => {
  return (
    <button
      className={`
        cursor-pointer px-6 py-3
        text-white rounded-xl
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-sjz-red-main focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};
