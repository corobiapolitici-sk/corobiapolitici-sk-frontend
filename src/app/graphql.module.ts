import { HttpHeaders } from '@angular/common/http';
import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import base64 from 'base-64';

const uri = 'http://localhost:4000/'; // <-- add the URL of the GraphQL server here
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const username = 'neo4j';
  const password = 'skuska';
  // operation.setContext({
  //   headers: new HttpHeaders()
  //     .set('Authorization', `Basic ${base64.encode(username + ":" + password)}`)
  //     .set('accept', 'application/json')
  //     .set('Access-Control-Allow-Origin', '*'),

  // });

  // return forward(operation);
});

export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({uri, method: 'GET', withCredentials: false });
  return {
    link: concat(authMiddleware, http),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
