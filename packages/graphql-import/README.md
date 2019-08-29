# graphql-import

[![Build Status](https://travis-ci.org/organic-scholar/gaslight.svg?branch=master)](https://travis-ci.org/organic-scholar/gaslight)


Import &amp; export definitions in GraphQL SDL (also refered to as GraphQL modules)

## Install

```sh
yarn add @gaslight/graphql-import
```

## Usage

```ts
import { importSchema } from '@gaslight/graphql-import'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = importSchema('schema.graphql')
const resolvers = {}

const schema = makeExecutableSchema({ typeDefs, resolvers })
```

Assume the following directory structure:

```
.
├── schema.graphql
├── posts.graphql
└── comments.graphql
```

`schema.graphql`

```graphql
# import Post from "posts.graphql"

type Query {
  posts: [Post]
}
```

`posts.graphql`

```graphql
# import Comment from 'comments.graphql'

type Post {
  comments: [Comment]
  id: ID!
  text: String!
  tags: [String]
}
```

`comments.graphql`

```graphql
type Comment {
  id: ID!
  text: String!
}
```

`https://example.com/graphql`
```
# import User from 'https://exmaple.com/graphql'
```

Running `console.log(importSchema('schema.graphql'))` produces the following output:

```graphql
type Query {
  posts: [Post]
}

type Post {
  comments: [Comment]
  id: ID!
  text: String!
  tags: [String]
}

type Comment {
  id: ID!
  text: String!
}
```

## Related topics & next steps

- Static import step as build time
- Namespaces
- Support importing from HTTP endpoints