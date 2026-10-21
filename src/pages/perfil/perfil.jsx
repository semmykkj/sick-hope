import { useNavigate } from 'react-router-dom';
import './perfil.css';

function Perfil() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', color: 'white', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ color: '#b366ff' }}>Página de Perfil</h1>
      <p>Se você está vendo isso, o perfil carregou.</p>
      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
}

export default Perfil;