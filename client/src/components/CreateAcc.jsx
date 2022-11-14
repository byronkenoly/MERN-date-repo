import './createAcc.css';
import React, { useState } from 'react';
import { create } from '../users/user';
// import Popup from './Popup';

function CreateAcc(){
    const [values, setValues] = useState({
        name: '',
        email: '',
        gender: '',
        password: '',
        dob: '',
        open: false,
        error: ''
    });

    const handleChange = function (field){
        return function (event){
            setValues({...values, [field]: event.target.value})
        }
    }

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            gender: values.gender || undefined,
            password: values.password || undefined,
            birthday: values.dob || undefined
        }

        create(user).then((data) => {
            if (data.error){
                setValues({...values, error: data.error})
            } else {
                setValues({...values, error: '', open: true})
            }
        })
    }

    return (
        <React.Fragment>
            <div className="sign-up-container">
                <div className="main-container">
                    <div className="loginBruh">Already have a Finesse Account?</div>
                    <div className="separateLine"></div>
                    <div className="signupBruh">Sign Up for Finesse</div>
                    <div className="formDiv">
                        <form action="http://localhost:4000/api/users/" method="POST">
                            <div>
                                <div className="sign-up-form">
                                    <input className="user-details inputTxt" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    value={values.firstName} 
                                    onChange={handleChange('name')}
                                    autoFocus/>
                                </div>
                                <div className="sign-up-form">
                                    <input className="user-details inputTxt" 
                                    type="text" 
                                    name="email" 
                                    placeholder="Email address"
                                    value={values.email}
                                    onChange={handleChange('email')}/>
                                </div>
                                <div className="sign-up-form">
                                    <input className="user-details inputTxt" 
                                    type="text" 
                                    name="gender" 
                                    placeholder="Gender"
                                    value={values.gender}
                                    onChange={handleChange('gender')}/>
                                </div>
                                <div className="sign-up-form">
                                    <input className="user-details inputTxt" 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange('password')}/>
                                </div>
                                <div className="sign-up-form">
                                    <input className="user-details inputTxt" 
                                    type="date" 
                                    name="birthday"
                                    value={values.dob}
                                    onChange={handleChange('dob')}/>
                                </div>
                                <div className="signupDiv">
                                    <button className="signupBtn" 
                                    type="submit"
                                    onClick={clickSubmit}>Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreateAcc;