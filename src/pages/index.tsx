import Head from 'next/head'
import Image from 'next/image'
import { Link } from '@chakra-ui/react'
import { Inter } from 'next/font/google'
import { useState } from "react"
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import { MyButton } from "../components/button";

export default function Home() {
  const [count, setCount] = useState(0);

  const addCount = () =>{
    setCount(count + 1);

  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>カウント</h1>
        <h2>{count}</h2>
        <MyButton addCount={addCount}></MyButton><br />
        <Link href="/profile">プロフィールに飛ぶ</Link>
      </main>
    </>
  )
}

