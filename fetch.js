import fetch from "node-fetch";

fetch("https://market-stock-suggestion.onrender.com/market_stock/listing", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    years_forecast: 10,
    n_sims: 50000
  }),
})
  .then(res => res.json())
  .then(data => console.log("RESULT:", data))
  .catch(e => console.error("ERR:", e));
