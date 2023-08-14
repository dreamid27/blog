'use client';

export default function ErrorButton() {
  const Child = () => {
    throw new Error();
  };

  return <>{/* <Child /> */}</>;
}
