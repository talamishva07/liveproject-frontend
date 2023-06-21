import React from "react";

const Blog = ({ data }) => {
    return (
        <div>
            <div className="card" style={ { width: "18rem" } }>
                <img className="card-img-top" src={ `http://localhost:7812/public/${data.filepath}` } alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">{ data.titel }</h4>
                    <p className="card-text">{ data.Description }</p>
                    <p className="card-text">{ data.type }</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>



    )
}
export default Blog