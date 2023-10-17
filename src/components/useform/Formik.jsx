import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
const UseFormik = () => {
    const schema = Yup.object({
        name: Yup.string()
            .required("Vui Lòng Nhập Tên")
            .min(5, "Tên Phải Từ 5 Ký Tự")
    })
    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className="row col-md-4" id="useFormik">
            <h1 className="text-center text-primary mt-4">Register Formik</h1>
            <Formik
                initialValues={{
                    name: "",
                    class: "",
                    age: ""
                }}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {/* {({ errors, touched }) => ( */}
                <Form>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="label-form me-2">Name </label>
                        <Field type="text" name="name" id="name" className="form-control" />
                        <ErrorMessage name="name" component="span" className="text-danger" />
                        {/* {errors.name && touched.name && <span className="text-danger">{errors.name}</span>} */}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="label-form me-2">Class </label>
                        <Field type="text" name="class" id="class" className="form-control " />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="label-form me-2">Age </label>
                        <Field type="number" name="age" id="age" className="form-control" />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-success me-3">Register</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                </Form>
                {/* )} */}

            </Formik>
        </div>
    )
}
export default UseFormik;