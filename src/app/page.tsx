import Chat from '@/components/Chat';

export default function Home() {
  return (
    <main
      className='h-screen flex flex-col w-full items-center mt-8 gap-y-16 max-w-5xl p-4 mx-auto
    '
    >
      <h1 className='text-5xl font-bold text-violet-600'>🤖 NLP CHAT BOT</h1>

      <div className='grow  w-full'>
        <Chat />
      </div>
    </main>
  );
}
