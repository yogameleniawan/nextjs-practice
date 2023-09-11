"use client"

import { useState } from "react"

export default function Home() {
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [text, setText] = useState<string>("");


    const getData = async () => {
        setIsLoad(true);

        await fetch("http://127.0.0.1:8000/api/quotes")
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson ? await response.json() : null;

                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                setText(data.text);
                setIsLoad(false);
            })
            .catch(error => {
                setText(error);
                setIsLoad(false);
            });
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-primary ">
            <h1 className={'text-red'}>{text}</h1>
            {
                isLoad ? <h1>Loading...</h1> : <button onClick={getData} className="bg-secondary text-black p-2 rounded-md my-2">Get Quotes</button>
            }
        </main>
    )
}
