import { notFound } from 'next/navigation';

export default function Page() {
  //ceritanya ga ada datanya
  const is404 = true;

  if (is404) {
    notFound();
  }

  return <h1>blog 404</h1>;
}
