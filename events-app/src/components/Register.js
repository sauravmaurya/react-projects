import React, { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import axios from 'axios'

export default function Register() {
    // const [users, setUsers] = useState([])
    // const [id, idchange] = useState("");
    const unameRef = useRef()
    // const [password, passwordchange] = useState("");
    const passRef = useRef()
    // const [email, emailchange] = useState("");
    const emailRef = useRef()

    let uname;
    let password;
    let email;

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);
    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (uname === null || uname === '') {
            isproceed = false;
            errormessage += ' Username ';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password ';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email ';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if ((/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(email)) {
                if ((/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$/).test(password)) {
                    return true

                }
                else {
                    isproceed = false;
                    toast.warning('password should contain atleast 8 characters,at least 1 Uppercase and 1 special character')
                }
            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = async (e) => {
        e.preventDefault();
        uname = unameRef.current.value
        password = passRef.current.value
        email = emailRef.current.value
        let regobj = { email: email, password: password, uname: uname };
        if (IsValidate()) {
            //console.log(regobj);

            axios.post("http://localhost:3001/users", {
                id: email,
                password: password,
                uname: uname,
                events: []
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                console.log(err.response.data)
                if ((err.response.data).includes("Insert failed, duplicate id")) {
                    toast.error('Failed :Email already exist');
                }
                else {
                    toast.error('Failed :' + err.message);
                }
            });
        }
    }
    return (
        <div className='register-wrapper'>
            <div className="container">
                <div className="row justify-content-center" style={{ marginBottom: '100px' }}>
                    <form className='col col-md-8 col-lg-6' onSubmit={handlesubmit}>
                        <div className="card">
                            <div className="card-header">
                                <h1>Register</h1>
                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="m-1">Email <span className="red_text">*</span></label>
                                            <input required ref={emailRef} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 my-3">
                                        <div className="form-group">
                                            <label className="m-1">Password <span className="red_text">*</span></label>
                                            <input ref={passRef} required type="password" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="m-1">User Name <span className="red_text">*</span></label>
                                            <input ref={unameRef} required className="form-control"></input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary btn-block me-2">Register</button>
                                <Link to={'/login'} className="btn btn-success pl-2">Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
