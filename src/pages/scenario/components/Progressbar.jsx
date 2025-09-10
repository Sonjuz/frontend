export const ProgressBar = ({ steps, currentStep = 0 }) => {
  return (
    <div className='relative h-12 w-80'>
      <div className='absolute top-6 left-0 h-[1px] w-full bg-gray-200' />
      <div className='relative flex h-full w-full items-center justify-between'>
        {Array.from({ length: steps }, (_, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={index}>
              {isActive ? (
                <div className='bg-sjz-red-main/30 flex h-12 w-12 items-center justify-center rounded-full'>
                  <div className='bg-sjz-red-main flex h-9 w-9 items-center justify-center rounded-full'>
                    <span className='text-xl font-bold text-white'>
                      {index + 1}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className={`h-6 w-6 rounded-full ${
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
