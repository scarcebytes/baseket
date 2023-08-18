/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHuman = /* GraphQL */ `
  subscription OnCreateHuman($filter: ModelSubscriptionHumanFilterInput) {
    onCreateHuman(filter: $filter) {
      id
      firstName
      lastName
      basekets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateHuman = /* GraphQL */ `
  subscription OnUpdateHuman($filter: ModelSubscriptionHumanFilterInput) {
    onUpdateHuman(filter: $filter) {
      id
      firstName
      lastName
      basekets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteHuman = /* GraphQL */ `
  subscription OnDeleteHuman($filter: ModelSubscriptionHumanFilterInput) {
    onDeleteHuman(filter: $filter) {
      id
      firstName
      lastName
      basekets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      walletAddress
      vaultAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      walletAddress
      vaultAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      walletAddress
      vaultAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      image
      description
      tokenAddress
      tokenId
      rootToken
      basekets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      image
      description
      tokenAddress
      tokenId
      rootToken
      basekets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      image
      description
      tokenAddress
      tokenId
      rootToken
      basekets {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateBaseket = /* GraphQL */ `
  subscription OnCreateBaseket($filter: ModelSubscriptionBaseketFilterInput) {
    onCreateBaseket(filter: $filter) {
      id
      type
      description
      tokenAddress
      tokenId
      rootBaseket
      posts {
        nextToken
        startedAt
        __typename
      }
      Human {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateBaseket = /* GraphQL */ `
  subscription OnUpdateBaseket($filter: ModelSubscriptionBaseketFilterInput) {
    onUpdateBaseket(filter: $filter) {
      id
      type
      description
      tokenAddress
      tokenId
      rootBaseket
      posts {
        nextToken
        startedAt
        __typename
      }
      Human {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteBaseket = /* GraphQL */ `
  subscription OnDeleteBaseket($filter: ModelSubscriptionBaseketFilterInput) {
    onDeleteBaseket(filter: $filter) {
      id
      type
      description
      tokenAddress
      tokenId
      rootBaseket
      posts {
        nextToken
        startedAt
        __typename
      }
      Human {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateBaseketHuman = /* GraphQL */ `
  subscription OnCreateBaseketHuman(
    $filter: ModelSubscriptionBaseketHumanFilterInput
  ) {
    onCreateBaseketHuman(filter: $filter) {
      id
      humanId
      baseketId
      human {
        id
        firstName
        lastName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      baseket {
        id
        type
        description
        tokenAddress
        tokenId
        rootBaseket
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateBaseketHuman = /* GraphQL */ `
  subscription OnUpdateBaseketHuman(
    $filter: ModelSubscriptionBaseketHumanFilterInput
  ) {
    onUpdateBaseketHuman(filter: $filter) {
      id
      humanId
      baseketId
      human {
        id
        firstName
        lastName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      baseket {
        id
        type
        description
        tokenAddress
        tokenId
        rootBaseket
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteBaseketHuman = /* GraphQL */ `
  subscription OnDeleteBaseketHuman(
    $filter: ModelSubscriptionBaseketHumanFilterInput
  ) {
    onDeleteBaseketHuman(filter: $filter) {
      id
      humanId
      baseketId
      human {
        id
        firstName
        lastName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      baseket {
        id
        type
        description
        tokenAddress
        tokenId
        rootBaseket
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateBaseketPost = /* GraphQL */ `
  subscription OnCreateBaseketPost(
    $filter: ModelSubscriptionBaseketPostFilterInput
  ) {
    onCreateBaseketPost(filter: $filter) {
      id
      postId
      baseketId
      post {
        id
        image
        description
        tokenAddress
        tokenId
        rootToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      baseket {
        id
        type
        description
        tokenAddress
        tokenId
        rootBaseket
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateBaseketPost = /* GraphQL */ `
  subscription OnUpdateBaseketPost(
    $filter: ModelSubscriptionBaseketPostFilterInput
  ) {
    onUpdateBaseketPost(filter: $filter) {
      id
      postId
      baseketId
      post {
        id
        image
        description
        tokenAddress
        tokenId
        rootToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      baseket {
        id
        type
        description
        tokenAddress
        tokenId
        rootBaseket
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteBaseketPost = /* GraphQL */ `
  subscription OnDeleteBaseketPost(
    $filter: ModelSubscriptionBaseketPostFilterInput
  ) {
    onDeleteBaseketPost(filter: $filter) {
      id
      postId
      baseketId
      post {
        id
        image
        description
        tokenAddress
        tokenId
        rootToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      baseket {
        id
        type
        description
        tokenAddress
        tokenId
        rootBaseket
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
