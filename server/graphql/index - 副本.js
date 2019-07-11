const express = require('express')
const router = express.Router()
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// 使用 GraphQL Schema Language 创建一个 schema
const schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Query {
    getDie(numSides: Int): RandomDie
  }
`)

// root 提供所有 API 入口端点相应的解析器函数
const root = {
  getDie: function ({ numSides }) {
    const rollOnce = () => {
      return 1 + Math.floor(Math.random() * numSides)
    }
    return {
      numSides: () => {
        return numSides
      },
      rollOnce,
      roll({ numRolls }) {
        const output = []
        for (let i = 0; i < numRolls; i++) {
          output.push(rollOnce())
        }
        return output
      }
    }
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
