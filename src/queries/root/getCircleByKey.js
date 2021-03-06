import gql from 'graphql-tag';

export default gql`
  query getCircleByKey($_id: String!) {
    getCircleByKey(_id: $_id) {
      id
      title
      slug
      type
    }
  }
`;
