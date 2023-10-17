import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { name, quantity, supplier, taste, category, price, photo } = coffee;
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <div className="hero min-h-[40vh] bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{name}</h1>
            </div>
          </div>
        </div>

        <div className="hero min-h-[80vh] bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img 
            className="h-[400px] w-[400px] rounded"
              src={photo}
            />
            <div>
              <h1 className="text-3xl font-bold text-left">{name}</h1>
              <div className="text-left py-6">
                <p><span className="font-bold">Category:</span> {category}</p>
                <p><span className="font-bold">Taste:</span> {taste}</p>
                <p><span className="font-bold">Supplier</span> {supplier}</p>
                <p><span className="font-bold">Available Quantity:</span> {quantity}</p>
                <p><span className="font-bold">Price:</span> {price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
