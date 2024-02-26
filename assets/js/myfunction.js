function ubahLink() {
  const semuaLink = document.querySelectorAll('a[href="#"]');

  semuaLink.forEach((link) => {
    link.href = "https://wa.me/6281345290765";
  });
}
ubahLink();

document.querySelectorAll(".clickable-image").forEach(function (img) {
  img.addEventListener("click", function () {
    var fullScreenImage = document.createElement("img");
    fullScreenImage.src = this.src;
    fullScreenImage.style.display = "block";
    fullScreenImage.style.width = "100%";
    fullScreenImage.style.height = "100%";
    fullScreenImage.style.position = "fixed";
    fullScreenImage.style.zIndex = "10000";
    fullScreenImage.style.top = "0";
    fullScreenImage.style.left = "0";
    fullScreenImage.style.objectFit = "contain";
    fullScreenImage.style.backgroundColor = "rgba(0,0,0,0.7)";

    fullScreenImage.addEventListener("click", function () {
      document.body.removeChild(fullScreenImage);
    });

    document.body.appendChild(fullScreenImage);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var bajuBodoCheckbox = document.getElementById("baju-bodo-checkbox");
  var aksesorisWanitaCheckbox = document.getElementById(
    "aksesoris-wanita-checkbox"
  );
  var aksesorisPriaCheckbox = document.getElementById(
    "aksesoris-pria-checkbox"
  );
  var bajuBodoProducts = document.querySelectorAll(".baju-bodo-product");
  var aksesorisWanitaProducts = document.querySelectorAll(
    ".aksesoris-wanita-product"
  );
  var aksesorisPriaProducts = document.querySelectorAll(
    ".aksesoris-pria-product"
  );

  function toggleProductVisibility(checkbox, products) {
    checkbox.addEventListener("change", function () {
      products.forEach(function (product) {
        product.style.display = checkbox.checked ? "block" : "none";
      });
    });
  }

  toggleProductVisibility(bajuBodoCheckbox, bajuBodoProducts);
  toggleProductVisibility(aksesorisWanitaCheckbox, aksesorisWanitaProducts);
  toggleProductVisibility(aksesorisPriaCheckbox, aksesorisPriaProducts);
});
