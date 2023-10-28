import { type SchemaTypeDefinition } from 'sanity';

import categorySchema from './categorySchema';
import productSchema from './productSchema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categorySchema,
    productSchema,
  ],
}
