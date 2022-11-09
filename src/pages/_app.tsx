import React, { StrictMode } from 'react'

import type { AppProps } from 'next/app'
import { WagmiConfig } from 'wagmi'
import { wagmiClient } from '../config/wagmi'
import Workshop from './workshop'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StrictMode>
      <WagmiConfig client={wagmiClient}>
        <Workshop />
      </WagmiConfig>
    </StrictMode>
  )
}

export default App