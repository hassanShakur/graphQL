import {
  ApolloClient,
  InMemoryCache,
  StoreObject,
  StoreValue,
} from '@apollo/client';
import { KeyFieldsFunction } from '@apollo/client/cache/inmemory/policies';

// type O = {
//   id: StoreValue;
// };

// const dataRevalidator: KeyFieldsFunction = (
//   o: Readonly<StoreObject>
// ) => o.id;

// const client = new ApolloClient({
//   uri: 'http://127.0.0.1:8000/graphql',
//   cache: new InMemoryCache({ dataIdFromObject: (o) => o._id }),
// });
const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql',
  cache: new InMemoryCache({ resultCaching: false }),
});

export default client;
