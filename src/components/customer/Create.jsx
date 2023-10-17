import { useForm } from "react-hook-form";

const Create = () => {
    const { register } = useForm();
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Create Customer
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
    )
}
export default Create;