import Layout from '../components/Layout'
import Nav from '../components/Nav'
import NextNProgress from "nextjs-progressbar";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#7659ff"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        spinner={false}
        showOnShallow={false}
      />
      <Layout>
        <Nav />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
