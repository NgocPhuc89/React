
import { useForm } from 'react-hook-form'
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Useform = () => {
    const [studentList, setStudentList] = useState([{
        id: uuidv4().slice(0, 8),
        name: "phuc",
        class: "C04",
        age: 34
    }]);
    const schema = Yup.object({
        name: Yup.string()
            .required("Vui Lòng Nhập Tên")
            .min(5, "Tên Phải Từ 5 Ký Tự"),
        age: Yup.number()
            .required("Vui Lòng Nhập Tuổi")
            .positive()
            .typeError("Vui Lòng Nhập Tuổi")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const submitForm = (data) => {
        console.log(data);
        const student = { ...data, id: uuidv4().slice(0, 8) }
        setStudentList([
            ...studentList,
            student
        ])
        reset();
    }
    console.log(studentList);

    return (
        <>
            <div className='row col-md-4 me-5 ' id='useForm'>
                <h1 className='text-center text-primary mt-4'>Register useForm</h1>
                <form action="" onSubmit={handleSubmit(submitForm)}>
                    <div className='form-group mb-3'>
                        <label className='label-form me-2'>Name</label>
                        <input type="text" name="name" id="" className='form-control'
                            {...register('name')}
                        />
                        <span className='text-danger'>{errors.name?.message}</span>
                    </div>
                    <div className='form-group mb-3'>
                        <label className='label-form me-2'>Class</label>
                        <input type="text" name="class" id="" className='form-control'
                            {...register('class')}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label className='label-form me-2'>Age</label>
                        <input type="number" name="age" id="" className='form-control'
                            {...register('age')}
                        />
                        <span className='text-danger'>{errors.age?.message}</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-success me-3'>Register</button>
                        <button type='reset' className='btn btn-danger'>Cancel</button>
                    </div>
                </form>
            </div>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Age</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.class}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <i className='fa fa-pen btn btn-primary'></i>
                                    </td>
                                    <td>
                                        <i className='fa fa-trash btn btn-danger'></i>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Useform;
