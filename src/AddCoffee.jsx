
import Swal from "sweetalert2";
import Navbar from "./components/Navbar";

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const coffeeInfo = {name,quantity, supplier, taste, category, price, photo};
         
        // 1.2 -
        // Sending client's data into server and server will get those data through post request
        fetch('http://localhost:5000/coffees',{
           method: 'POST',
           headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(coffeeInfo),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    // icon: 'success',
                    // title: 'Oops...',
                    text: 'Coffee Added Successfully',
                  
                  })
            }
        })

        console.log(coffeeInfo);


    }

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#F4F3F0] p-8">
        <div className="mx-auto">
          <h2 className="text-center text-4xl font-bold pt-8">Add Coffee</h2>
          <p className="py-6 max-w-[900px] mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleAddCoffee} className="mt-20">
        {/* form row name & quantity*/}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-control  lg:w-1/2 ">
              <label className="label">
              <span className="text-yellow-800 font-bold  bg-white">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control lg:w-1/2 ">
              <label className="label">
              <span className="text-yellow-800  bg-white   font-bold">Available Quantity</span>
              </label>
              <label className="input-group">
              
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

          </div>


             {/* form row supplier & taste */}
             <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-control  lg:w-1/2 ">
              <label className="label">
              <span className="text-yellow-800 font-bold  bg-white">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Supplier Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control lg:w-1/2 ">
              <label className="label">
              <span className="text-yellow-800  bg-white   font-bold">Taste</span>
              </label>
              <label className="input-group">
              
                <input
                  type="text"
                  name="taste"
                  placeholder="Taste of Coffee"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

          </div>

             {/* form row category & price */}
             <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-control  lg:w-1/2 ">
              <label className="label">
              <span className="text-yellow-800 font-bold  bg-white">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control lg:w-1/2 ">
              <label className="label">
              <span className="text-yellow-800  bg-white   font-bold">Price</span>
              </label>
              <label className="input-group">
              
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

          </div>
         
         {/* form photo row */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="form-control  md:w-full">
              <label className="label">
              <span className="text-yellow-800 font-bold  bg-white">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL "
                  className="input input-bordered w-full"
                />
              </label>
            </div>

          </div>


        <input type="submit" value="Add Coffee" className="btn btn-block bg-yellow-800 text-white hover:bg-yellow-700 mt-6"  />

        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
