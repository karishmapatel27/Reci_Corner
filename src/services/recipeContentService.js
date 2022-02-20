import httpClient from "../api/posts"

const getAll = () => {
  return httpClient.get('/recipeContent');
}

export default {getAll};