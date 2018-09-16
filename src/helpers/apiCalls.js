import { apiKey } from './keys.js';

export const authorizeUser = async () => {
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const prefix = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code';
  const clientID = `client_id=${apiKey}`;
  const redirectURL = 'redirect_uri=https%3A%2F%2Fwho-you-know.herokuapp.com';
  const state = 'afljadshgoiewhgw';
  const scope = 'r_fullprofile';
  // const url = `${corsAnywhereUrl}${prefix}&${clientID}&${redirectURL}&${state}&${scope}`;
  const test = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78qsbaxd3xwguq&redirect_uri=https://who-you-know-fe.herokuapp.com/&state=DCEeFWf45A53sdfKef424`;
  const response = await fetch(`${corsAnywhereUrl}${test}`);
  console.log(response);
  
  // const results = await response.json();
};