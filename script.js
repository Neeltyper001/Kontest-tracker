let url = "https://kontests.net/api/v1/all"

let reply = fetch(url);
reply.then((contests) => {
  return contests.json()
}).then((contests) => {
  console.log(contests);
  CONTESTS = contests;
  some_html = "";
  for (ele in contests) {
    some_html += ` <a href= ${contests[ele].url} target="_blank">
    <div class="card">
      <h3>${contests[ele].name}</h3>
      <p class="due">In 24 hours? ${contests[ele].in_24_hours}</p>
      <p>Starts at: ${contests[ele].start_time}</p>
      <p>Ends at: ${contests[ele].end_time}</p>
    </div>
    </a>`
  }
  document.getElementById('card-container').innerHTML = some_html;
})