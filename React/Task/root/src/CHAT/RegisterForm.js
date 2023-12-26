import React, { useEffect, useState } from 'react';
import { useForm, watch } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import img from './images/bg-heading-03.jpg'


const RegisterForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, watch } = useForm();
    const [localdata, setLocalData] = useState([]);


    useEffect(() => {
        const localJson = JSON.parse(localStorage.getItem("user"))

        if (localJson) {
            setLocalData(localJson)
        }
    }, [])

    const onSubmit = (data) => {
        console.log(data);
        const updatedData = [...localdata, data];

        setLocalData(updatedData);
        localStorage.setItem("user", JSON.stringify(updatedData));

        navigate('/login');
    };



    return (

        <div className='w-100 container-fluid  regis-div '>
            <div className='regis-sub-div row  '>
                <div className='col-6 image-div   p-0'>
                    <img className='col-12' src={img} ></img>
                </div>

                <form className='col-6 content-div  py-2 px-4' onSubmit={handleSubmit(onSubmit)}>

                    <div className='mt-2 text-light mb-4'>
                        <h2>Register</h2>
                    </div>
                    <div className='mb-3'>
                        <input placeholder='enter your firstname...' {...register("firstName", { required: true, maxLength: 20 })} className="form-control" id="" />
                        {errors.firstName && <span>First name is required</span>}
                    </div>
                    <div className='mb-3'>
                        <input placeholder='enter your lastname...' {...register("lastName", { required: true, maxLength: 10, pattern: /^[A-Za-z]+$/i })} className="form-control" id="" />
                        {errors.lastName && <span>Last name is required</span>}
                    </div>
                    <div className='mb-3'>
                        <input placeholder='enter your username...' {...register("username", { required: true, maxLength: 20 })} className="form-control" />
                        {errors.username && <span>{errors.username.message}</span>}

                    </div>
                    <div className='mb-3'>
                        <input placeholder='enter email...' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="form-control" id="" />
                        {errors.email && <span>Valid email is required</span>}
                    </div>
                    <div className='mb-3'>
                        <input placeholder='enter password...' type="password" {...register("password", { required: true, minLength: 6 })} className="form-control" id="" />
                        {errors.password && <span>Password must be at least 6 characters long</span>}
                    </div>
                    <div className='mb-4'>
                        <input placeholder='enter confirm password...' type="password" {...register("confirmPassword", {
                                   required: true,
                                    validate: value => value === watch("password") || "Passwords do not match"
                                })} className="form-control " id="" />
                                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                    </div>
                    <div className='col-12 mb-3'>
                        <button type="submit" className="col-12 btn btn-outline-primary"  value="Submit" disabled={isSubmitting || !isValid} >Register</button>
                    </div>
                    <div>
                    <p className='text-light'>Already Have an account ? <spam><Link to={"/login"}>Login</Link></spam></p>
                    </div>
                </form>



            </div>
            
        </div>
        // <div className='RegisForm'>
        //     <div className='main-div'>

        //         <form onSubmit={handleSubmit(onSubmit)}>
        //             <h2>RegisterForm</h2>
        //             <div className='row'>
        //                 <div className='col-6'>
        //                     <div className='label-div'>
        //                         <label>First Name:</label>
        //                     </div>
        //                     <div className='input-div'>
        //                         <input placeholder='enter your firstname...' {...register("firstName", { required: true, maxLength: 20 })} />
        //                         {errors.firstName && <span>First name is required</span>}
        //                     </div>
        //                 </div>
        //                 <div className='col-6'>
        //                     <div className='label-div'>
        //                         <label>Last Name:</label>
        //                     </div>
        //                     <div className='input-div'>
        //                         <input placeholder='enter your lastname...' {...register("lastName", { required: true, maxLength: 10, pattern: /^[A-Za-z]+$/i })} />
        //                         {/* <input {...register("lastName", { required: true, maxLength: 20 })} /> */}
        //                         {errors.lastName && <span>Last name is required</span>}
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className='row'>
        //                 <div className='col-6'>
        //                     <div className='label-div'>
        //                         <label>Username:</label>
        //                     </div>
        //                     <div className='input-div'>
        //                         <input placeholder='enter your username...' {...register("username", { required: true, maxLength: 20 })} />
        //                         {errors.username && <span>{errors.username.message}</span>}
        //                     </div>
        //                 </div>
        //                 <div className='col-6'>
        //                     <div className='label-div'>
        //                         <label>Email:</label>
        //                     </div>
        //                     <div className='input-div'>
        //                         <input placeholder='enter email...' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        //                         {errors.email && <span>Valid email is required</span>}
        //                     </div>

        //                 </div>

        //             </div>

        //             <div className='row'>
        //                 <div className='col-6'>
        //                     <div className='label-div'>
        //                         <label>Password:</label>
        //                     </div>
        //                     <div className='input-div'>
        //                         <input placeholder='enter password...' type="password" {...register("password", { required: true, minLength: 6 })} />
        //                         {errors.password && <span>Password must be at least 6 characters long</span>}
        //                     </div>
        //                 </div>
        //                 <div className='col-6'>
        //                     <div className='label-div'>
        //                         <label>Confirm Password:</label>
        //                     </div>

        //                     <div className='input-div'>
        //                         <input placeholder='enter confirm password...' type="password" {...register("confirmPassword", {
        //                             required: true,
        //                             validate: value => value === watch("password") || "Passwords do not match"
        //                         })} />
        //                         {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        //                     </div>
        //                 </div>

        //             </div>

        //             <div className='btn-div'>
        //                 <input type="submit" value="Submit" disabled={isSubmitting || !isValid} />
        //             </div>

        //             <div className='navigate'>
        //                 <p>Already Have an account ? <spam><Link to={"/login"}>Login</Link></spam></p>
        //             </div>
        //         </form>
        //     </div>
        // </div>
    );
};

export default RegisterForm;
