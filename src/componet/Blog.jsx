import React from "react";

const Blog = ({ data }) => {
    return (

        <div className="card" style={ { width: "20rem", displaywrap: "wrap" } }>
            <img
                src={ data.filepath }
                className="d-block mx-lg-auto img-fluid"
                lt="Bootstrap Themes"
                loading="lazy" />
            <div className="card-body">
                <h2 className="card-title">{ data.titel }</h2>
                <p className="card-text">{ data.type }</p>
                <p className="card-text">{ data.Description }</p>
                <a href="#" className="btn btn-primary">Go To Blog</a>
            </div>
        </div>

    )
}
export default Blog