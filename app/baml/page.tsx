import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
export const metadata: Metadata = {
  title: 'BAML - A programming language for defining AI functions',
  description: 'Build, test, monitor and improve LLM applications with ease.',
};

export default function Home() {
  redirect('/');
}
