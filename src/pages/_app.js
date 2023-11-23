import { useEffect } from 'react';
import '../../style/style.css'
import useMagneticHover from '../hooks/useMagneticHover';

export default function App({ Component, pageProps }) {
  useMagneticHover();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />
}
