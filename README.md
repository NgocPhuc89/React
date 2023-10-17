

# React Hook Form - xử lý form dễ dàng hơn bao giờ hết

## ** USEFORM là gì
`Hook "useForm"` được cung cấp bởi React Hook Form để giúp quản lý trạng thái và xử lý các biểu mẫu. Nó hỗ trợ việc xác thực dữ liệu, theo dõi trạng thái của các trường nhập liệu, và thu thập các giá trị đã nhập từ biểu mẫu
### - Cài đặt

### npm
```java
npm install react-hook-form
```
### yarn
```java
yarn add react-hook-form
```
### - Bằng cách gọi useForm, bạn sẽ nhận được các phương thức sau
```java
register, unregister, errors, watch, handleSubmit 
reset, setError, clearError, setValue, getValues
triggerValidation, control and formState
```
### - useForm cũng có các đối số tùy chọn. Ví dụ sau thể hiện giá trị mặc định của tất cả các tùy chọn
```java
const { register } = useForm({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  validationSchema: undefined,
  validationResolver: undefined,
  validationContext: undefined,
  validateCriteriaMode: "firstErrorDetected",
  submitFocusError: true,
  nativeValidation: false, 
})
```
### - Để xử lý form đơn giản thì ta chỉ dùng vài phương thức đơn giản
```java
const { register, handleSubmit } = useForm();
const submitForm = (data) => {
        console.log(data);
    }
```
### - Dưới đây là cách sử dụng cơ bản của useForm Hook, hãy xem một ví dụ thực tế
```java
return (
    <div className='container d-flex justify-content-center mt-5'>
      <div className='row col-md-4 ' id='registerForm'>
        <h1 className='text-center text-danger mt-4'>Register</h1>
        <form action="" onSubmit={handleSubmit(submitForm)}>
          <div className='form-group mb-3'>
            <label className='label-form me-2'>Name</label>
            <input type="text" name="name" id="" className='form-control'
              {...register("name")} />
          </div>
          <div className='form-group mb-3'>
            <label className='label-form me-2'>Class</label>
            <input type="text" name="class" id="" className='form-control'
              {...register("class")}
            />
          </div>
          <div className='form-group mb-3'>
            <label className='label-form me-2'>Age</label>
            <input type="number" name="age" id="" className='form-control'
              {...register("age")}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button className='btn btn-success me-3'>Register</button>
            <button className='btn btn-danger'>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
```
### - Sau khi thêm thông tin vào ô input và submit ta nhận lại giá trị là 1 object
```java
{name: "...",
 class: "...",
  age: "..."}
```

## ** Formik là gì ?
Formik đơn giản chỉ là một thư viện nhỏ giúp chúng ta giải quyết vấn đề rắc rối chính sau đây

`Nhận giá trị trong và ngoài state form`
`Validate giá trị và đưa ra lỗi`
`Xử lý việc submit form`

### - Cài đặt
### npm
```java
npm i formik
```
### yarn
```java
yarn add formik
```
### - Import Các Component Của Formik
```java
import { Formik, Field, Form, ErrorMessage } from 'formik';
```
###  - Khai báo các prop của Formik cần xử lý form
```java
<Formik
//cần truyền initial values vào prop initialValues . Ví dụ :
  initialValues={{
    name: "",
    class: "",
    age: ""
  }}
//cần truyền validation schema (nếu có) vào prop validationSchema 
  validationSchema={/* validation schema */}
//cần truyền vào hàm handleSubmit để xử lý submit form 
  onSubmit={/*handleSubmit*/}
>
</Formik>
```
### - Trong đó
`initialValues`: là đối tượng chứa giá trị khởi tạo ban đầu của form. Trong trường hợp này, form của chúng ta có 3 trường là name, email, password, ta sẽ khởi tạo giá trị ban đầu của chúng bằng { name: '', email: '', password: '' }

`validationSchema`: là một object sử dụng để validate các trường input. Bạn có thể sử dụng thư viện Yup để định nghĩa các schema validation, như Yup.string().required('Vui lòng nhập tên').

`onSubmit`: là một hàm được gọi khi form được submit. Giá trị được truyền vào là object chứa giá trị của các trường input

