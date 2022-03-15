import React, { useState } from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase.js';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const history = useHistory('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                history.push("/");
            })
            .catch((e) => {
                if (
                    e.message ===
                    "La contraseña es incorrecta"
                ) {
                    alert("Revisa tus datos e intente de nuevo");
                } else if (
                    e.message ===
                    "El correo no es correcto o no existe"
                ) {
                    history.push("/register");
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                } else {
                    alert(e.message);
                }
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <h3>Log In To Facebook</h3>
                <form>
                    <center>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" />
                    </center>
                    <center>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </center>
                    <center>
                        <button type="submit" onClick={login} className="login__login">Ingresar</button>
                    </center>
                    <center>
                        <h6>Forgotten Password</h6>
                    </center>
                    <center>
                        <hr />
                    </center>
                    <center>
                        <Link to="/register">
                            <button className="login__createNewAccount">Crear cuenta nueva</button>
                        </Link>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Login
