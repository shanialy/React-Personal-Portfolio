import "./productList.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <>
    <div className="container text-center mt-2">
    <div>
      <h1 className="pl-title">Create & inspire. It's Sami</h1>
      <p className="pl-desc">
         Assalamulaikum. My name is Samiullah Tariq Butt and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae modi veniam quisquam consequuntur, odio obcaecati soluta hic, debitis recusandae molestias et vero saepe ipsa nisi rerum exercitationem expedita nihil! Id!
      </p>
    </div>
    <div className="row pl-list">
      {products.map((item) => (
        <Product key={item.id} img={item.img} link={item.link} />
      ))}
    </div>
 
  </div>
  </>

  );
};

export default ProductList;
