import React from "react";

function CategoryMenu(props) {
  const filteredProducts = props.allProducts;

  const categories = ["2D", "3D", "Jewelry", "Prints", "Misc"];

  const selectCategory = (category) => {
    filteredProducts = props.allProducts.filter(
      (product) => product.category === category
    );
  };

  return (
    <div class="filter">
      <h4>Categories</h4>

      {categories.map((category) => {
        <button key={category} onClick={() => selectCategory(category)}>
          {category}
        </button>;
      })}
    </div>
  );
}

export default CategoryMenu;
