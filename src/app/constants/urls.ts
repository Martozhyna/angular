const baseURL = 'https://jsonplaceholder.typicode.com';

const users = `${baseURL}/users`;

const posts = `${baseURL}/posts`

const urls = {
  users:{
    users,
    byId:(id: number): string => `${users}/${id}`
  },
  posts:{
    posts,
    byId:(id: number): string => `${posts}/${id}`
  }
}

export {
  urls
}
