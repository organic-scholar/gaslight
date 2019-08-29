import { importSchema } from '.'
import { buildSchema } from 'graphql';
import { graphql } from 'graphql';

test.only('import using uri', async ()=>
{
  let source = await importSchema('fixtures/http/schema.graphql');
  let schema = buildSchema(source);
  let query = `
      query {
        __type(name: "Geo") {
          fields {
            name
            description
          }
        }
      }
    `
  let result = await graphql(schema, query);
  expect(result.data.__type).not.toBeNull();
}, 5000);