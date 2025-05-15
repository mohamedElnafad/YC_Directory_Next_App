'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
const SearchFormReset = () => {
  const resetQuery = () => {
    const form = document.querySelector('form');

    if (form) form.reset();
  };
  return (
    <Button onClick={resetQuery} className='search-btn text-white' type='reset'>
      <Link href='/'>X</Link>
    </Button>
  );
};

export default SearchFormReset;
