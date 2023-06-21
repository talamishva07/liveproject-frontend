import React, { useState } from "react";
import '../componet/Addblog.css'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Addblog = () => {

    let navi = useNavigate();
    const location = useLocation();
    // console.log('location:::', location.search.split('?')[1]);
    useEffect(() => {
        const id = location.search.split('?')[1];
        const editData = async () => {
            fetch(`http://localhost:7812/api/getBlog`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ my_id: id })
            }).then((res) => res.json())
                .then((data) => {
                    console.log('data:::', data);
                    setData({
                        ...data,
                        titel: data.datas.titel,
                        Description: data.datas.Description,
                        type: data.datas.type,
                    })

                })
                .catch((error) => console.log('error::: ', error))
        }
        editData();

    }, [])
    const [data, setData] = useState({
        titel: "",
        Description: "", 
        type: "",
    })
    const [file, setFile] = useState();
    console.log('file::: ', file);

    const handleChangeValue = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const saveData = () => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('data', JSON.stringify(data));

        fetch("http://localhost:7812/api/createBlog", {
            method: "POST",
            body: formData
        }).then((res) => res.json())
            .then((data) => {
                console.log('data::: ', data.responce);
                if (data.responce === "sended") {
                    toast("Blog data added")
                    navi('/');
                }
                else {
                    navi('/error')
                }
            })
            .catch(err => console.log('err::: ', err))
    }


    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div style={ { width: "500px", margin: "auto" } }>
                <h4 className="mb-3">Add Blog</h4>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="blog-title" className="form-label">Blog title</label>
                        <input
                            type="text"
                            className="form-control"
                            name='titel'
                            onChange={ handleChangeValue }
                            value={ data.titel }
                            required="" />
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="blog-des" className="form-label">Blog Description</label>
                        <div className="input-group has-validation">
                            <textarea
                                name='Description'
                                onChange={ handleChangeValue }
                                value={ data.Description }
                                type="text" className="form-control" id="blog-des" placeholder="Blog Description" required=""></textarea>
                            <div className="invalid-feedback">
                                Your blog-des is required.
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <label htmlFor="blog-type" className="form-label">Blog type</label>
                        <select name='type'
                            onChange={ handleChangeValue }
                            value={ data.type } className="form-select" id="blog-type" required>
                            <option value="">Choose...</option>
                            <option>Food</option>
                            <option>Gameing</option>
                            <option>Traveling</option>
                            <option>Finace</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select option.
                        </div>
                    </div>
                    <div className="col-6">
                        <label htmlFor="formFile" className="form-label">Default file input example</label>
                        <input onChange={ (e) => setFile(e.target.files[0]) } className="form-control" type="file" accept='image/jpg, image/png, image/jpeg' id="formFile" name="image" />
                    </div>
                </div>
                <hr />
                <br />
                <br />
                <button onClick={ saveData } className="w-100 btn btn-primary btn-lg" type="submit">Add Blog</button>
            </div>
        </div>
    )

}
export default Addblog