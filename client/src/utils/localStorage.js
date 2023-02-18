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
