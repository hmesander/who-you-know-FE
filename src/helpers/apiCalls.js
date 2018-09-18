
export const postTokens = async (accessToken, idToken) => {
  const response = await fetch(`https://who-you-know.herokuapp.com/api/v1/users?api_key=${accessToken}&id_token=${idToken}`, {
    method: 'POST'
  });
  const results = await response.json();
  return results;
};

export const getConnectionsForUser = async (userId) => {
  let url = `https://who-you-know.herokuapp.com/api/v1/users/1/cards`;
  const response = await fetch(url, {
    method: 'GET'
  });
  const results = await response.json();
  return results;
};

export const updateDifficultyLevel = async (userId, cardId, difficultyLevel) => {
  let url = `https://who-you-know.herokuapp.com/api/v1/users/${userId}/cards/${cardId}?difficulty=${difficultyLevel}`;
  const response = await fetch(url, {
    method: 'PUT'
  });
  const results = await response.json();
  return results;
};

export const retrieveCardsToPlay = async (userId, difficultyLevel) => {
  let url = `https://who-you-know.herokuapp.com/api/v1/users/${userId}/cards?difficulty=${difficultyLevel}`;
  const response = await fetch(url, {
    method: 'GET'
  });
  const results = await response.json();
  return results;
};