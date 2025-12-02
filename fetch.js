fetch("http://localhost:3000/api/listing", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    years_forecast: 10,
    n_sims: 50000
  }),
})
  .then(r => r.json())
  .then(data => console.log("API RESULT:", data))
  .catch(e => console.log(e));