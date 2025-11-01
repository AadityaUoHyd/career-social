import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';

// List of paths where we don't want to show the header and footer
const noLayoutPaths = ['/login', '/register'];

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const showLayout = !noLayoutPaths.includes(router.pathname);

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <div className="flex flex-col min-h-screen">
          {showLayout && <Header />}
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          {showLayout && <Footer />}
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
