import { Ollama } from '@langchain/community/llms/ollama';

export async function POST(req: Request) {
  const { question } = await req.json();

  const ollama = new Ollama({
    baseUrl: 'http://localhost:11434',
    model: 'orca-mini',
  });

  const stream = await ollama.stream(question);


  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  const answer = chunks.join('');

  return Response.json({ answer });
}
