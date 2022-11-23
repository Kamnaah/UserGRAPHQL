const express= require('express');
const cors=require('cors')
const app=express();
app.use(cors())
const PORT=8080;
const {graphqlHTTP}=require('express-graphql');
const schema =require("./schemas/index");

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
app.listen(PORT,()=>{
  console.log("server is connected at port "+PORT);
})