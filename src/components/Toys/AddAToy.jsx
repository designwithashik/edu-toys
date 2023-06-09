import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import PageTitle from '../PageTitle';

const AddAToy = () => {
    const { user } = useContext(AuthContext);

   
    
    const handleToyAdding = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value
        const sellerEmail = form.sellerEmail.value
        const subCategory = form.subCategory.value;
        const price = parseFloat(form.price.value).toFixed(2)
        const quantity = form.quantity.value
        const rating = form.rating.value
        const picture = form.picture.value
        const description = form.description.value
        const toy = {
            name,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            quantity,
            rating,
            picture,
            description
        }
        console.log(toy)



       
            fetch('https://edu-toys-server.vercel.app/toys', {
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(toy)
            })
                .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.acknowledged) {
                  form.reset()
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Your toy has been added',
                  showConfirmButton: false,
                  timer: 1500
                })
                }
              })
       
    }
    return (
      <div className='my-9'>
        
          <PageTitle>Add a Toy</PageTitle>
            <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-xl">
      <h2 className="text-3xl  text-center font-bold mb-4 text-[#FF1276]">Add a Toy</h2>
      <form onSubmit={handleToyAdding}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
            Toy Name:
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="text"
            id="name"
            name="name"
          />
        </div>
                    <div className="mb-4 md:flex gap-3">
                    <div  className='w-full'>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="sellerName">
            Seller Name:
          </label>
          <input
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            defaultValue={user?.displayName}
          />
        </div>
        <div className='w-full'>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="sellerEmail">
            Seller Email:
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="text"
            id="sellerEmail"
                            name="sellerEmail"
                            defaultValue={user?.email}
                            
          />
        </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="subCategory">
            Sub-category:
          </label>
          <select
            className="border border-gray-300 rounded px-3 py-2 w-full"
            id="subCategory"
            name="subCategory"
                        >
                            <option disabled value=''>Which Category?</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value="Science Toys">Science Toys</option>
                            <option value="Engineering Toys">Engeneeering Toys</option>
          </select>
        </div>
                    <div className='md:flex gap-3'>
                    <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="price">
            Price:
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="text"
            id="price"
            name="price"
          />
        </div>
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="quantity">
          Available quantity:
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="number"
            id="quantity"
            name="quantity"
          />
        </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="rating">
            Rating:
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="text"
            id="rating"
            name="rating"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="picture">
            Picture URL:
          </label>
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="text"
            id="picture"
            name="picture"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="description">
            Description:
          </label>
          <textarea
            className="border border-gray-300 rounded px-3 py-2 w-full"
            id="description"
            name="description"
            rows={3}
          />
        </div>
        <button
          className="btn text-white rounded border-none font-bold bg-[#FF1276]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>

        </div>
    );
};

export default AddAToy;