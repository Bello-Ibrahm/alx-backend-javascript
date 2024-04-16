/**
 * A WeakMap to track the number of times an API endpoint has been queried.
 */
export const weakMap = new WeakMap();

/**
 * Queries an API endpoint and tracks the number of queries made to each endpoint.
 *
 * This function uses a `WeakMap` to keep track of the number of queries made to a
 * given API endpoint. If the endpoint has been queried before, it increments the count.
 * If the count reaches or exceeds 4, an error is thrown indicating that the endpoint load is high.
 * If the endpoint has not been queried before, the function initializes the count for that endpoint
 * in the `WeakMap`.
 *
 * @param {string} endpoint - The API endpoint to query and track.
 *
 * @throws {Error} - Throws an error if the number of queries to the endpoint reaches or exceeds 4,
 * indicating that the endpoint load is high.
 */
// https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const endpointItem = weakMap.get(endpoint);
    if (endpointItem >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, endpointItem + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
};
