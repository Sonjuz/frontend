import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { SMISHING_SCENARIO } from '../../constants/scenario';

const MessageHeader = ({ type }) => {
  return (
    <div className='bg-white px-4 py-3 shadow-sm'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          {type === 'call' ? (
            <>
              <img src='/icons/phone.svg' alt='통화' className='size-6' />
              <span className='text-lg font-medium text-gray-800'>통화중</span>
            </>
          ) : (
            <>
              <img src='/icons/message.svg' alt='메시지' className='size-6' />
              <span className='text-lg font-medium text-gray-800'>메시지</span>
            </>
          )}
        </div>
        {type === 'message' && (
          <div className='flex items-center gap-2'>
            <button className='rounded-full p-2 hover:bg-gray-100'>
              <img src='/icons/search.svg' alt='검색' className='size-5' />
            </button>
            <button className='rounded-full p-2 hover:bg-gray-100'>
              <img src='/icons/menu.svg' alt='메뉴' className='size-5' />
            </button>
          </div>
        )}
        {type === 'call' && (
          <div className='text-sm text-gray-500'>통화중 00:45</div>
        )}
      </div>
    </div>
  );
};

const MessageBubble = ({ message, isUser }) => {
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-end gap-2`}
    >
      {!isUser && (
        <div className='flex size-10 items-center justify-center rounded-full bg-gray-200'>
          <img
            src='/icons/relation-other.svg'
            alt='상대방'
            className='size-8'
          />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl p-3 ${
          isUser ? 'bg-sjz-red-main text-white' : 'bg-gray-100 text-gray-800'
        }`}
      >
        <p className='text-2xl leading-relaxed'>{message.text}</p>
        <div className='mt-1 text-right text-lg'>
          {new Date().toLocaleTimeString('ko-KR', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </div>
      </div>
    </div>
  );
};

const EducationModal = ({ choice, onClose, onNext }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
      <div className='w-full max-w-md rounded-2xl bg-white p-6'>
        <div
          className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
            choice.is_correct ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          <img
            src={`/icons/${choice.is_correct ? 'check' : 'warning'}.svg`}
            alt='결과'
            className='h-8 w-8'
          />
        </div>
        <h3 className='mb-2 text-center text-xl font-bold text-gray-800'>
          {choice.result_message}
        </h3>
        <div className='mb-6 rounded-xl bg-gray-50 p-4'>
          <h4 className='mb-2 font-semibold text-gray-800'>교육 포인트</h4>
          <p className='text-gray-600'>{choice.education_point}</p>
        </div>
        <div className='flex gap-3'>
          <button
            onClick={onClose}
            className='flex-1 rounded-xl border border-gray-200 py-3 font-medium text-gray-600 transition-colors hover:bg-gray-50'
          >
            다시 선택하기
          </button>
          <button
            onClick={onNext}
            className='flex-1 rounded-xl bg-blue-500 py-3 font-medium text-white transition-colors hover:bg-blue-600'
          >
            다음으로
          </button>
        </div>
      </div>
    </div>
  );
};

const ChoiceButtons = ({ choices, onSelect }) => {
  return (
    <div className='flex flex-col gap-3 p-4'>
      {choices.map(choice => (
        <button
          key={choice.choice_id}
          onClick={() => onSelect(choice)}
          className='group w-full rounded-xl bg-white p-4 text-left shadow-sm transition-all hover:scale-[1.02] hover:shadow-md'
        >
          <p className='text-base font-medium text-gray-800 group-hover:text-blue-600'>
            {choice.choice_text}
          </p>
        </button>
      ))}
    </div>
  );
};

export default function SmishingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleNext = () => {
    if (currentStep < SMISHING_SCENARIO.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      const nextMessages = SMISHING_SCENARIO.steps[currentStep + 1].messages;
      setMessages(prev => [...prev, ...nextMessages]);
    } else {
      navigate('/news');
    }
  };

  const handleChoiceSelect = choice => {
    setSelectedChoice(choice);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedChoice(null);
  };

  const handleModalNext = () => {
    setShowModal(false);
    if (
      selectedChoice.next_step === 'end_safe' ||
      selectedChoice.next_step === 'end_fraud'
    ) {
      navigate('/news');
    } else {
      setCurrentStep(selectedChoice.next_step - 1);
      const nextMessages =
        SMISHING_SCENARIO.steps[selectedChoice.next_step - 1].messages;
      setMessages(prev => [...prev, ...nextMessages]);
    }
    setSelectedChoice(null);
  };

  // 컴포넌트 마운트 시 첫 메시지 설정
  useEffect(() => {
    const initialMessages = SMISHING_SCENARIO.steps[0].messages;
    if (initialMessages) {
      setMessages(initialMessages);
    }
  }, []);

  const currentScenario = SMISHING_SCENARIO.steps[currentStep];

  const renderContent = () => {
    switch (currentScenario.screen_type) {
      case 'call':
        return (
          <>
            <MessageHeader type='call' />
            <div className='scrollbar-hide flex-1 overflow-y-auto p-4 text-2xl'>
              <div className='flex w-full flex-col gap-4'>
                {messages.map((message, index) => (
                  <MessageBubble
                    key={index}
                    message={message}
                    isUser={message.sender === 'user'}
                  />
                ))}
              </div>
            </div>
            <div className='bg-white p-4'>
              <Button
                onClick={handleNext}
                className='h-14 w-full rounded-xl bg-red-500 text-lg font-medium text-white'
              >
                통화 종료
              </Button>
            </div>
          </>
        );

      case 'message':
        return (
          <>
            <MessageHeader type='message' />
            <div className='scrollbar-hide flex-1 overflow-y-auto p-4 text-2xl'>
              <div className='flex w-full flex-col gap-4 text-2xl'>
                {messages.map((message, index) => (
                  <MessageBubble
                    key={index}
                    message={message}
                    isUser={message.sender === 'user'}
                  />
                ))}
              </div>
            </div>
            <div className='bg-white p-4'>
              <Button
                onClick={handleNext}
                className='bg-sjz-red-main h-14 w-full rounded-xl text-lg font-medium text-white'
              >
                다음
              </Button>
            </div>
          </>
        );

      case 'choice':
        return (
          <>
            <MessageHeader type='message' />
            <div className='scrollbar-hide flex-1 overflow-y-auto p-4 text-2xl'>
              <div className='flex w-full flex-col gap-4 text-2xl'>
                {messages.map((message, index) => (
                  <MessageBubble
                    key={index}
                    message={message}
                    isUser={message.sender === 'user'}
                  />
                ))}
              </div>
            </div>
            <ChoiceButtons
              choices={currentScenario.choices}
              onSelect={handleChoiceSelect}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className='flex h-full w-full flex-col bg-white'>
      {renderContent()}
      {showModal && selectedChoice && (
        <EducationModal
          choice={selectedChoice}
          onClose={handleCloseModal}
          onNext={handleModalNext}
        />
      )}
    </div>
  );
}
