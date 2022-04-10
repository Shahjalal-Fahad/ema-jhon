import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="form-container">
            <div>
            <h2 className='form-title'>Login</h2>
            <form >
                <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="" />
                </div>
                <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" name="password" id="" />
                </div>
                <button className='submit-btn' type="submit">Login</button>
            </form>
            <p className='redirect-link'>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;