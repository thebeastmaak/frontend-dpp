const API_URL = "https://backend-dpp.onrender.com";

document.getElementById("product-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const product = {
    product_id: document.getElementById("product_id").value.trim(),
    name: document.getElementById("name").value.trim(),
    country: document.getElementById("country").value.trim(),
    university: document.getElementById("university").value.trim(), // ✅ NEW FIELD
    sport: document.getElementById("sport").value.trim(),
    description: document.getElementById("description").value.trim(),
    image: document.getElementById("image").value.trim(),
  };

  try {
    const res = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await res.json();
    alert(data.message || "✅ Product added successfully.");
  } catch (err) {
    console.error("❌ Error adding product:", err);
    alert("❌ Failed to add product.");
  }
});

async function getProduct() {
  const id = document.getElementById("search_id").value.trim();
  const resultContainer = document.getElementById("result");

  try {
    const res = await fetch(`${API_URL}/product/${id}`);
    const data = await res.json();

    if (data.product_id) {
      resultContainer.innerHTML = `
        <h2>Product Details</h2>
        <p><strong>🆔 Product ID:</strong> ${data.product_id}</p>
        <p><strong>👤 Name:</strong> ${data.name}</p>
        <p><strong>🌍 Country:</strong> ${data.country}</p>
        <p><strong>🎓 University:</strong> ${data.university || "Not Provided"}</p>
        <p><strong>🏅 Sport:</strong> ${data.sport}</p>
        <p><strong>📝 Description:</strong> ${data.description || "N/A"}</p>
        ${
          data.image
            ? `<img src="${data.image}" alt="Product Image" style="max-width: 300px; border-radius: 10px;" />`
            : ""
        }
      `;
    } else {
      resultContainer.textContent = "❌ Product not found.";
    }
  } catch (err) {
    console.error("Error fetching product:", err);
    resultContainer.textContent = "❌ Failed to fetch product.";
  }
}
