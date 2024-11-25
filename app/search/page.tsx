'use client'
import { useSearchParams } from 'next/navigation'

export default function Search() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    return (
        <>
            <h1>Search - {query}</h1>
        </>
    );
}
