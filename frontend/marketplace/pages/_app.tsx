import './globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react';
import NextLink from 'next/link'

const colors = {
  ...chakraTheme.colors,
  brand:{
    blue: {
      dark: '#001C30',
      mid: '#64CCC5',
      midhover: '#5CAAA5',
      light: '#DAFFFB',
      lighthover: '#C5E8E4',
    },
    white: {
      normal: '#FFFFFF',
      dark: '#EFEFEF'
    },
  },
}

const fonts = {
  ...chakraTheme.fonts,
  heading: `'Space Mono', sans-serif`,
  body: `'Work Sans', sans-serif`,
}

const components = {
  Heading: {
    baseStyle: {
      fontWeight: '400',
    },
  },
  Button: {
    baseStyle: {
      fontWeight: '400',
    },
  },
  Link: {
    defaultProps: {
      as: {NextLink},
    },
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
}

const customTheme = extendTheme({ fonts, components, colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
    )
}
