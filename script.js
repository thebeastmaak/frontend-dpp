const API_URL = "https://backend-dpp.onrender.com";

document.getElementById("product-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const product = {
    product_id: document.getElementById("product_id").value,
    name: document.getElementById("name").value,
    manufacturer: document.getElementById("country").value,
    materials: document.getElementById("sport").value,
    description: document.getElementById("description").value,
    
  };

  const res = await fetch("https://backend-dpp.onrender.com/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
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
