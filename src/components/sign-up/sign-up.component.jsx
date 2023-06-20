import { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
        passwordVerification: ""
    });

    const formDataChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className="">
            <h1>Sign Up</h1>
            <form className="">
                <label className="">User Name</label>
                <input
                    onChange={formDataChange}
                    required type="text"
                    className=""
                    name="userName"
                    value={formData.userName}
                    autoComplete="off"
                />
                <label className="">Email</label>
                <input
                    onChange={formDataChange}
                    required type="email"
                    className=""
                    name="userEmail"
                    value={formData.userEmail}
                    autoComplete="off"
                />
                <label className="">Password</label>
                <input
                    onChange={formDataChange}
                    required type="password"
                    className=""
                    name="userPassword"
                    value={formData.userPassword}
                    autoComplete="off"
                />
                <label className="">Confirm Password</label>
                <input
                    onChange={formDataChange}
                    required type="password"
                    className=""
                    name="passwordVerification"
                    value={formData.passwordVerification}
                    autoComplete="off"
                />
                <button type="submit" className="" value={formData.passwordVerification}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;