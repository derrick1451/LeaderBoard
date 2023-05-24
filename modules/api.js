const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
let gameid = '';
const getApi = async () => {
  const request = await fetch(`${api}games/`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const getRequest = await request.json();
  gameid = getRequest.result;
  return gameid;
};
export default getApi;