
// export const authorizeUser = async () => {
//   const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
//   const prefix = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code';
//   const clientID = `client_id=${apiKey}`;
//   const redirectURL = 'redirect_uri=https%3A%2F%2Fwho-you-know.herokuapp.com';
//   const state = 'afljadshgoiewhgw';
//   const scope = 'r_fullprofile';
// const url = `${corsAnywhereUrl}${prefix}&${clientID}&${redirectURL}&${state}&${scope}`;
// const test = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78qsbaxd3xwguq&redirect_uri=https://who-you-know-fe.herokuapp.com/&state=DCEeFWf45A53sdfKef424`;
// const response = await fetch(`${corsAnywhereUrl}${test}`);
// console.log(response);
  
// const results = await response.json();
// };

export const postTokens = async (accessToken, idToken) => {
  const response = await fetch(`http://localhost:3001/api/v1/users?api_key=${accessToken}&id_token=${idToken}`, {
    method: 'POST'
  });
  const results = await response.json();
  return results;
};

export const getConnectionsForUser = async (userId) => {
  let url = `http://localhost:3001/api/v1/users/1/cards`;
  const response = await fetch(url, {
    method: 'GET'
  });
  const results = await response.json();
  return results;
};

export const updateDifficultyLevel = async (userId, cardId, difficultyLevel) => {
  let url = `http://localhost:3001/api/v1/users/${userId}/cards/${cardId}?difficulty=${difficultyLevel}`;
  const response = await fetch(url, {
    method: 'PUT'
  });
  const results = await response.json();
  return results;
};

export const retrieveCardsToPlay = async (userId, difficultyLevel) => {
  let url = `http://localhost:3001/api/v1/users/${userId}/cards?difficulty=${difficultyLevel}`;
  console.log(url);
  const response = await fetch(url, {
    method: 'GET'
  });
  const results = await response.json();
  return results;
}