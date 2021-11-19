import handleFetchError from './handleFetchError';

const apiGet = (path: string, post: any): Promise<any> => (
  fetch('/api/v1/' + path, {
    method: 'POST',
    /*headers: {
      'Authorization': 'Bearer ' + auth.token,
      'Content-Type': 'application/json'
    },*/
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .catch(handleFetchError)
);

export default apiGet;
