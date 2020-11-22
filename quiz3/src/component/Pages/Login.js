import React, { useState } from 'react';
import "../../App.css"

const Login = () =>{
    
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [alert, setAlert] = useState("");

const handleSubmit = (event) => {
    event.preventDefault()
    if(username === "admin") {
        if(password === "admin") {
            sessionStorage.setItem("loggedin", true)
            setAlert(`Berhasil Masuk, Kamu akan dialihkan dalam 5 detik`)
            setTimeout(() => {
                window.location.href = '/book_list';
            }, 5000);
        } else {
            setAlert(`Kata sandi yang kamu masukkan salah ${password}, silahkan coba lagi`)
        }
    } else {
        setAlert(`Tidak ditemukan akun berinisialkan ${username}, silahkan coba lagi`)
    }

}

const handleUsername = (event) => {
    let user =  event.target.value;
    setUsername(user)
}

const handlePassword = (event) => {
    let pass =  event.target.value;
    setPassword(pass)
}

    return (
            <>
            <div style={{margin: "85px 30px 30px 40px"}}>
                <h1>Login</h1>
                <div className="container">
                <form onSubmit={handleSubmit}>
                    { alert }
                <div className="row">
                    <div class="col-25">
                        <label for="fname">Username</label>
                    </div>
                    <div class="col-75">
                        <input type="text" value={username} onChange={handleUsername} placeholder="Username"/>
                    </div>
                </div>
                <div className="row">
                    <div class="col-25">
                        <label for="fname">Password</label>
                    </div>
                    <div class="col-75">
                        <input type="text" value={password} onChange={handlePassword} placeholder="Password"/>
                    </div>
                </div>    
                    <div class="row">
                        <input type="submit" value="Login"/>
                    </div>
                </form>  
                </div>
            </div>
            </>
        )
    }

export default Login