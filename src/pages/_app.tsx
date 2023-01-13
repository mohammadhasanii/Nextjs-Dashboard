import { AppProps } from 'next/app';
import NextNProgress from "nextjs-progressbar";


import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/argon-dashboard-tailwind.css'
import '@/styles/argon-dashboard-tailwind.min.css'
import '@/styles/nucleo-icons.css'
import '@/styles/nucleo-svg.css'
import '@/styles/perfect-scrollbar.css'
import '@/styles/tooltips.css'




function MyApp({ Component, pageProps }: AppProps) {
  return       <>
  
  <NextNProgress color="#f37d38"
  startPosition={5}
  stopDelayMs={100}
  height={4}
  showOnShallow={true}/>
  <Component {...pageProps} />
  </>
}

export default MyApp;
