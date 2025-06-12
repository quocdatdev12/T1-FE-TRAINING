import React, { useMemo, useState } from 'react'

const generateUsers = () => 
    Array.from({ length: 10000 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
    }));

export default function UserFilter() {
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");
    const users = useMemo(() => generateUsers(), []);

    const fiteredUsers = useMemo(() => {
        console.log(" Filtering.........");
        return users.filter((u) => 
            u.name.toLowerCase().includes(search.toLowerCase())
        );
        
    }, [users, search]);

console.log("re-render component");

  return (
    <div>
        <h2>Lọc người dùng (useMemo)</h2>
        <input placeholder='Tìm tên...' value={search} onChange={(e) => setSearch(e.target.value)} />
        <p>Hiển thị {fiteredUsers.length} người dùng</p>
        {count}
        <button onClick={() => setCount(count + 1)} >Tăng</button>
    </div>
  )
}

