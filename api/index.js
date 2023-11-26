async function getAllCategories() {
  const response = await fetch("http://localhost:1337/api/categories");
  const result = await response.json();
  return result;
}

async function createOrderByUkraine() {
  const response = await fetch("http://localhost:1337/api/order-ukraines", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        category: "new collection",
        product: "some name",
        phone: "123123123",
        email: "asd@asd.com",
        full_name: "vasya vasya",
        city: "some city",
        address: "any address",
      },
    }),
  });

  const result = await response.json();
  return result;
}

async function createOrderByUkraine() {
  const response = await fetch("http://localhost:1337/api/order-worlds", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: {
        category: "new collection",
        product: "some name",
        phone: "123123123",
        email: "asd@asd.com",
        full_name: "vasya vasya",
        full_shipping_address: "some city",
        State_Province_zip_code: "some zip code",
      },
    }),
  });

  const result = await response.json();
  return result;
}

async function getAllProducts() {
  const response = await fetch(
    "http://localhost:1337/api/products?populate=preview,preview_hover,card_gallery_images"
  );
  const result = await response.json();
  return result;
}

async function getOneProducts(id) {
  const response = await fetch(
    `http://localhost:1337/api/products/${id}?populate=preview,preview_hover,card_gallery_images`
  );
  const result = await response.json();
  return result;
}

async function getProductsByCategory(categoryId) {
  const response = await fetch(
    `http://localhost:1337/api/products?filters[category][id][$eq]=${categoryId}`
  );
  const result = await response.json();
  return result;
}
