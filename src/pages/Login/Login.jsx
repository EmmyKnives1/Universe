import './Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <h1>Entrar no Universo</h1>
      <form className="form-login">
        <input type="email" placeholder="Seu e-mail cósmico" />
        <input type="password" placeholder="Senha estelar" />
        <button type="submit">Acessar Galeria</button>
        <p className="cadastro-link">Ainda não tem acesso? <a href="/cadastro">Cadastre-se</a></p>
      </form>
    </div>
  );
}
