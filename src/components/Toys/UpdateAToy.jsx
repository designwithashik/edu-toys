import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateAToy = () => {
    const [toy, setToy] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/toy/${id}`)
            .then(res => res.json())
        .then(data=>setToy(data))
    }, [])
    const {name,
        sellerName,
        sellerEmail,
        subCategory,
        price,
        quantity,
        rating,
        picture,
        description} = toy
   

    console.log(id.id)
    const handleToyAdding = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value
        const sellerEmail = form.sellerEmail.value
        const subCategory = form.subCategory.value;
        const price = form.price.value
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



       
            fetch(`http://localhost:3000/toy/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(toy)
            })
                .then(res => res.json())
            .then(data=>console.log(data))
       
    }
    return (
        <div>
            <div>
            <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-xl">
      <h2 className="text-3xl  text-center font-bold mb-4">Update a Toy</h2>
      <form onSubmit={handleToyAdding}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
            Toy Name:
          </label>
          <input
            defaultValue={name}
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
                            defaultValue={sellerName}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            
          />
        </div>
        <div className='w-full'>
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="sellerEmail">
            Seller Email:
          </label>
          <input
            defaultValue={sellerEmail}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="text"
            id="sellerEmail"
                            name="sellerEmail"
                            
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
                                defaultValue={subCategory}
                        >
                            <option disabled value=''>Which Category?</option>
                            <option value="Language Toys">Language Toys</option>
                            <option value="Math Toys">Math Toys</option>
                            <option value="Engineering Toys">Engeneeering Toys</option>
          </select>
        </div>
                    <div className='md:flex gap-3'>
                    <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="price">
            Price:
          </label>
          <input
            defaultValue={price}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type="number"
            id="price"
            name="price"
          />
        </div>
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="quantity">
          Available quantity:
          </label>
          <input
            defaultValue={quantity}
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
            defaultValue={rating}
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
            defaultValue={picture}
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
                                rows={4}
                                defaultValue={description}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>

        </div>
        </div>
    );
};

export default UpdateAToy;