import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBaseket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Baseket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Baseket = LazyLoading extends LazyLoadingDisabled ? EagerBaseket : LazyBaseket

export declare const Baseket: (new (init: ModelInit<Baseket>) => Baseket) & {
  copyOf(source: Baseket, mutator: (draft: MutableModel<Baseket>) => MutableModel<Baseket> | void): Baseket;
}