### - Tiếp theo, bên trong component Formik, bạn cần truyền vào children là component Form và các trường input Field của form đó.
```java
<Form>
  <div className="mb-3">
    <label htmlFor="" className="label-form mb-2">Name </label>
    <Field type="text" name="name" id="name" className="form-control" />
    <ErrorMessage name="name" component="span"/>
  </div>
  <div className="mb-3">
    <label htmlFor="" className="label-form mb-2">Class </label>
    <Field type="text" name="class" id="class" className="form-control " />
    <ErrorMessage name="class" component="span"/>
  </div>
  <div className="mb-3">
    <label htmlFor="" className="label-form mb-2">Age </label>
    <Field type="number" name="age" id="age" className="form-control" />
    <ErrorMessage name="age" component="span"/>
  </div>
  <div className="d-flex justify-content-center mt-3">
    <button className="btn btn-success me-3">Register</button>
    <button className="btn btn-danger">Cancel</button>
  </div>
</Form>
```
### - Trong đó
`Form`: là một component được cung cấp bởi Formik, dùng để bọc các trường input của form.

`Field`: là một component được cung cấp bởi Formik, dùng để render các trường input của form. Trong đó, bạn cần truyền vào prop` name` để Formik có thể quản lý giá trị của trường input này. Bạn cũng có thể sử dụng các props khác như `type`, `placeholder`, và `onChange` để tùy chỉnh

`ErrorMessage` : Các lỗi hợp lệ hóa và thông báo lỗi sẽ được hiển thị tự động thông qua ErrorMessage.

## - Validation cho form ta đi tìm hiểu về RESOLVERS YUP 

#### - YUP là gì ?
`Yup là một Javascript object schema validator(kiểm tra mô phỏng lược đồ đối tượng trong javascript)`

#### - Giúp giải quyết những vấn đề sau 
`Nhận giá trị trong và ngoài state form`
`Validate giá trị và đưa ra lỗi`
`Xử lý việc submit form`

#### - Cài đặt Yup vào dự án 
```java
npm install @hookform/resolvers yup
```

#### - import vào component
```java
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
```

### * YUP Validation Schema cho useForm *
#### - Thêm đối số vào useform . Thêm dòng thông báo để hiển thị lỗi cho người dùng
```java
const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
        
      <input {...register("age")} />
      <p>{errors.age?.message}</p>
      
      <input type="submit" />
    </form>
  );
```

Vậy ?. trong trường hợp trên có tác dụng gì? .Không có thì như thế nào?

### * YUP Validation Schema cho Formik *

#### - import vào component
```java
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
```

#### - ví dụ : 
```java
const schema = Yup.object({
        name: Yup.string()
            .required("Vui Lòng Nhập Tên")
            .min(5, "Tên Phải Từ 5 Ký Tự")
    })
const handleSubmit = (values) => {
        console.log(values);
    }    
<Formik
//truyền initial values vào prop initialValues . Ví dụ :
  initialValues={{
    name: "",
    class: "",
    age: ""
  }}
//truyền validation schema vào prop validationSchema 
  validationSchema={schema}
//truyền vào hàm handleSubmit để xử lý submit form 
  onSubmit={handleSubmit}
>
</Formik>
```

#### - Giao diện code hoàn chỉnh
```java
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
  <div className="container d-flex justify-content-center mt-5 ">
    <div className="row col-md-4" id="useFormik">
      <h1 className="text-center text-primary">UseFormik</h1>
      <Formik
        initialValues={{
          name: "",
          class: "",
          age: ""
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="" className="label-form mb-2">Name </label>
            <Field type="text" name="name" id="name" className="form-control" />
            <ErrorMessage name="name" component="span" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="label-form mb-2">Class </label>
            <Field type="text" name="class" id="class" className="form-control " />
            <ErrorMessage name="class" component="span" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="label-form mb-2">Age </label>
            <Field type="number" name="age" id="age" className="form-control" />
            <ErrorMessage name="age" component="span" className="text-danger" />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-success me-3">Register</button>
            <button className="btn btn-danger">Cancel</button>
          </div>
        </Form>
      </Formik>
    </div>
  </div>
)
}
export default UseFormik;
```

# Thanks