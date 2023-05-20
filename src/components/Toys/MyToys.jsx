import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:3000/toys?email=${user.email}`)
            .then(res => res.json())
          .then(data => {
            setToys(data)
          })
    }, [control])

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/toy/${id}`, {
          method: 'DELETE',
      
      })
          .then(res => res.json())
          .then(data => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          setControl(!control)
      })

        
      }
    })
    


       

    }
    
    return (
      <div className='overflow-x-scroll lg:overflow-hidden'>
      <h2 className="text-3xl  text-center font-bold mb-4 text-[#FF1276]">My Toys</h2>
        
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Toy Name</th>
        <th>Seller</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody className=''>
      {/* toys row */}
                        {toys.map(toy => {
        return  <tr>
         
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
            <p className='text-sm'>
            Name: {toy?.sellerName} <br />
                Email: {toy?.sellerEmail}
                </p>
          </td>
            <td>{toy?.subCategory}</td>
            <td>{toy?.price}$</td>
            <td>{toy?.quantity}</td>
          <td>
            <Link to={`/update-toy/${toy._id}`}><button className="btn btn-accent btn-xs">Update</button></Link>
          </td>
          <td><button onClick={()=>handleDelete(toy._id)} className='btn btn-sm btn-error'>X</button></td>
        </tr>
      })}
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyToys;