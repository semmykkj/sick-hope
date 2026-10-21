import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarrinho } from '../carrinho/hookCarrinho';
import { useAuth } from '../perfil/useAuth';
import CarrinhoDrawer from '../carrinho/CarrinhoDrawer';

function Header() {
  const { totalItens } = useCarrinho();
  const { usuario } = useAuth();
  const navigate = useNavigate();
  const [drawerAberto, setDrawerAberto] = useState(false);

  const paginaAtual = window.location.pathname;

  const estiloNav = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '15px 20px',
    background: '#0a0a0a',
    position: 'relative',
  };

  const estiloBotao = (ativo) => ({
    color: ativo ? '#ffffff' : '#b366ff',
    textDecoration: 'none',
    fontFamily: 'Verdana, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '10px 22px',
    borderRadius: '5px',
    border: 'none',
    background: ativo ? '#4a0080' : 'transparent',
    cursor: 'pointer',
    transition: 'all 0.2s',
  });

  const estiloPerfilBtn = {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    border: '2px solid #4a0080',
    background: '#1a1a1a',
    cursor: 'pointer',
    overflow: 'hidden',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  };

  const estiloAvatar = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
  };

  return (
    <>
      <header style={{ background: '#0a0a0a' }}>
        <img
          src="/logo2.png"
          alt="SickHope"
          style={{ maxWidth: '80px', height: 'auto', display: 'block', margin: '10px auto' }}
        />

        <nav style={estiloNav}>
          <a
            href="/home"
            style={estiloBotao(paginaAtual === '/home' || paginaAtual === '/')}
            onMouseEnter={(e) => { if (paginaAtual !== '/home' && paginaAtual !== '/') e.target.style.background = '#2a1a3a'; }}
            onMouseLeave={(e) => { if (paginaAtual !== '/home' && paginaAtual !== '/') e.target.style.background = 'transparent'; }}
          >
            Início
          </a>

          <a
            href="/produto"
            style={estiloBotao(paginaAtual === '/produto')}
            onMouseEnter={(e) => { if (paginaAtual !== '/produto') e.target.style.background = '#2a1a3a'; }}
            onMouseLeave={(e) => { if (paginaAtual !== '/produto') e.target.style.background = 'transparent'; }}
          >
            Produtos
          </a>

          <a
            href="/funcionario"
            style={estiloBotao(paginaAtual === '/funcionario')}
            onMouseEnter={(e) => { if (paginaAtual !== '/funcionario') e.target.style.background = '#2a1a3a'; }}
            onMouseLeave={(e) => { if (paginaAtual !== '/funcionario') e.target.style.background = 'transparent'; }}
          >
            Funcionários
          </a>

          <button
            style={estiloBotao(paginaAtual === '/carrinho')}
            onClick={() => setDrawerAberto(true)}
            onMouseEnter={(e) => { if (paginaAtual !== '/carrinho') e.target.style.background = '#2a1a3a'; }}
            onMouseLeave={(e) => { if (paginaAtual !== '/carrinho') e.target.style.background = 'transparent'; }}
          >
             Carrinho
            {totalItens > 0 && (
              <span style={{
                background: '#6a0dad',
                color: '#ffffff',
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '10px',
                marginLeft: '5px',
                fontWeight: 'bold',
              }}>
                {totalItens}
              </span>
            )}
          </button>

          <button
            onClick={() => navigate('/perfil')}
            style={estiloPerfilBtn}
            onMouseEnter={(e) => { e.target.style.borderColor = '#6a0dad'; e.target.style.boxShadow = '0 0 10px #4a0080'; }}
            onMouseLeave={(e) => { e.target.style.borderColor = '#4a0080'; e.target.style.boxShadow = 'none'; }}
            title="Meu Perfil"
          >
            <img
              src={usuario?.avatar || '/logo3.png'}
              alt="Perfil"
              style={estiloAvatar}
            />
          </button>

          
        </nav>
      </header>

      <CarrinhoDrawer
        aberto={drawerAberto}
        fechar={() => setDrawerAberto(false)}
      />
    </>
  );
}

export default Header;