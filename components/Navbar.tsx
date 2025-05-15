import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';
const Navbar = async () => {
  const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='Logo' width={100} height={100} />
        </Link>
        <div className='flex items-center text-black'>
          {session && session?.user ? (
            <div className='flex items-center gap-5'>
              <Link href='/startup/create'>
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button className='cursor-pointer'>Logout</button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </div>
          ) : (
            <form
              action={async () => {
                'use server';
                await signIn('github');
              }}
            >
              <button className='cursor-pointer'>Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
