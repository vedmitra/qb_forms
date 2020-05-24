import { handleResponse, handleError } from "./apiUtils";
import { settings } from "settings";
const baseUrl = settings.apiUrl + "/claims/";

export function getClaims() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveClaim(claim) {
  return fetch(baseUrl + (claim.id || ""), {
    method: claim.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(claim),
  })
    .then(handleResponse)
    .catch(handleError);
}
