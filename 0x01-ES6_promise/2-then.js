export default function handleResponseFromAPI(promise){
  let prm = promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
  
  return prm;
}
