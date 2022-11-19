import { useMutation, gql } from '@apollo/client';

const Login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        firstname
        lastname
        email
      }
    }
  }
`;

export function useLogin() {
  return useMutation(Login);
}

const Signup = gql`
  mutation Mutation($userData: UserInput!) {
    signup(userData: $userData) {
      token
      user {
        firstname
        lastname
        email
      }
    }
  }
`;

export function useSignup() {
  return useMutation(Signup);
}
