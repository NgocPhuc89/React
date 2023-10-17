/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Modal } from "bootstrap";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

const Customer = () => {
    const [customerList, setCustomerList] = useState([
        {
            id: uuidv4().slice(0, 8),
            fullname: "phuc",
            email: "phuc@gmail.com",
            phone: "0123456789",
            gender: "male",
            city: "hue",
            address: "phan chu trinh"
        }
    ]);
    const { register, handleSubmit, reset } = useForm();
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});

    const handleEdit = (id) => {
        console.log(id);
    }
    const handleDelete = (id) => {
        alert("delete " + id)
        const list = customerList.filter((item) => item.id != id)
        setCustomerList(list)
    }
    const handleCreate = (data) => {
        console.log(data);
        const customer = {
            ...data,
            id: uuidv4().slice(0, 8)
        }
        setCustomerList([
            ...customerList,
            customer
        ])
        reset();
        document.getElementById('exampleModal').click();
    }

    return (
        <div>
            <h1 className="text-center text-danger">Customer List</h1>
            <div data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <button className="btn btn-primary">Create</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Address</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerList.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.fullname}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.city}</td>
                                <td>{item.address}</td>
                                <td onClick={() => handleEdit(item.id)}>
                                    <i className="fa fa-pen btn btn-primary" />
                                </td>
                                <td onClick={() => handleDelete(item.id)}>
                                    <i className="fa fa-trash btn btn-danger" />
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <form onSubmit={handleSubmit(handleCreate)}>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Modal title
                                </h5>
                            </div>
                            <div className="row ms-3 m-2 ">
                                <div className="col-lg-6">
                                    <label htmlFor="">FullName</label>
                                    <input type="text" name="" id=""
                                        {...register('fullname')} />
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="">Email</label>
                                    <input type="email" name="" id=""
                                        {...register('email')} />
                                </div>
                            </div>
                            <div className="row ms-3 m-2">
                                <div className="col-lg-6">
                                    <label htmlFor="">Phone</label>
                                    <input type="number" name="" id=""
                                        {...register('phone')} />
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="">Address</label>
                                    <input type="text" name="" id=""
                                        {...register('address')} />
                                </div>
                            </div>
                            <div className="row ms-3 ">
                                <div className="col-lg-6">
                                    <label htmlFor="">City</label>
                                    <select
                                        className="form-select"
                                        multiple=""
                                        aria-label="multiple select example"
                                        {...register('city')}
                                    >
                                        <option defaultValue="">-Vui Lòng Chọn-</option>
                                        <option value='Hà Nội'>Hà Nội</option>
                                        <option value='TP HCM'>TP HCM</option>
                                        <option value='Huế'>Huế</option>
                                    </select>
                                </div>
                                <div className="col-lg-6 mb-5">
                                    <label htmlFor="" className="">Gender
                                        <div className="d-flex">
                                            <div className="form-check me-3">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                    value="male"
                                                    {...register('gender')}
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                    defaultChecked=""
                                                    value="female"
                                                    {...register("gender")}
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2"> Female</label>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Customer;