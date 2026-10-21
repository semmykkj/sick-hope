import { useNavigate } from 'react-router-dom';

function EditarPerfil() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', color: 'white', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ color: '#b366ff' }}>Editar Perfil</h1>
      <p>Se você está vendo isso, funcionou!</p>
      <button onClick={() => navigate(-1)} style={{ padding: '10px 20px', background: '#4a0080', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Voltar
      </button>
    </div>
  );
}

export default EditarPerfil;