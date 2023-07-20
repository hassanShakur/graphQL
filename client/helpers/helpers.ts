

const mapCompany = {
  '1': 'Amazon',
  '2': 'Apple',
  '3': 'Google',
  '4': 'Netflix',
};

type ID = '1' | '2' | '3' | '4';

export const getCompanyFromId = (id: ID) => mapCompany[id];

