import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const CardList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (index) => {
    // if (product.length > 0){
    //   let newProductList = product.splice(0,1);
    // }else{
    //   return;
    // }
    console.log(index);
  };

  return (
    <div>
      <div>
        <p className="text-4xl font-semibold text-center">Our Products</p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum
          eligend
        </p>
      </div>
      <div className="flex justify-center">
        <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product.length > 0 &&
            product.map((item, index) => {
              return (
                <CardItem
                  item={item}
                  key={index}
                  onDelete={() => handleDelete(index)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CardList;
