import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/navbar'
import localFont from '@next/font/local'
import Footer from '../components/footer'

const pretendard = localFont({
  src: [
    {
      path: '../fonts/pretendard/Pretendard-Thin.otf',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../fonts/pretendard/Pretendard-ExtraLight.otf',
      weight: '200',
    },
    {
      path: '../fonts/pretendard/Pretendard-Light.otf',
      weight: '300',
    },
    {
      path: '../fonts/pretendard/Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/pretendard/Pretendard-Medium.otf',
      weight: '500',
      style: 'thin',
    },
    {
      path: '../fonts/pretendard/Pretendard-SemiBold.otf',
      weight: '600',
    },
    {
      path: '../fonts/pretendard/Pretendard-Bold.otf',
      weight: '700',
    },
    {
      path: '../fonts/pretendard/Pretendard-ExtraBold.otf',
      weight: '800',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return <div className={pretendard.className}>
    <NavBar/>
    <Component {...pageProps} />
    <Footer />
    </div>
}
