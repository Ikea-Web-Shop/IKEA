import MainLayout from "./Layouts/MainLayout/MainLayout";
import { AppProps } from "../node_modules/next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
