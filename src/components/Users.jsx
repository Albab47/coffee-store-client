import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers)

  const handleDelete = (id) => {
    // get confirmation before delete
    fetch(`https://coffee-store-server-ten-theta.vercel.app/users/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0) {
            console.log('deleted successfully');
            // remove user from ui
            const remaining = users.filter(user => user._id !== id);
            setUsers(remaining)
        }  
    })
  }

  return (
    <div>
      <h2>Users: {loadedUsers.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last logged</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                    <button onClick={() => handleDelete(user._id)} className="btn btn-sm bg-red-500 text-white">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
