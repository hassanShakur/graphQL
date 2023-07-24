import '../app.css';
import client from '../../apolloClient';
import { ApolloProvider } from '@apollo/client';
// graphql-users

export default async function Home() {
  return (
    <main>
      <ApolloProvider client={client}>
        <div>Hello users</div>
      </ApolloProvider>
    </main>
  );
}
