'use client';

import Error from 'next/error';

export default function NotFound() {
  return (
    <div>
      <Error statusCode={404} />
    </div>
  );
}
