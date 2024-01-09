import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/pages/header'
import Login from './login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  {/* <Header/> */}
  <Login/>
  </>
  )
}
