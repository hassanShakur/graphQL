import './app.css';
import client from './../apolloClient';
import ModalController from '@/components/ModalController';
import { ApolloProvider } from '@apollo/client';
// graphql-users

export default async function Home() {
  return (
    <main>
      <ApolloProvider client={client}>
        <ModalController />
      </ApolloProvider>
    </main>
  );
}
