//Para importar as Rotas é necessário utilizar o: npm install react-router-dom
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"; //aqui
import Home from './pages/Home/home_api.jsx'
import Login from './pages/Login/login.jsx'
import Header from './pages/Header/header.jsx' //aqui
import HomePage from "./pages/Home/home.jsx";
import Produto from './pages/Produto/produto.jsx'
import ProdutoDetalhe from './pages/Produto/ProdutoDetalhe.jsx';
import Funcionario from './pages/Funcionario/funcionario.jsx'
import Usuario from './pages/Usuario/usuario.jsx'
import Carrinho from './pages/carrinho/carrinho.jsx';


function PerfilSimples() {
  return (
    <div style={{ padding: '40px', color: 'white', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ color: '#b366ff' }}>Meu Perfil</h1>
    </div>
  );
}

function EditarPerfil() {
  return (
    <div style={{ padding: '40px', color: 'white', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ color: '#b366ff' }}>Editar Perfil</h1>
    </div>
  );
}






function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />


            <Route element={<Layout />} >

                <Route path="/home" element={<HomePage />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="/produto/:nome" element={<ProdutoDetalhe />} />
                <Route path="/funcionario" element={<Funcionario />} />
                <Route path="/usuario" element={<Usuario />} />
                 <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/perfil" element={<PerfilSimples />} />
                <Route path="/perfil/editar" element={<EditarPerfil />} />

            </Route>


            </Routes>
        </BrowserRouter>            

    )
}
// layout com Header

function Layout(){
    return(
    <>
        <Header /> {/*Exibe o cabeçalho */}
    <main>
        <Outlet /> {/* Aqui o conteúdo da página */}
    </main>
    </>
)
}


export default RoutesApp;