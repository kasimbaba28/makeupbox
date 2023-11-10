function buttonClicked() {
  var makeup = document.getElementById("makeup").value;
  var type = document.getElementById("type").value;

  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeup}&product_type=${type}`)
    .then((response) => response.json())
    .then((data) => {
      var displayContent = ""; // Initialize an empty string to store the HTML content.

      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          var item = data[i];

          var id = item.id;
          var brand = item.brand;
          var name = item.name;
          var price = item.price;
          var itemType = item.product_type;
          var description = item.description;
          var prodlink = item.product_link;
          var weblink = item.website_link;
          var imageLink = item.image_link; // Use the correct property for the image link.

          // Create HTML elements for each item and append them to the displayContent.
          displayContent += `
            <div class="grid-item">
              <img src="${imageLink}" alt="${name} Image">
              <p>Product Id: ${id}</p>
              <p>Brand: ${brand}</p>
              <p>Name: ${name}</p>
              <p>Price: ${price}</p>
              <p>Type: ${itemType}</p>
              <p>Description: ${description}</p>
              <p>Product Link: ${prodlink}</p>
              <p>Website Link: ${weblink}</p>
              <button onclick="add-to-cart()" class="add-to-cart">Add to cart</button>
            </div>
          `;
        }
      } else {
        displayContent = "<p>No items found.</p>";
      }

      document.getElementById("display").innerHTML = displayContent;
    });
}
