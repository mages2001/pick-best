'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const [product, setProduct] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value);
  };
  const handleSearch = () => {
    router.push(`/${encodeURIComponent(product)}`);
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 m-2 p-2 justify-center">
      <div className="flex flex-col items-stretch w-full">
        <div className="flex items-center justify-end">
          <Input
            name="product"
            placeholder="Search Products"
            value={product}
            onChange={handleInputChange}
            className="min-w-2 bg-slate-200"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <Link href={`/${encodeURIComponent(product)}`}>
            <Button type="button">Search</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}