import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/claims/";

export function getClaim() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveClaim(claim) {
  return fetch(baseUrl + (claim.id || ""), {
    method: claim.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(course),
  })
    .then(handleResponse)
    .catch(handleError);
}
