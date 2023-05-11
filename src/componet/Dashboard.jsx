import React, { useState, useEffect } from "react";
import '../componet/Dashboard.css';
import { Link } from "react-router-dom";
import Blog from "./Blog";


const Dashboard = () => {

    const [blogDatas, setBlogDatas] = useState([]);
    console.log('blogdatas:::', blogDatas);


    useEffect(() => {
        const fetchApi = async () => {
            fetch(`http://localhost:7812/api/getAll`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json())
                .then((data) => {
                    setBlogDatas(data.dataAdd)
                })
                .catch((error) => console.log('error::: ', error))
        }
        fetchApi();
    }, [])



    return (
        <div className="content-area">

            <div className="Hero">

                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Welcome to our Website</h1>
                        <p>
                            As you’ll see in the list below, every language has its own variation of how it explains and defines what wanderlust is. In English, wanderlust means to have a strong desire for or impulse to travel, wander and explore the world.
                        </p>
                    </div>
                    <Link to="/learn">
                        <button className="hero-btn">Learn More</button>
                    </Link>
                </div>

            </div>
            <br />
            <center><h1>Blogs</h1></center>
            <div style={ { display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" } }>
                {
                    blogDatas.slice(0, 20).map((data, index) => (
                        <div style={ { margin: "10px 0" } } key={ index }  >
                            <Blog data={ data } />

                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Dashboard;