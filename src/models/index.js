// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Human, User, Post, Baseket, BaseketHuman, BaseketPost } = initSchema(schema);

export {
  Human,
  User,
  Post,
  Baseket,
  BaseketHuman,
  BaseketPost
};