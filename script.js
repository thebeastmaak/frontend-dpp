const API_URL = "https://backend-dpp.onrender.com";

document.getElementById("product-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const product = {
    product_id: document.getElementById("product_id").value,
    name: document.getElementById("name").value,
    country: document.getElementById("country").value,
    sport: document.getElementById("sport").value,
    description: document.getElementById("description").value,
    image: document.getElementById("image").value  // ✅ New field for Image URL
  };

  try {
    const res = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await res.json();
    alert(data.message || "Product added successfully.");
  } catch (err) {
    console.error("Error adding product:", err);
    alert("❌ Failed to add product.");
  }
});

async function getProduct() {
  const id = document.getElementById("search_id").value;

  try {
    const res = await fetch(`${API_URL}/product/${id}`);
    const data = await res.json();

    document.getElementById("result").textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error("Error fetching product:", err);
    document.getElementById("result").textContent = "❌ Failed to fetch product.";
  }
}
