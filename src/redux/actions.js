import { GET_POSTS } from "./types";

 export function getPosts (payload) {
     return {
         type: GET_POSTS,
         payload: payload
     }
 }