import Navbar from '../components/navbar/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar style={{zIndex:5}}/>
    <Component {...pageProps} />
  </>
}

export default MyApp