import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            fetch("http://localhost:3001/users/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        console.log(resp.uname)
                        sessionStorage.setItem('username', resp.uname);
                        sessionStorage.setItem('email', resp.id);
                        usenavigate('/')
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        if (result === true) {
            if ((/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(username)) {
                return true
            } else {
                result = false;
                toast.warning('Please enter the valid email')
            }
        }
        return result;
    }
    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="row justify-content-center" style={{ marginBottom: '100px' }}>
                    <form onSubmit={ProceedLogin} className="col col-md-8 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h2>User Login</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>User Name <span className="red_text">*</span></label>
                                    <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password <span className="red_text">*</span></label>
                                    <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary me-2">Login</button>
                                <Link className="btn btn-success pl-2" to={'/register'}>New User</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;