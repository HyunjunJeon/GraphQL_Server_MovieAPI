import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver_rest"

const server = new GraphQLServer({
    typeDefs: "graphql/schema_rest.graphql",
    resolvers
})

server.start(()=>console.log("Graphql Server Running"))