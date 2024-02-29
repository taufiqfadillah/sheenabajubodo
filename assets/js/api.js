async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Function to fetch data for Baju Bodo products
async function fetchBajuBodoData() {
  const url = "https://dashboard.sheenabajubodo.store/api/bajubodos";
  try {
    const response = await fetchData(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching Baju Bodo data:", error);
    throw error;
  }
}

// Function to fetch image URL for a specific Baju Bodo product
async function fetchBajuBodoImage(productId) {
  const url = `https://dashboard.sheenabajubodo.store/api/bajubodos/${productId}?populate=%2A`;
  try {
    const response = await fetchData(url);
    return response.data.attributes.gambarbajubodo.data.attributes.url;
  } catch (error) {
    console.error("Error fetching Baju Bodo image:", error);
    throw error;
  }
}

// Function to render Baju Bodo products in HTML
async function renderBajuBodoProducts() {
  const productsContainer = document.getElementById("produk-bajubodos");

  try {
    const bajuBodoData = await fetchBajuBodoData();
    bajuBodoData.forEach(async (product) => {
      const productId = product.id;
      const productName = product.attributes.namabajubodo;
      const productPrice = product.attributes.hargabajubodo;

      // Fetch image URL for the product
      const imageUrl = await fetchBajuBodoImage(productId);

      // Create product HTML
      const productHTML = `
        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 baju-bodo-product">
          <div class="single-product mb-15 wow fadeInUp" data-wow-delay=".1s">
            <div class="product-thumb">
              <img src="${imageUrl}" alt="${productName}" />
              <img src="${imageUrl}" alt="${productName}""/>
              <div class="cart-btn cart-btn-1 p-abs">
                <a href="https://wa.me/6281345290765">Pesan Sekarang</a>
              </div>
              <span class="discount discount-2 p-abs">New</span>
              <div class="product-action product-action-1 p-abs">
                <a href="#" data-bs-toggle="modal" data-bs-target="#productModal" class="icon-box icon-box-1">
                  <i class="fal fa-eye"></i>
                  <i class="fal fa-eye"></i>
                </a>
                <a href="#" class="icon-box icon-box-1">
                  <i class="fal fa-heart"></i>
                  <i class="fal fa-heart"></i>
                </a>
                <a href="#" class="icon-box icon-box-1">
                  <i class="fal fa-layer-group"></i>
                  <i class="fal fa-layer-group"></i>
                </a>
              </div>
            </div>
            <div class="product-content">
              <h4 class="pro-title pro-title-1">
                <a href="#">${productName}</a>
              </h4>
              <div class="pro-price">
                <span>Rp.${productPrice}</span>
                <del>Rp. 200.000</del>
              </div>
              <div class="rating">
                <i class="fal fa-star active"></i>
                <i class="fal fa-star active"></i>
                <i class="fal fa-star active"></i>
                <i class="fal fa-star active"></i>
                <i class="fal fa-star active"></i>
              </div>
            </div>
          </div>
        </div>
        `;

      // Append product HTML to container
      productsContainer.innerHTML += productHTML;
    });
  } catch (error) {
    console.error("Error rendering Baju Bodo products:", error);
  }
}

// Render Baju Bodo products when the page loads
document.addEventListener("DOMContentLoaded", renderBajuBodoProducts);
