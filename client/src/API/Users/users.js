import { gql } from '@apollo/client';

export const GET_USERS = gql`
    {
        
            users {
              _id
              firstname
              lastname
              birthday
              email
              
            }
          
  }
`;