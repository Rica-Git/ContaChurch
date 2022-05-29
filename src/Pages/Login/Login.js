import React, {useState} from "react";

import "./styled.css";

const LoginPage = () => {
    const axios = require('axios')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSubmit = (evento) => {
        evento.preventDefault();

        console.log({email, password});
    };
    
    async function login(email, password) {
        let body = {
            'EMAIL': email,
            'SENHA': password
        }
        let response = await axios.post('http://127.0.0.1:5000/logar', body)

        if (response){
            console.log(response.data)
        } else {
            login(email, password)
        }
    }

    return (
        <div id = "login">
            <h1 className="Titulo">Login do Sistema</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} placeholder="example@teste.com"/>

                </div>

                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" 
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)}/>

                </div>
                <div className="actions">
                    <button type="submit" onClick={()=>login(email, password)}>Entrar</button>
                </div>
            </form>
        </div>
    );
};


export default LoginPage;
