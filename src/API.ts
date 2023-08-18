/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHumanInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  _version?: number | null,
};

export type ModelHumanConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelHumanConditionInput | null > | null,
  or?: Array< ModelHumanConditionInput | null > | null,
  not?: ModelHumanConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Human = {
  __typename: "Human",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  basekets?: ModelBaseketHumanConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelBaseketHumanConnection = {
  __typename: "ModelBaseketHumanConnection",
  items:  Array<BaseketHuman | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type BaseketHuman = {
  __typename: "BaseketHuman",
  id: string,
  humanId: string,
  baseketId: string,
  human: Human,
  baseket: Baseket,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Baseket = {
  __typename: "Baseket",
  id: string,
  type?: string | null,
  description?: string | null,
  tokenAddress?: string | null,
  tokenId?: string | null,
  rootBaseket?: boolean | null,
  posts?: ModelBaseketPostConnection | null,
  Human?: ModelBaseketHumanConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelBaseketPostConnection = {
  __typename: "ModelBaseketPostConnection",
  items:  Array<BaseketPost | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type BaseketPost = {
  __typename: "BaseketPost",
  id: string,
  postId: string,
  baseketId: string,
  post: Post,
  baseket: Baseket,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Post = {
  __typename: "Post",
  id: string,
  image?: string | null,
  description?: string | null,
  tokenAddress?: string | null,
  tokenId?: string | null,
  rootToken?: boolean | null,
  basekets?: ModelBaseketPostConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateHumanInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  _version?: number | null,
};

export type DeleteHumanInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  walletAddress?: string | null,
  vaultAddress?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  walletAddress?: ModelStringInput | null,
  vaultAddress?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  walletAddress?: string | null,
  vaultAddress?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  id: string,
  walletAddress?: string | null,
  vaultAddress?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  image?: string | null,
  description?: string | null,
  tokenAddress?: string | null,
  tokenId?: string | null,
  rootToken?: boolean | null,
  _version?: number | null,
};

export type ModelPostConditionInput = {
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tokenAddress?: ModelStringInput | null,
  tokenId?: ModelStringInput | null,
  rootToken?: ModelBooleanInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdatePostInput = {
  id: string,
  image?: string | null,
  description?: string | null,
  tokenAddress?: string | null,
  tokenId?: string | null,
  rootToken?: boolean | null,
  _version?: number | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateBaseketInput = {
  id?: string | null,
  type?: string | null,
  description?: string | null,
  tokenAddress?: string | null,
  tokenId?: string | null,
  rootBaseket?: boolean | null,
  _version?: number | null,
};

export type ModelBaseketConditionInput = {
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tokenAddress?: ModelStringInput | null,
  tokenId?: ModelStringInput | null,
  rootBaseket?: ModelBooleanInput | null,
  and?: Array< ModelBaseketConditionInput | null > | null,
  or?: Array< ModelBaseketConditionInput | null > | null,
  not?: ModelBaseketConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateBaseketInput = {
  id: string,
  type?: string | null,
  description?: string | null,
  tokenAddress?: string | null,
  tokenId?: string | null,
  rootBaseket?: boolean | null,
  _version?: number | null,
};

export type DeleteBaseketInput = {
  id: string,
  _version?: number | null,
};

export type CreateBaseketHumanInput = {
  id?: string | null,
  humanId: string,
  baseketId: string,
  _version?: number | null,
};

export type ModelBaseketHumanConditionInput = {
  humanId?: ModelIDInput | null,
  baseketId?: ModelIDInput | null,
  and?: Array< ModelBaseketHumanConditionInput | null > | null,
  or?: Array< ModelBaseketHumanConditionInput | null > | null,
  not?: ModelBaseketHumanConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBaseketHumanInput = {
  id: string,
  humanId?: string | null,
  baseketId?: string | null,
  _version?: number | null,
};

export type DeleteBaseketHumanInput = {
  id: string,
  _version?: number | null,
};

export type CreateBaseketPostInput = {
  id?: string | null,
  postId: string,
  baseketId: string,
  _version?: number | null,
};

export type ModelBaseketPostConditionInput = {
  postId?: ModelIDInput | null,
  baseketId?: ModelIDInput | null,
  and?: Array< ModelBaseketPostConditionInput | null > | null,
  or?: Array< ModelBaseketPostConditionInput | null > | null,
  not?: ModelBaseketPostConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateBaseketPostInput = {
  id: string,
  postId?: string | null,
  baseketId?: string | null,
  _version?: number | null,
};

export type DeleteBaseketPostInput = {
  id: string,
  _version?: number | null,
};

export type ModelHumanFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelHumanFilterInput | null > | null,
  or?: Array< ModelHumanFilterInput | null > | null,
  not?: ModelHumanFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelHumanConnection = {
  __typename: "ModelHumanConnection",
  items:  Array<Human | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  walletAddress?: ModelStringInput | null,
  vaultAddress?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tokenAddress?: ModelStringInput | null,
  tokenId?: ModelStringInput | null,
  rootToken?: ModelBooleanInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBaseketFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tokenAddress?: ModelStringInput | null,
  tokenId?: ModelStringInput | null,
  rootBaseket?: ModelBooleanInput | null,
  and?: Array< ModelBaseketFilterInput | null > | null,
  or?: Array< ModelBaseketFilterInput | null > | null,
  not?: ModelBaseketFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelBaseketConnection = {
  __typename: "ModelBaseketConnection",
  items:  Array<Baseket | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBaseketHumanFilterInput = {
  id?: ModelIDInput | null,
  humanId?: ModelIDInput | null,
  baseketId?: ModelIDInput | null,
  and?: Array< ModelBaseketHumanFilterInput | null > | null,
  or?: Array< ModelBaseketHumanFilterInput | null > | null,
  not?: ModelBaseketHumanFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelBaseketPostFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  baseketId?: ModelIDInput | null,
  and?: Array< ModelBaseketPostFilterInput | null > | null,
  or?: Array< ModelBaseketPostFilterInput | null > | null,
  not?: ModelBaseketPostFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionHumanFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHumanFilterInput | null > | null,
  or?: Array< ModelSubscriptionHumanFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  walletAddress?: ModelSubscriptionStringInput | null,
  vaultAddress?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  image?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tokenAddress?: ModelSubscriptionStringInput | null,
  tokenId?: ModelSubscriptionStringInput | null,
  rootToken?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionBaseketFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tokenAddress?: ModelSubscriptionStringInput | null,
  tokenId?: ModelSubscriptionStringInput | null,
  rootBaseket?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionBaseketFilterInput | null > | null,
  or?: Array< ModelSubscriptionBaseketFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBaseketHumanFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  humanId?: ModelSubscriptionIDInput | null,
  baseketId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBaseketHumanFilterInput | null > | null,
  or?: Array< ModelSubscriptionBaseketHumanFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBaseketPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  baseketId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBaseketPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionBaseketPostFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateHumanMutationVariables = {
  input: CreateHumanInput,
  condition?: ModelHumanConditionInput | null,
};

export type CreateHumanMutation = {
  createHuman?:  {
    __typename: "Human",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    basekets?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateHumanMutationVariables = {
  input: UpdateHumanInput,
  condition?: ModelHumanConditionInput | null,
};

export type UpdateHumanMutation = {
  updateHuman?:  {
    __typename: "Human",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    basekets?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteHumanMutationVariables = {
  input: DeleteHumanInput,
  condition?: ModelHumanConditionInput | null,
};

export type DeleteHumanMutation = {
  deleteHuman?:  {
    __typename: "Human",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    basekets?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    walletAddress?: string | null,
    vaultAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    walletAddress?: string | null,
    vaultAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    walletAddress?: string | null,
    vaultAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    image?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootToken?: boolean | null,
    basekets?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    image?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootToken?: boolean | null,
    basekets?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    image?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootToken?: boolean | null,
    basekets?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBaseketMutationVariables = {
  input: CreateBaseketInput,
  condition?: ModelBaseketConditionInput | null,
};

export type CreateBaseketMutation = {
  createBaseket?:  {
    __typename: "Baseket",
    id: string,
    type?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootBaseket?: boolean | null,
    posts?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Human?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBaseketMutationVariables = {
  input: UpdateBaseketInput,
  condition?: ModelBaseketConditionInput | null,
};

export type UpdateBaseketMutation = {
  updateBaseket?:  {
    __typename: "Baseket",
    id: string,
    type?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootBaseket?: boolean | null,
    posts?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Human?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBaseketMutationVariables = {
  input: DeleteBaseketInput,
  condition?: ModelBaseketConditionInput | null,
};

export type DeleteBaseketMutation = {
  deleteBaseket?:  {
    __typename: "Baseket",
    id: string,
    type?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootBaseket?: boolean | null,
    posts?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Human?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBaseketHumanMutationVariables = {
  input: CreateBaseketHumanInput,
  condition?: ModelBaseketHumanConditionInput | null,
};

export type CreateBaseketHumanMutation = {
  createBaseketHuman?:  {
    __typename: "BaseketHuman",
    id: string,
    humanId: string,
    baseketId: string,
    human:  {
      __typename: "Human",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBaseketHumanMutationVariables = {
  input: UpdateBaseketHumanInput,
  condition?: ModelBaseketHumanConditionInput | null,
};

export type UpdateBaseketHumanMutation = {
  updateBaseketHuman?:  {
    __typename: "BaseketHuman",
    id: string,
    humanId: string,
    baseketId: string,
    human:  {
      __typename: "Human",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBaseketHumanMutationVariables = {
  input: DeleteBaseketHumanInput,
  condition?: ModelBaseketHumanConditionInput | null,
};

export type DeleteBaseketHumanMutation = {
  deleteBaseketHuman?:  {
    __typename: "BaseketHuman",
    id: string,
    humanId: string,
    baseketId: string,
    human:  {
      __typename: "Human",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBaseketPostMutationVariables = {
  input: CreateBaseketPostInput,
  condition?: ModelBaseketPostConditionInput | null,
};

export type CreateBaseketPostMutation = {
  createBaseketPost?:  {
    __typename: "BaseketPost",
    id: string,
    postId: string,
    baseketId: string,
    post:  {
      __typename: "Post",
      id: string,
      image?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootToken?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBaseketPostMutationVariables = {
  input: UpdateBaseketPostInput,
  condition?: ModelBaseketPostConditionInput | null,
};

export type UpdateBaseketPostMutation = {
  updateBaseketPost?:  {
    __typename: "BaseketPost",
    id: string,
    postId: string,
    baseketId: string,
    post:  {
      __typename: "Post",
      id: string,
      image?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootToken?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBaseketPostMutationVariables = {
  input: DeleteBaseketPostInput,
  condition?: ModelBaseketPostConditionInput | null,
};

export type DeleteBaseketPostMutation = {
  deleteBaseketPost?:  {
    __typename: "BaseketPost",
    id: string,
    postId: string,
    baseketId: string,
    post:  {
      __typename: "Post",
      id: string,
      image?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootToken?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetHumanQueryVariables = {
  id: string,
};

export type GetHumanQuery = {
  getHuman?:  {
    __typename: "Human",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    basekets?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListHumansQueryVariables = {
  filter?: ModelHumanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHumansQuery = {
  listHumans?:  {
    __typename: "ModelHumanConnection",
    items:  Array< {
      __typename: "Human",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHumansQueryVariables = {
  filter?: ModelHumanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHumansQuery = {
  syncHumans?:  {
    __typename: "ModelHumanConnection",
    items:  Array< {
      __typename: "Human",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    walletAddress?: string | null,
    vaultAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      walletAddress?: string | null,
      vaultAddress?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      walletAddress?: string | null,
      vaultAddress?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    image?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootToken?: boolean | null,
    basekets?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      image?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootToken?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      image?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootToken?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBaseketQueryVariables = {
  id: string,
};

export type GetBaseketQuery = {
  getBaseket?:  {
    __typename: "Baseket",
    id: string,
    type?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootBaseket?: boolean | null,
    posts?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Human?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBaseketsQueryVariables = {
  filter?: ModelBaseketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBaseketsQuery = {
  listBasekets?:  {
    __typename: "ModelBaseketConnection",
    items:  Array< {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBaseketsQueryVariables = {
  filter?: ModelBaseketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBaseketsQuery = {
  syncBasekets?:  {
    __typename: "ModelBaseketConnection",
    items:  Array< {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBaseketHumanQueryVariables = {
  id: string,
};

export type GetBaseketHumanQuery = {
  getBaseketHuman?:  {
    __typename: "BaseketHuman",
    id: string,
    humanId: string,
    baseketId: string,
    human:  {
      __typename: "Human",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBaseketHumenQueryVariables = {
  filter?: ModelBaseketHumanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBaseketHumenQuery = {
  listBaseketHumen?:  {
    __typename: "ModelBaseketHumanConnection",
    items:  Array< {
      __typename: "BaseketHuman",
      id: string,
      humanId: string,
      baseketId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBaseketHumenQueryVariables = {
  filter?: ModelBaseketHumanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBaseketHumenQuery = {
  syncBaseketHumen?:  {
    __typename: "ModelBaseketHumanConnection",
    items:  Array< {
      __typename: "BaseketHuman",
      id: string,
      humanId: string,
      baseketId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BaseketHumenByHumanIdQueryVariables = {
  humanId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBaseketHumanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BaseketHumenByHumanIdQuery = {
  baseketHumenByHumanId?:  {
    __typename: "ModelBaseketHumanConnection",
    items:  Array< {
      __typename: "BaseketHuman",
      id: string,
      humanId: string,
      baseketId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BaseketHumenByBaseketIdQueryVariables = {
  baseketId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBaseketHumanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BaseketHumenByBaseketIdQuery = {
  baseketHumenByBaseketId?:  {
    __typename: "ModelBaseketHumanConnection",
    items:  Array< {
      __typename: "BaseketHuman",
      id: string,
      humanId: string,
      baseketId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBaseketPostQueryVariables = {
  id: string,
};

export type GetBaseketPostQuery = {
  getBaseketPost?:  {
    __typename: "BaseketPost",
    id: string,
    postId: string,
    baseketId: string,
    post:  {
      __typename: "Post",
      id: string,
      image?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootToken?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBaseketPostsQueryVariables = {
  filter?: ModelBaseketPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBaseketPostsQuery = {
  listBaseketPosts?:  {
    __typename: "ModelBaseketPostConnection",
    items:  Array< {
      __typename: "BaseketPost",
      id: string,
      postId: string,
      baseketId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBaseketPostsQueryVariables = {
  filter?: ModelBaseketPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBaseketPostsQuery = {
  syncBaseketPosts?:  {
    __typename: "ModelBaseketPostConnection",
    items:  Array< {
      __typename: "BaseketPost",
      id: string,
      postId: string,
      baseketId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BaseketPostsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBaseketPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BaseketPostsByPostIdQuery = {
  baseketPostsByPostId?:  {
    __typename: "ModelBaseketPostConnection",
    items:  Array< {
      __typename: "BaseketPost",
      id: string,
      postId: string,
      baseketId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BaseketPostsByBaseketIdQueryVariables = {
  baseketId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBaseketPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BaseketPostsByBaseketIdQuery = {
  baseketPostsByBaseketId?:  {
    __typename: "ModelBaseketPostConnection",
    items:  Array< {
      __typename: "BaseketPost",
      id: string,
      postId: string,
      baseketId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateHumanSubscriptionVariables = {
  filter?: ModelSubscriptionHumanFilterInput | null,
};

export type OnCreateHumanSubscription = {
  onCreateHuman?:  {
    __typename: "Human",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    basekets?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateHumanSubscriptionVariables = {
  filter?: ModelSubscriptionHumanFilterInput | null,
};

export type OnUpdateHumanSubscription = {
  onUpdateHuman?:  {
    __typename: "Human",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    basekets?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteHumanSubscriptionVariables = {
  filter?: ModelSubscriptionHumanFilterInput | null,
};

export type OnDeleteHumanSubscription = {
  onDeleteHuman?:  {
    __typename: "Human",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    basekets?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    walletAddress?: string | null,
    vaultAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    walletAddress?: string | null,
    vaultAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    walletAddress?: string | null,
    vaultAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    image?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootToken?: boolean | null,
    basekets?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    image?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootToken?: boolean | null,
    basekets?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    image?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootToken?: boolean | null,
    basekets?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBaseketSubscriptionVariables = {
  filter?: ModelSubscriptionBaseketFilterInput | null,
};

export type OnCreateBaseketSubscription = {
  onCreateBaseket?:  {
    __typename: "Baseket",
    id: string,
    type?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootBaseket?: boolean | null,
    posts?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Human?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBaseketSubscriptionVariables = {
  filter?: ModelSubscriptionBaseketFilterInput | null,
};

export type OnUpdateBaseketSubscription = {
  onUpdateBaseket?:  {
    __typename: "Baseket",
    id: string,
    type?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootBaseket?: boolean | null,
    posts?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Human?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBaseketSubscriptionVariables = {
  filter?: ModelSubscriptionBaseketFilterInput | null,
};

export type OnDeleteBaseketSubscription = {
  onDeleteBaseket?:  {
    __typename: "Baseket",
    id: string,
    type?: string | null,
    description?: string | null,
    tokenAddress?: string | null,
    tokenId?: string | null,
    rootBaseket?: boolean | null,
    posts?:  {
      __typename: "ModelBaseketPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Human?:  {
      __typename: "ModelBaseketHumanConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBaseketHumanSubscriptionVariables = {
  filter?: ModelSubscriptionBaseketHumanFilterInput | null,
};

export type OnCreateBaseketHumanSubscription = {
  onCreateBaseketHuman?:  {
    __typename: "BaseketHuman",
    id: string,
    humanId: string,
    baseketId: string,
    human:  {
      __typename: "Human",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBaseketHumanSubscriptionVariables = {
  filter?: ModelSubscriptionBaseketHumanFilterInput | null,
};

export type OnUpdateBaseketHumanSubscription = {
  onUpdateBaseketHuman?:  {
    __typename: "BaseketHuman",
    id: string,
    humanId: string,
    baseketId: string,
    human:  {
      __typename: "Human",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBaseketHumanSubscriptionVariables = {
  filter?: ModelSubscriptionBaseketHumanFilterInput | null,
};

export type OnDeleteBaseketHumanSubscription = {
  onDeleteBaseketHuman?:  {
    __typename: "BaseketHuman",
    id: string,
    humanId: string,
    baseketId: string,
    human:  {
      __typename: "Human",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBaseketPostSubscriptionVariables = {
  filter?: ModelSubscriptionBaseketPostFilterInput | null,
};

export type OnCreateBaseketPostSubscription = {
  onCreateBaseketPost?:  {
    __typename: "BaseketPost",
    id: string,
    postId: string,
    baseketId: string,
    post:  {
      __typename: "Post",
      id: string,
      image?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootToken?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBaseketPostSubscriptionVariables = {
  filter?: ModelSubscriptionBaseketPostFilterInput | null,
};

export type OnUpdateBaseketPostSubscription = {
  onUpdateBaseketPost?:  {
    __typename: "BaseketPost",
    id: string,
    postId: string,
    baseketId: string,
    post:  {
      __typename: "Post",
      id: string,
      image?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootToken?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBaseketPostSubscriptionVariables = {
  filter?: ModelSubscriptionBaseketPostFilterInput | null,
};

export type OnDeleteBaseketPostSubscription = {
  onDeleteBaseketPost?:  {
    __typename: "BaseketPost",
    id: string,
    postId: string,
    baseketId: string,
    post:  {
      __typename: "Post",
      id: string,
      image?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootToken?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    baseket:  {
      __typename: "Baseket",
      id: string,
      type?: string | null,
      description?: string | null,
      tokenAddress?: string | null,
      tokenId?: string | null,
      rootBaseket?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
