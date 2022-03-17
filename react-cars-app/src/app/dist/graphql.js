"use strict";
exports.__esModule = true;
exports.apolloClient = void 0;
var client_1 = require("@apollo/client");
exports.apolloClient = new client_1.ApolloClient({
    uri: process.env.REACT_APP_API_URL + "/graphql",
    cache: new client_1.InMemoryCache()
});
