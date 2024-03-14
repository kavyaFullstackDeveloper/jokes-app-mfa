import { useState, useEffect } from "react"

export default function Home() {
    const [jokesData, jokesDataSet] = useState()

    function fetchData() {
        (async () => {
        const res = await fetch("https://v2.jokeapi.dev/joke/Programming,Dark,Pun?amount=10&type=single")
        const data = await res.json()
        jokesDataSet(data)
        })()
    }

    useEffect(() => {
        fetchData()
    },[])
    return (
        <div className="className='container mx-auto py-2 [&>p]:py-2 [&>p]:px-4'">
            <p className='text-white bg-zinc-900'>Jokes</p>
            {jokesData?.jokes.map(({joke, id}) => (
                <p key={id} className='border'>{joke}</p>
            ))}
            <div className='flex justify-center gap-4 mt-4 [&>button]:px-4 [&>button]:py-2 [&>button]:rounded [&>button]:text-white [&>button]:transition-colors [&>button]:duration-300'>
                <button className='bg-blue-500 hover:bg-blue-600 focus-visible:bg-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2' onClick={() => fetchData()}>Get Jokes</button>
                <button className='bg-red-500 hover:bg-red-600 focus-visible:bg-red-600 focus-visible:outline-2 focus-visible:outline-red-600 focus-visible:outline-offset-2'>Logout</button>
            </div>
        </div>
    )
}