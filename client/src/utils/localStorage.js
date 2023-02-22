export const getSavedProductList = () => {
  const savedProductIds = localStorage.getItem("productList")
    ? JSON.parse(localStorage.getItem("productList"))
    : [];

  return savedProductIds;
};

export const addProductIdToProductList = (productIdArr) => {
  if (productIdArr.length) {
    localStorage.setItem("productList", JSON.stringify(productIdArr));
  } else {
    localStorage.removeItem("productList");
  }
};

export const removeProductIdFromProductList = (productId) => {
  const savedProductIds = localStorage.getItem("productList")
    ? JSON.parse(localStorage.getItem("productList"))
    : null;

  if (!savedProductIds) {
    return false;
  }

  const updatedProductIds = savedProductIds?.filter(
    (savedProductId) => savedProductId !== productId
  );
  localStorage.setItem("productList", JSON.stringify(updatedProductIds));

  return true;
};

export const clearProductList = () => {
  localStorage.setItem("productList", []);

  return true;
};
