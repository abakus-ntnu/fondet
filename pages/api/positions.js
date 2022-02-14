const axios = require('axios');

export default (req, res) => {
  const instance = axios.create({
    timeout: 5000,
    headers: {
      'X-Custom-Header': '',
      'Access-Control-Allow-Origin': '*',
    },
  });
  instance
    .get('https://www.shareville.no/api/v1/portfolios/324475/positions')
    .then((response) => res.send(response.data))
    .catch((error) => res.send(error));
};
