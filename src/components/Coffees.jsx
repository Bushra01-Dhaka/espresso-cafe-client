import { Link, useLoaderData } from "react-router-dom";
import CardCoffee from "./CardCoffee";
import { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";

const Coffees = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <div className="pt-20 bg-[#F5F4F1]">
           <div className="mx-auto">
               <small>---Sip & Savor---</small>
               <h2 className="text-4xl text-center font-bold">Our Popular Products</h2>
               <Link to='/addCoffee'><button className="btn bg-yellow-800 text-white hover:bg-yellow-700 mt-6"><GiCoffeeCup></GiCoffeeCup>Add Coffee</button></Link>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
                 coffees.map(coffee => <CardCoffee 
                    key={coffee._id} 
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}

                    ></CardCoffee>)
            }
           </div>
            
        </div>
    );
};

export default Coffees;