const content = document.getElementById("container");
const url =
  "http://78.46.252.118/repeat?url=https://www.shareville.no/api/v1/portfolios/324475/positions";

fetch(url, {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})
  .then(res => res.json())
  .then(res => (content.innerHTML = JSON.stringify(res)));
