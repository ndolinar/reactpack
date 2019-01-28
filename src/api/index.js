import axios from 'axios';

async function fetchRepos() {
  return await axios
    .get('https://api.github.com/users/ndolinar/repos')
    .then(res => res.data)
    .catch(err => {
      throw Error(err);
    });
}

export default {
  fetchRepos,
};
