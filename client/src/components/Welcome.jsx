import './style.css';
import './media.css';
import { useState } from 'react';
import { signin } from '../auth/auth';
import auth from '../auth/auth-helper';
import { Navigate } from 'react-router-dom';

function Welcome(props){
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    });

    const clickSubmit = () => {
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        signin(user).then((data) => {
            if (data.error){
                setValues({...values, error: data.error})
            } else {
                auth.authenticate(data, () => {
                    setValues({ ...values, error: '', redirectToReferrer: true})
                })
            }
        })
    };

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value});
    }

    const { from } = {
        from: {
            pathname: '/'
        }
    }

    const {redirectToReferrer} = values;

    if (redirectToReferrer)
    {
        return (<Navigate to={ from }/>)
    }

    return (
        <div class="globalContainer">
            <div class="mainContainer">
                <div class="headerDiv">
                    <h1 class="logoHeader">finesse</h1>
                    <h2 class="briefDescription">Finesse connects you with new potential partners.</h2>
                </div>
                <div class="mainDiv">
                    <div class="signupLoginDiv">
                        <form action="">
                            <div>
                                <div class="emailPass">
                                    <input class="userCred inputText" 
                                    type="text" 
                                    name="emailNo" 
                                    placeholder="Email address"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    autoFocus/>
                                </div>
                                <div>
                                    <div class="emailPass">
                                        <input class="userCred inputText" 
                                        type="password" 
                                        name="pass" 
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange('password')}/>
                                    </div>
                                </div>
                            </div>
                            <div class="loginDiv">
                                <button class="loginBtn" 
                                name="login" 
                                type="submit"
                                onClick={clickSubmit}>Log in</button>
                            </div>
                            <div class="forget">
                                <a href="">Forgotten password?</a>
                            </div>
                            <div class="separator"></div>
                            <div class="createDiv">
                                <a class="createAcc" role="button" href="">Create New Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;