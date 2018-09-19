/*eslint-disable no-undef*/

import { postTokens, getConnectionsForUser, updateDifficultyLevel, retrieveCardsToPlay } from './apiCalls';

describe('API CALL TESTS', () => {

  it('should post the tokens for a user', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        id: 10
      })
    }));
    const results = await postTokens('taco', 'chicken');

    expect(results).toEqual({ id: 10 });
  });

  it('should fetch a users connections', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve([{connection: 1}, {connection: 2}])
    }));
    const results = await getConnectionsForUser(1);

    expect(results).toEqual([{ connection: 1 }, { connection: 2 }]);
  });

  it('should update the difficulty level', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        message: 'success'
      })
    }));
    const results = await updateDifficultyLevel(1, 7, 'easy');

    expect(results).toEqual({message: 'success'});
  });

  it('should retrieve cards to play', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve([{ connection: 1 }, { connection: 2 }])
    }));
    const results = await retrieveCardsToPlay(1, 'easy');

    expect(results).toEqual([{ connection: 1 }, { connection: 2 }]);
  });

});
