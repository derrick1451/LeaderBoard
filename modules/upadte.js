const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const update = async (gameid, user, score) => {
  const response = await fetch(`${api}games/${gameid}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user, score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const getResponse = await response.json();
  return getResponse.result;
};
export default update;