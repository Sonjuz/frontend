export const ProgressBar = ({ steps, currentStep = 0 }) => {
  return (
    <div className='relative w-80 h-12'>
      <div className='absolute left-0 top-6 w-full h-[1px] bg-gray-200' />
      <div className='relative w-full h-full flex justify-between items-center'>
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={index}>
              {isActive ? (
                <div className='w-12 h-12 rounded-full bg-sjz-red-main/30 flex items-center justify-center'>
                  <div className='w-9 h-9 rounded-full bg-sjz-red-main flex items-center justify-center'>
                    <span className='text-white text-xl font-bold'>{step}</span>
                  </div>
                </div>
              ) : (
                <div
                  className={`w-6 h-6 rounded-full ${
                    isCompleted ? 'bg-sjz-red-main' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
