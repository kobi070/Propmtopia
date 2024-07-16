'use client';

import { SessionProvider } from 'next-auth/react';


const Provider = ({children, ...props}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider