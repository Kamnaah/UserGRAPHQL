import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./components/getUsers";
import Form from "./components/form";
import { useState } from "react";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert("GRAPHQL error" + message);
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:8080/graphql" }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
function App() {
  const [userDetail, setUserDetail] = useState({});
  return (
    <ApolloProvider client={client}>
      <Form onChange={setUserDetail} />
      <GetUsers userDetail={userDetail} />
    </ApolloProvider>
  );
}

export default App;
