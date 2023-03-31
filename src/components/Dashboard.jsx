import React, { useState } from "react";


const Dashboard = () => {
    const [items, setItems] = useState([
        { id: 1, name: "Item 1", price: 10 },
        { id: 2, name: "Item 2", price: 20 },
        { id: 3, name: "Item 3", price: 30 },
    ]);

    const [totalMoney, setTotalMoney] = useState(100);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => setSearchTerm(event.target.value);

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
          className="bg-cover bg-center h-screen"
          style={{
            background: "url('https://jooinn.com/images/water-sun-background-5.jpg') no-repeat center center fixed",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backgroundSize: "cover",
          }}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-gray-200 shadow-md rounded-md overflow-hidden">
                    <div className="flex justify-between px-4 py-2 border-b border-gray-200">
                        <h1 className="text-2xl font-bold">Total Money: ${totalMoney}</h1>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-300 rounded-md px-4 py-2 w-48"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="flex flex-wrap p-4">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-md p-4 rounded-md m-2 flex-1"
                            >
                                <h2 className="text-lg font-bold">{item.name}</h2>
                                <p className="text-gray-600">${item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
