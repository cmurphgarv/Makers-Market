const ProductItemStyle = {};

const ProductItem = ({ name, image, price }) => {
  return (
    <div class="">
      <div class="productItem">
        <a src="/">
          <img src={`/images/${image}`} alt={name} />

          <h5>{name}</h5>

          {price}
        </a>
      </div>
    </div>
  );
};
export default ProductItem;
