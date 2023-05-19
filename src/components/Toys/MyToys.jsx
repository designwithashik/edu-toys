import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:3000/toys?email=${user.email}`)
            .then(res => res.json())
        .then(data=>setToys(data))
    }, [control])

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/toy/${id}`, {
            method: 'DELETE',
        
        })
            .then(res => res.json())
            .then(data => {
            setControl(!control)
        })

    }
    console.log(toys)
    return (
        <div>
            <h2>My Toys</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* toys row */}
                        {toys.map(toy => {
        return  <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={toy?.picture} />
                </div>
              </div>
              <div>
                          <div className="font-bold">{toy.name}</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br/>
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td>Purple</td>
          <td><button onClick={()=>handleDelete(toy._id)}>Delete</button></td>
          <th>
            <Link to={`/update-toy/${toy._id}`}><button className="btn btn-ghost btn-xs">Update details</button></Link>
          </th>
        </tr>
      })}
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyToys;