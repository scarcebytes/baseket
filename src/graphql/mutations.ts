/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHuman = /* GraphQL */ `
  mutation CreateHuman(
    $input: CreateHumanInput!
    $condition: ModelHumanConditionInput
  ) {
    createHuman(input: $input, condition: $condition) {
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
export const updateHuman = /* GraphQL */ `
  mutation UpdateHuman(
    $input: UpdateHumanInput!
    $condition: ModelHumanConditionInput
  ) {
    updateHuman(input: $input, condition: $condition) {
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
export const deleteHuman = /* GraphQL */ `
  mutation DeleteHuman(
    $input: DeleteHumanInput!
    $condition: ModelHumanConditionInput
  ) {
    deleteHuman(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createBaseket = /* GraphQL */ `
  mutation CreateBaseket(
    $input: CreateBaseketInput!
    $condition: ModelBaseketConditionInput
  ) {
    createBaseket(input: $input, condition: $condition) {
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
export const updateBaseket = /* GraphQL */ `
  mutation UpdateBaseket(
    $input: UpdateBaseketInput!
    $condition: ModelBaseketConditionInput
  ) {
    updateBaseket(input: $input, condition: $condition) {
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
export const deleteBaseket = /* GraphQL */ `
  mutation DeleteBaseket(
    $input: DeleteBaseketInput!
    $condition: ModelBaseketConditionInput
  ) {
    deleteBaseket(input: $input, condition: $condition) {
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
export const createBaseketHuman = /* GraphQL */ `
  mutation CreateBaseketHuman(
    $input: CreateBaseketHumanInput!
    $condition: ModelBaseketHumanConditionInput
  ) {
    createBaseketHuman(input: $input, condition: $condition) {
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
export const updateBaseketHuman = /* GraphQL */ `
  mutation UpdateBaseketHuman(
    $input: UpdateBaseketHumanInput!
    $condition: ModelBaseketHumanConditionInput
  ) {
    updateBaseketHuman(input: $input, condition: $condition) {
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
export const deleteBaseketHuman = /* GraphQL */ `
  mutation DeleteBaseketHuman(
    $input: DeleteBaseketHumanInput!
    $condition: ModelBaseketHumanConditionInput
  ) {
    deleteBaseketHuman(input: $input, condition: $condition) {
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
export const createBaseketPost = /* GraphQL */ `
  mutation CreateBaseketPost(
    $input: CreateBaseketPostInput!
    $condition: ModelBaseketPostConditionInput
  ) {
    createBaseketPost(input: $input, condition: $condition) {
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
export const updateBaseketPost = /* GraphQL */ `
  mutation UpdateBaseketPost(
    $input: UpdateBaseketPostInput!
    $condition: ModelBaseketPostConditionInput
  ) {
    updateBaseketPost(input: $input, condition: $condition) {
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
export const deleteBaseketPost = /* GraphQL */ `
  mutation DeleteBaseketPost(
    $input: DeleteBaseketPostInput!
    $condition: ModelBaseketPostConditionInput
  ) {
    deleteBaseketPost(input: $input, condition: $condition) {
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
