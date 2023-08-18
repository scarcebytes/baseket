import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerHuman = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Human, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly basekets?: (BaseketHuman | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHuman = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Human, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly basekets: AsyncCollection<BaseketHuman>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Human = LazyLoading extends LazyLoadingDisabled ? EagerHuman : LazyHuman

export declare const Human: (new (init: ModelInit<Human>) => Human) & {
  copyOf(source: Human, mutator: (draft: MutableModel<Human>) => MutableModel<Human> | void): Human;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly walletAddress?: string | null;
  readonly vaultAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly walletAddress?: string | null;
  readonly vaultAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly tokenAddress?: string | null;
  readonly tokenId?: string | null;
  readonly rootToken?: boolean | null;
  readonly basekets?: (BaseketPost | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly tokenAddress?: string | null;
  readonly tokenId?: string | null;
  readonly rootToken?: boolean | null;
  readonly basekets: AsyncCollection<BaseketPost>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerBaseket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Baseket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly tokenAddress?: string | null;
  readonly tokenId?: string | null;
  readonly rootBaseket?: boolean | null;
  readonly posts?: (BaseketPost | null)[] | null;
  readonly Human?: (BaseketHuman | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBaseket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Baseket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
  readonly description?: string | null;
  readonly tokenAddress?: string | null;
  readonly tokenId?: string | null;
  readonly rootBaseket?: boolean | null;
  readonly posts: AsyncCollection<BaseketPost>;
  readonly Human: AsyncCollection<BaseketHuman>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Baseket = LazyLoading extends LazyLoadingDisabled ? EagerBaseket : LazyBaseket

export declare const Baseket: (new (init: ModelInit<Baseket>) => Baseket) & {
  copyOf(source: Baseket, mutator: (draft: MutableModel<Baseket>) => MutableModel<Baseket> | void): Baseket;
}

type EagerBaseketHuman = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BaseketHuman, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly humanId?: string | null;
  readonly baseketId?: string | null;
  readonly human: Human;
  readonly baseket: Baseket;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBaseketHuman = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BaseketHuman, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly humanId?: string | null;
  readonly baseketId?: string | null;
  readonly human: AsyncItem<Human>;
  readonly baseket: AsyncItem<Baseket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BaseketHuman = LazyLoading extends LazyLoadingDisabled ? EagerBaseketHuman : LazyBaseketHuman

export declare const BaseketHuman: (new (init: ModelInit<BaseketHuman>) => BaseketHuman) & {
  copyOf(source: BaseketHuman, mutator: (draft: MutableModel<BaseketHuman>) => MutableModel<BaseketHuman> | void): BaseketHuman;
}

type EagerBaseketPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BaseketPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postId?: string | null;
  readonly baseketId?: string | null;
  readonly post: Post;
  readonly baseket: Baseket;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBaseketPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BaseketPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly postId?: string | null;
  readonly baseketId?: string | null;
  readonly post: AsyncItem<Post>;
  readonly baseket: AsyncItem<Baseket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BaseketPost = LazyLoading extends LazyLoadingDisabled ? EagerBaseketPost : LazyBaseketPost

export declare const BaseketPost: (new (init: ModelInit<BaseketPost>) => BaseketPost) & {
  copyOf(source: BaseketPost, mutator: (draft: MutableModel<BaseketPost>) => MutableModel<BaseketPost> | void): BaseketPost;
}