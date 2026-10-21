import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import Produto from './pages/Produto/Produto.jsx';
import ProdutoDetalhe from './pages/Produto/ProdutoDetalhe.jsx';
import Carrinho from './pages/carrinho/carrinho.jsx';
import Funcionario from './pages/Funcionario/Funcionario.jsx';
import Header from './pages/Header/header.jsx';

function PerfilSimples() {
  return (
    <div style={{ padding: '40px', color: 'white', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ color: '#b366ff' }}>Meu Perfil</h1>
      <p>Página de perfil funcionando.</p>
    </div>
  );
}

function EditarPerfil() {
  return (
    <div style={{ padding: '40px', color: 'white', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ color: '#b366ff' }}>Editar Perfil</h1>
      <p>Página de edição funcionando.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/produto/:nome" element={<ProdutoDetalhe />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/perfil" element={<PerfilSimples />} />
        <Route path="/perfil/editar" element={<EditarPerfil />} />
        <Route path="/funcionario" element={<Funcionario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;