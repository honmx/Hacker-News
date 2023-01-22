import axios from "axios";
import { url } from "../heplers/constants";


export const fetchComments = async (arrOfId) => {
  // debugger;
  if (!arrOfId) return [];
  const comments = await Promise.all(arrOfId.map(id => {
    return axios.get(`${url}/item/${id}.json`)
                .then(res => res.data);
  }));
  return comments; 
}