const API_URL = "https://backend-dpp.onrender.com";

document.getElementById("product-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = {
    product_id: document.getElementById("product_id").value,
    name: document.getElementById("name").value,
    manufacturer: document.getElementById("manufacturer").value,
    materials: document.getElementById("materials").value.split(",").map(s => s.trim())
  };
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  alert(data.message);
});

async function getProduct() {
  const id = document.getElementById("search_id").value;
  const res = await fetch(`${API_URL}/product/${id}`);
  const data = await res.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
}
