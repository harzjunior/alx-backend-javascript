/**
 * A weak map of endpoints and the num of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The max num of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the num of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a req to.
 * @author Haruna Bah Jibril <https://github.com/harzjunior>
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
