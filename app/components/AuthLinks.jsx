// Import the SessionProvider
"use client";
import { SessionProvider } from 'next-auth/react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

const AuthLinks = ({status}) => {
  const [open, setOpen] = useState(false);
//   const { status } = useSession();

  return (
    // Wrap the component in the SessionProvider
    <SessionProvider session={status}>
      <>
        {status === 'unauthenticated' ? (
          <Link className='link cursor-pointer' href='/login'>
            Login
          </Link>
        ) : (
          <>
            <Link href='/write'>Write</Link>
            <span className='link cursor-pointer' onClick={signOut}>
              LogOut
            </span>
          </>
        )}
        <div
          className='burger w-10 h-10 sm:flex flex-col justify-between cursor-pointer hidden'
          onClick={() => setOpen(!open)}
        >
          <div className='w-full h-2 md:hidden lg:hidden sm:block bg-white'></div>
          <div className='w-full h-2 md:hidden lg:hidden sm:block bg-white'></div>
          <div className='w-full h-2 md:hidden lg:hidden sm:block bg-white'></div>
        </div>
        {open && (
          <div className='responsive absolute top-100 left-0 bg-var(--bg) h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center gap-8 text-3xl z-50'>
            <Link href='/'>Homepage</Link>
            <Link href='/about'>About</Link>
            {status === 'notauthenticated' ? (
              <Link href='/login'>Login</Link>
            ) : (
              <>
                <Link href='/write'></Link>
                <span className="cursor-pointer sm:hidden">Logout</span>
              </>
            )}
          </div>
        )}
      </>
    </SessionProvider>
  );
};

export default AuthLinks;
