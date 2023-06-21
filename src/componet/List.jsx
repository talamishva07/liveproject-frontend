
import React, { useState, useEffect } from "react";
import Style from '../componet/List.module.css'
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";


const List = () => {
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

    const deleteData = async (id) => {
        console.log(id);
        fetch(`http://localhost:7812/api/delete/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }).then((res) => res.json())
            .then((data) => {
                if (data.message === "the  blog is remove") {

                    const delete_data = blogDatas.filter((ele, index) => ele._id !== id);
                    setBlogDatas(delete_data)
                    toast.error("the data was delete!", {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 2000
                    });
                }
            })
            .catch((error) => console.log('error::: ', error))
    }




    return (
        <div>

            <center>
                <table>
                    <thead>
                        <tr  >
                            <th>INDEX</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th colSpan={ 2 }><center>button</center></th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            blogDatas.slice(0, 20).map((data, index) => {
                                return (
                                    <tr key={ index }>
                                        <td>{ index + 1 }</td>
                                        <td>{ data.titel }</td>
                                        <td>{ data.type }</td>
                                        <td>{ data.Description }</td>
                                        <td><img src={ `http://localhost:7812/public/${data.filepath}` } alt="ngn" height={ 50 } width={ 50 } /></td>
                                        <td>
                                            <Link to={ `/addblog?${data._id}` }>
                                                <button className={ Style.button }>edit</button>
                                            </Link>

                                        </td>
                                        <td> <button className={ Style.delet } onClick={ () => deleteData(data._id) }>delete</button></td>
                                    </tr>

                                )


                            }
                            )
                        }
                    </tbody>



                </table>
            </center>
        </div>
    )
}
export default List