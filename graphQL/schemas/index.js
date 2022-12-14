const userData=require('../MOCK_DATA.json');
const UserType= require("./typeDef/userType");
const graphql=require('graphql');
const {GraphQLObjectType , GraphQLSchema , GraphQLInt, GraphQLString, GraphQLList}=require('graphql')
//schema is combination between mutation and query
//query means getting data or information
//mutation tries to create, update ,delete.
const RootQuery= new GraphQLObjectType({
  name:"RootQueryType",
  fields: {
    getAllUsers:{
      type: new GraphQLList(UserType),
      args: { id: {type:GraphQLInt}},
      resolve(parent, args){
        return userData
      }
    }
  }
})
const Mutation= new GraphQLObjectType({
  name:"Mutaion",
  fields: {
    createUser:{
      type: UserType,
      args: {
        id:{type: GraphQLInt},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        email: {type: GraphQLString},
        gender: {type: GraphQLString},
        ip_address: {type: GraphQLString}
      },
      resolve(parent, args){
        userData.push({id:userData.length+1, first_name: args.first_name, last_name: args.last_name, email: args.email, gender: args.gender, ip_address: args.ip_address
        }
       )
       return args
      }
    }
  }
})
module.exports= new GraphQLSchema({query: RootQuery, mutation:Mutation})