import axios from "axios";

export default {
  getAll: () => {
    return axios.get("https://randomuser.me/api/?results=500&nat=us");
  }
  
};