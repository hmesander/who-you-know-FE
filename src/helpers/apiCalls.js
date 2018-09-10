import { apiKey } from './keys.js';

export const authorizeUser = async () => {
  // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const prefix = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code';
  const clientID = `client_id=${apiKey}`;
  const redirectURL = 'redirect_uri=https%3A%2F%2Fwww.example.com%2Fauth%2Flinkedin';
  const state = 'afljadshgoiewhgw';
  const scope = 'r_fullprofile';
  const url = `${prefix}&${clientID}&${redirectURL}&${state}&${scope}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const results = await response.json();
};