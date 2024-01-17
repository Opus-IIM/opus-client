import "remixicon/fonts/remixicon.css";
import "@styles/main.css";

import React from "react";
import { GlobalThemeProvider } from "@contexts/GlobalTheme";
import { LayoutProvider } from "@contexts/LayoutContext";
import { AppLayout } from "@layouts/AppLayout";
import GlobalStyle from "@styles/GlobalStyle";
import { CustomAppProps } from "@typesDef/APP";
import Head from "next/head";

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout =
    Component.getLayout || ((page) => <AppLayout>{page}</AppLayout>);
  return (
    <GlobalThemeProvider>
      <LayoutProvider>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover, height=device-height"
          />
          <title>Opus</title>
        </Head>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </LayoutProvider>
    </GlobalThemeProvider>
  );
}
