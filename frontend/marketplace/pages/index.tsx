import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '../components/Hero' 
import Categories from '../components/Categories'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BecomeProvider from '@/components/BecomeProvider'

import { Box } from '@chakra-ui/react'
import Gigs from '@/components/Gigs'

export default function Home() {
  return (
    <Box m='0' bg='brand.blue.dark'>
      <Head>
        <title>Vectorfy</title>
        <meta name="description" content="Vectorfy" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
      <Hero/>
      <Gigs/>
      <Categories />
      <BecomeProvider />
      <Footer />
    </Box>
  )
}