/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Create = (props) => {
    const { customerList, setCustomerList, modalType, editCustomer } = props;
    const city = [
        { id: 1, name: "Hà Nội" },
        { id: 2, name: "TP HCM" },
        { id: 3, name: "Huế" },
        { id: 4, name: "Đà Nẵng" }
    ]

    const [customer, setCustomer] = useState({
        id: uuidv4().slice(0, 8),
        fullname: "",
        email: "",
        phone: "",
        gender: "",
        city: "",
        address: ""
    });

    useEffect(() => {
        setCustomer(editCustomer)
    }, [editCustomer])

    const handleInput = (e) => {
        modalType === 'create' ? (
            setCustomer(prev => ({
                ...prev,
                id: uuidv4().slice(0, 8),
                [e.target.name]: e.target.value,
            }))) :
            setCustomer(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }))
    }
    const handleSave = () => {
        if (modalType === 'create') {
            setCustomerList([
                ...customerList,
                customer
            ]),
                setCustomer({
                    fullname: "",
                    email: "",
                    phone: "",
                    gender: "",
                    city: "",
                    address: ""
                })
        }
        else if (modalType === 'edit') {
            setCustomerList(prev => {
                const updatedList = prev.map(item => {
                    if (item.id === customer.id) {
                        return customer;
                    }
                    return item;
                });
                return updatedList;
            });
        }
    }

    return (
        <div
            className="modal fade"
            id={modalType === "create" ? 'createModal' : 'editModal'}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {modalType === "create" ? "Create Customer" : "Edit Customer"}
                        </h5>
                    </div>
                    <div className="row ms-3 m-2 ">
                        <div className="col-lg-6">
                            <label htmlFor="">FullName</label>
                            <input type="text" name="fullname" id="fullname"
                                value={customer.fullname}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="email"
                                value={customer.email}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className="row ms-3 m-2">
                        <div className="col-lg-6">
                            <label htmlFor="">Phone</label>
                            <input type="text" name="phone" id="phone"
                                value={customer.phone}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="">Address</label>
                            <input type="text" name="address" id="address"
                                value={customer.address}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                    <div className="row ms-3 ">
                        <div className="col-lg-6">
                            <label htmlFor="">City</label>
                            <select
                                className="form-select"
                                multiple=""
                                aria-label="multiple select example"
                                id="city"
                                name="city"
                                value={customer.city}
                                onChange={handleInput}
                            >
                                <option defaultValue="">-Vui Lòng Chọn-</option>
                                {
                                    city.map(item => (
                                        <option value={item.name} key={item.id}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <label htmlFor="" className="">Gender
                                <div className="d-flex">
                                    <div className="form-check me-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="genderMale"
                                            checked={customer.gender === 'male'}
                                            value='male'
                                            onChange={handleInput}
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="genderFemale"
                                            checked={customer.gender === 'female'}
                                            defaultValue='female'
                                            onChange={handleInput}
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
                        <button className="btn btn-primary" onClick={handleSave}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;

