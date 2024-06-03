import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import { User } from "../../types/User";

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-8 hover:bg-gradient-to-l rounded-md mb-8">
      <h2 className="text-2xl font-bold mb-6">User List</h2>

      <div className="grid grid-cols-4 gap-8 font-bold">
        <div>Name</div>
        <div>Lastname</div>
        <div>Email</div>
        <div>Role</div>
      </div>

      {users.map(({ id, firstName, lastName, email, role }) => (
        <div key={id} className="grid grid-cols-4 gap-8">
          <div>{firstName}</div>
          <div>{lastName}</div>
          <div>{email}</div>
          <div>{role}</div>
        </div>
      ))}
    </div>
  );
};
