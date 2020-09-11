import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";

import store from "../lib/redux/store";

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
};

export default MyApp;
