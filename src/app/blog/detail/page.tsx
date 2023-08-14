async function getData() {
  const res = await fetch('https://meowfacts.herokuapp.com/', {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log(res, 'ress');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  console.log(data, 'data');

  return (
    <>
      <h1 className="text-1xl font-bold underline">Hello, Next.js!</h1>
      {data.data.map((content: string) => (
        <p key={content}>{content}</p>
      ))}
    </>
  );
}
