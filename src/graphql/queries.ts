/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHuman = /* GraphQL */ `
  query GetHuman($id: ID!) {
    getHuman(id: $id) {
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
export const listHumans = /* GraphQL */ `
  query ListHumans(
    $filter: ModelHumanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHumans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncHumans = /* GraphQL */ `
  query SyncHumans(
    $filter: ModelHumanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHumans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBaseket = /* GraphQL */ `
  query GetBaseket($id: ID!) {
    getBaseket(id: $id) {
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
export const listBasekets = /* GraphQL */ `
  query ListBasekets(
    $filter: ModelBaseketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBasekets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBasekets = /* GraphQL */ `
  query SyncBasekets(
    $filter: ModelBaseketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBasekets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBaseketHuman = /* GraphQL */ `
  query GetBaseketHuman($id: ID!) {
    getBaseketHuman(id: $id) {
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
export const listBaseketHumen = /* GraphQL */ `
  query ListBaseketHumen(
    $filter: ModelBaseketHumanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaseketHumen(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        humanId
        baseketId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBaseketHumen = /* GraphQL */ `
  query SyncBaseketHumen(
    $filter: ModelBaseketHumanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBaseketHumen(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        humanId
        baseketId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const baseketHumenByHumanId = /* GraphQL */ `
  query BaseketHumenByHumanId(
    $humanId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBaseketHumanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    baseketHumenByHumanId(
      humanId: $humanId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        humanId
        baseketId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const baseketHumenByBaseketId = /* GraphQL */ `
  query BaseketHumenByBaseketId(
    $baseketId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBaseketHumanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    baseketHumenByBaseketId(
      baseketId: $baseketId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        humanId
        baseketId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBaseketPost = /* GraphQL */ `
  query GetBaseketPost($id: ID!) {
    getBaseketPost(id: $id) {
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
export const listBaseketPosts = /* GraphQL */ `
  query ListBaseketPosts(
    $filter: ModelBaseketPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBaseketPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postId
        baseketId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBaseketPosts = /* GraphQL */ `
  query SyncBaseketPosts(
    $filter: ModelBaseketPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBaseketPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        postId
        baseketId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const baseketPostsByPostId = /* GraphQL */ `
  query BaseketPostsByPostId(
    $postId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBaseketPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    baseketPostsByPostId(
      postId: $postId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        baseketId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const baseketPostsByBaseketId = /* GraphQL */ `
  query BaseketPostsByBaseketId(
    $baseketId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBaseketPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    baseketPostsByBaseketId(
      baseketId: $baseketId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        baseketId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
