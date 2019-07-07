const express = require('express')
const router = express.Router()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// 使用 GraphQL Schema Language 创建一个 schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// root 提供所有 API 入口端点相应的解析器函数
const root = {
  hello: () => {
    return 'Hello world!'
  }
}

router.use(
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)
module.exports = router
