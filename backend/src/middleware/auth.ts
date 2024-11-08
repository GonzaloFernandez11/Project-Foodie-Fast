import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
    audience: 'Foodie-Fast-app-api',
    issuerBaseURL: 'https://dev-nuulnzzkgxxgl3vd.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });