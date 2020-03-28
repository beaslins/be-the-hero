/**
 * sempre importar o React nos arquivos onde vamos usar o 
 * conceito de JSX, que é html dentro do javascript
 */
import React, { useState } from 'react';

/**
 * Importar componente link
 * assim o react não recarrega a página e usa o esquema de SPA
 */
import { Link, useHistory } from 'react-router-dom';

// API que vai nos ajudar a fazer a conxexão com backend
import api from '../../services/api';

/**
 * Pacote de icones
 * faz a instalação através de npm install react-icons e importa a lib de icones que precisar
 */
import { FiLogIn } from 'react-icons/fi';

import './styles.css'; // podemos importar o css direto no js


// importar imagens como componentes e sempre importa todos os arquivos atravez do js
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId]   = useState('');
    const history       = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            
            history.push('/profile');

        } catch (error) {
            alert('Falha no login, tente novamente');            
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02141" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}