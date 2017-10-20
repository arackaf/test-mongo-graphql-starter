const { createGraphqlSchema } = require("mongo-graphql-starter");
const projectSetup = require("./projectSetupANode");

const path = require("path");

createGraphqlSchema(projectSetup, path.resolve("./testProject1"));
