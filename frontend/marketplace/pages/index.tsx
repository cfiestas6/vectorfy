import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '../components/Hero' 
import Categories from '../components/Categories'
import Navbar from '@/components/Navbar'

import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box m='0' bg='brand.blue.dark'>
      <Navbar/>
      <Hero/>
      <Categories />
    </Box>
  )
}