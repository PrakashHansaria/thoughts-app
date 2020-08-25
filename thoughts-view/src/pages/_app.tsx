import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Provider, createClient } from "urql";
import theme from "../theme";

const client = createClient({ url: "http://localhost:5000/graphql" });

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider value={ client }>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
