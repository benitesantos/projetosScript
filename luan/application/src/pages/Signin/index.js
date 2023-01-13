import './style.css';
import { useNavigate } from 'react-router-dom';


function Signin() {

    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();

        navigate('/lists')

    }
    return (
        <div className="container">
            <h1>Bem vindo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Usuário</span>
                    <input />
                </div>
                <div>
                    <span>Senha</span>
                    <input />
                </div>
                <button type='submit'>Entrar</button>
            </form>
        </div>
    );
}

export default Signin;
