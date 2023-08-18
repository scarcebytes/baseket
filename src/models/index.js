// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Baseket } = initSchema(schema);

export {
  Baseket
};