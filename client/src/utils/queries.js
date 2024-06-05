import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const GET_ANIMAL = gql`
query animal($name: String!) {
  animal(name: $name) {
    _id
    name
    description
    image
    altText
  }
}`;

export const GET_QUESTIONS = gql`
query questions {
  questions {
    text
    options {
      score
      text
    }
  }
}`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;