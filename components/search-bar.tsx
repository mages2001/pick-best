'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Form from 'next/form'
import React from "react";

export default function SearchBar() {
  const searchRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2 m-2 p-2 justify-center">
        <Form action="/search" className="flex flex-col items-stretch">
          <div className="flex items-center justify-end">
            <Input name="q" placeholder="Search Products" ref={searchRef} />
            <Button type="submit">Search</Button>
          </div>
        </Form>
      </div>
    </>
  );
}
