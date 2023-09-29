import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        // Fetch data from the API endpoint
        axios
            .get("https://api.example.com/your-endpoint")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleItemClick = (item) => {
        // Toggle selected item
        setSelectedItem(selectedItem === item ? null : item);
    };

    return (
        <div className="App">
            <h1>API Data Display</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <div onClick={() => handleItemClick(item)}>
                            {item.name}
                            {selectedItem === item && (
                                <div>
                                    <p>Details:</p>
                                    <p>{item.description}</p>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
