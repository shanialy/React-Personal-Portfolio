import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Ahsan!</h1>
        <p className="pl-desc">
          Lets have a look below on some my projects picstures , that i had
          developed using MERN stack , html,css and JS , Responsive , Fast ,
          Easy to use and reliable websites
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
