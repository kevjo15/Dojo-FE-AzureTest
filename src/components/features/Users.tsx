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

      <div className="grid grid-cols-3 gap-8 font-bold">
        <div>Name</div>
        <div>Email</div>
        <div>Company</div>
      </div>

      {users.map(({ id, name, email, company }) => (
        <div key={id} className="grid grid-cols-3 gap-8">
          <div>{name}</div>
          <div>{email}</div>
          <div>{company.name}</div>
        </div>
      ))}
    </div>
  );
};
