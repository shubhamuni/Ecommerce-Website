import { useParams } from "react-router-dom";
import SpottedProduct from "./SpottedProduct";
const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: "5",
    title: "Orange Color",
    price: 100,
    imageUrl:
      "https://c0.wallpaperflare.com/preview/124/688/1015/texture-colorful-colors-multi-colors.jpg",
  },
];
const ProductData = () => {
  const params = useParams();
  const product = productsArr.find(
    (product) => product.id === params.productId
  );
  return (
    <div className=" m-5 p-5">
      <div style={{ textAlign: "center" }}>
        <h1>Product Details</h1>
      </div>
      <SpottedProduct
        title={product.title}
        imageUrl={product.imageUrl}
        price={product.price}
      />
    </div>
  );
};

export default ProductData;
