'use client';

import { useState } from 'react';
import { TbLoader } from 'react-icons/tb';

const Chat = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setLoading(true);
    if (!question) {
      setLoading(false);
      return;
    }

    const response = await fetch('/api/chat-ai', {
      body: JSON.stringify({ question }),
      method: 'POST',
    });

    const res = await response.json();

    setLoading(false);
    setAnswer(res.answer);
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='flex items-center space-x-1'>
        <input
          type='text'
          name='question'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder='Ask your question...'
          className='border border-spacing-2 border-zinc-400 w-full p-2 rounded-full'
        />

        <button
          disabled={loading}
          onClick={handleClick}
          className='bg-violet-600 text-white px-4 py-2 rounded-full'
        >
          {loading ? <TbLoader className='size-5 animate-spin' /> : <>Send</>}
        </button>
      </div>
      <div>
        {answer ? (
          <p className='grow mt-4 border bg-white p-4 rounded-xl shadow-md'>
            {answer}
          </p>
        ) : null}
      </div>
    </div>
  );
};
export default Chat;
