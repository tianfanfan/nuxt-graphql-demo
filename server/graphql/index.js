const express = require('express')
const router = express.Router()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// 使用 GraphQL Schema Language 创建一个 schema
/**
 * input 关键字，自定义新输入类型
 * type 关键字，自定义新输出类型
 */
const schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Mutation {
    createMessage(msg: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
  type Query {
    getMessage(id: ID!): Message
    foo: String
  }
`)
// 映射 username 到 content
const fakeDatabase = {
  6: {
    id: 6,
    content: 'content',
    author: 'tf'
  }
}
// 如果 Message 拥有复杂字段，我们把它们放在这个对象里面。

class Message {
  constructor(id, { content, author }) {
    this.id = id
    this.content = content
    this.author = author
  }
}

// root 提供所有 API 入口端点相应的解析器函数
const root = {
  getMessage: function ({ id }) {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id)
    }
    return new Message(id, fakeDatabase[id])
  },
  createMessage({ msg }) {
    console.log(msg)
    const id = require('crypto')
      .randomBytes(10)
      .toString('hex')
    fakeDatabase[id] = msg
    return new Message(id, msg)
  },
  foo() {
    return 'foo'
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
