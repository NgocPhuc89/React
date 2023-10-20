/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Modal } from "bootstrap";
import { v4 as uuidv4 } from 'uuid';
import Create from "./Create";

const Customer = () => {
    const [customerList, setCustomerList] = useState([
        {
            id: uuidv4().slice(0, 8),
            fullname: "phuc",
            email: "phuc@gmail.com",
            phone: "0123456789",
            gender: "male",
            city: "Huế",
            address: "phan chu trinh"
        }
    ]);
    const [modalType, setModalType] = useState('create');
    const [editCustomer, setEditCustomer] = useState({});

    const handleCreate = () => {
        setModalType('create')
    }

    const handleEdit = (index) => {
        setModalType('edit');
        setEditCustomer(customerList[index]);
    }
    const handleDelete = (id) => {
        alert("delete" + id)
        const list = customerList.filter((item) => item.id != id)
        setCustomerList(list)
    }
    console.log(editCustomer);

    return (
        <div>
            <h1 className="text-center text-danger">Customer List</h1>
            <div >
                <button className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={modalType === "create" ? '#createModal' : '#editModal'}
                    onClick={handleCreate}
                >
                    Create
                </button>
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
                        customerList.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.fullname}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.city}</td>
                                <td>{item.address}</td>
                                <td
                                    data-bs-toggle="modal"
                                    data-bs-target={modalType === "create" ? '#createModal' : '#editModal'}
                                    onClick={() => handleEdit(index)}>
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
            <Create customerList={customerList}
                setCustomerList={setCustomerList}
                modalType={modalType}
                editCustomer={editCustomer}
            />
        </div >
    )
}
export default Customer;