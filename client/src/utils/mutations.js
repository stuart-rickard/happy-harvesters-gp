import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// add user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// add orchard
export const ADD_ORCHARD = gql`
  mutation addOrchard($userId: ID!) {
    addOrchard(userId: $userId) {

      user {
        _id
        orchardCount
      }
    }
  }
`;

// add tree
export const ADD_TREE = gql`
  mutation addTree($duration: Int!) {
    addTree(duration: $duration) {
      user{
        _id
      }
    }
  }
`;

// add masher
export const ADD_MASHER = gql`
  mutation addMasher($duration: Int!) {
    addMasher(duration: $duration) {
      user{
        _id
      }
    }
  }
`;

// add juicer
export const ADD_JUICER = gql`
  mutation addJuicer($duration: Int!) {
    addJuicer(duration: $duration) {
      user{
        _id
      }
    }
  }
`;

// add oven
export const ADD_OVEN = gql`
  mutation addOven($duration: Int!) {
    addOven(duration: $duration) {
      user {
        _id
      }
    }
  }
`;

// update user

// update orchard => adding new tree

// update tree
export const SET_TREE = gql`
mutation updateTree($treeId: ID!, $startedAtTime: Date!, $duration: Int) {
  updateTree(treeId: $treeId, startedAtTime: $startedAtTime, duration: $duration) {
      _id
      username
      trees {
        _id
        startedAtTime
        duration
      }
  }
}
`;

// update masher
export const SET_MASHER = gql`
mutation updateMasher($masherId: ID!, $startedAtTime: Date!, $duration: Int) {
  updatemasher(masherId: $masherId, startedAtTime: $startedAtTime, duration: $duration) {
      _id
      username
      mashers {
        _id
        startedAtTime
        duration
      }
  }
}
`;

// update juicer (started at time and duration variables)

export const SET_JUICER = gql`
mutation updateJuicer($juicerId: ID!, $startedAtTime: Date!, $duration: Int) {
  updateJuicer(juicerId: $juicerId, startedAtTime: $startedAtTime, duration: $duration) {
      _id
      username
      juicers {
        _id
        startedAtTime
        duration
      }
  }
}
`;






// update oven
export const SET_OVEN = gql`
mutation updateOven($juicerId: ID!, $startedAtTime: Date!, $duration: Int) {
  updateOven(ovenId: $ovenId, startedAtTime: $startedAtTime, duration: $duration) {
      _id
      username
      ovens {
        _id
        startedAtTime
        duration
      }
  }
}
`;


// update timer
