import React, { useEffect, useState } from 'react';

function AdminUserList() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch('/api/admins')
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);

  return (
    <div>
      <h2>Admin List</h2>
      {/* Render list */}
    </div>
  );
}

export default AdminUserList;
