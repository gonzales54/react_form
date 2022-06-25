import { useState } from "react";

const Register = () => {
    const [form_data, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    let style =  {
        display: 'block'
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        if(name !== '' || email !== '' || password !== ''){
            setFormData({
                name: name.value,
                email: email.value,
                password: password.value
            });

            console.log(form_data)
            
            name.value = '';
            email.value = '';
            password.value = 7;
;        }
    }

    return(
        <form method="post" onSubmit={onSubmit}>
            <label style={style}>
                Name 
                <input type="text" id="name" placeholder="Input Your Name"/>            
            </label>
            <label style={style}>
                Email
                <input type="email" id="email" placeholder="Input Your Email"/>
            </label>
            
            <label style={style}>
                Password
                <input type="password" id="password" placeholder="Input Your Password"/>
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}

export default Register;