/* eslint-disable react/prop-types */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Create = (props) => {
    const { customerList, setCustomerList, modalType } = props;
    const city = [
        { id: 1, name: "Hà Nội" },
        { id: 2, name: "TP HCM" },
        { id: 3, name: "Huế" },
        { id: 4, name: "Đà Nẵng" }
    ]
    const [customer, setCustomer] = useState({});

    const handleInput = (e) => {
        setCustomer(prev => ({
            ...prev,
            id: uuidv4().slice(0, 8),
            [e.target.name]: e.target.value,
        }))
    }
    const handleCreate = () => {
        setCustomerList([
            ...customerList,
            customer
        ])
    }

    return (
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
                        <input type="text" name="fullname" id="fulname"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email"
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="row ms-3 m-2">
                    <div className="col-lg-6">
                        <label htmlFor="">Phone</label>
                        <input type="number" name="phone" id="phone"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="">Address</label>
                        <input type="text" name="address" id="address"
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
                                        id="gender"
                                        value="male"
                                        onChange={handleInput}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="gender"
                                        defaultChecked=""
                                        value="female"
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
                    <button className="btn btn-primary" onClick={handleCreate}>Save changes</button>
                </div>
            </div>
        </div>
    )
}
export default Create;

