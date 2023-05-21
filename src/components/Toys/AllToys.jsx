import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle';

const AllToys = () => {
  const { user, } = useContext(AuthContext)
  const [toys, setToys] = useState([])
  const [name, setName] = useState('')
  
  useEffect(() => {
    fetch(`http://localhost:3000/toy?name=${name}`)
        .then(res => res.json())
      .then(data => {
        setToys(data)
      })
  }, [name])
    console.log(toys)
  const handleSearch = (event) => {
    event.preventDefault()
    const name = event.target.name.value;
    setName(name)
    }

    
    
    return (
      <div className='overflow-x-scroll lg:overflow-hidden'>
      <PageTitle>All Toys</PageTitle>
      <h2 className="text-3xl text-[#FF1276] text-center font-bold mb-4">All Toys</h2>
      <form onSubmit={handleSearch} className="flex justify-center  my-5"><input type="text" placeholder="Search A Toy" name='name' className="input w-2/3 input-bordered" />     <button type='submit' className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
</form>

            <table className="table w-full ">
    {/* head */}
    <thead>
      <tr>
        <th>Toy Name</th>
        <th>Seller</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* toys row */}
                        {toys.map(toy => {
        return  <tr key={toy._id}>
         
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={toy?.picture} />
                </div>
              </div>
              <div>
                          <div className="font-bold">{toy.name}</div>
               
              </div>
            </div>
          </td>
          <td>
                {toy?.sellerName}
          </td>
            <td>{toy?.subCategory}</td>
            <td>{toy?.price}$</td>
            <td>{toy?.quantity}</td>
          <td>
            <Link to={`/toy/${toy._id}`}><button className="btn btn-accent btn-xs">View details</button></Link>
          </td>
        </tr>
      })}
    </tbody>
    
  </table>

        </div>
    );
};

export default AllToys;