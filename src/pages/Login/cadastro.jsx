import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastro.css';

function Cadastro() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    cpf: '',
  });

  const handleCadastro = (e) => {
    e.preventDefault();

    if (form.senha !== form.confirmarSenha) {
      setMsg('As senhas não coincidem!');
      return;
    }

    if (form.senha.length < 6) {
      setMsg('A senha deve ter pelo menos 6 caracteres!');
      return;
    }

    // Salva no localStorage (simulação - depois vai pra API)
    const usuarios = JSON.parse(localStorage.getItem('usuarios_sickhope') || '[]');
    
    const existe = usuarios.find((u) => u.email === form.email);
    if (existe) {
      setMsg('Este e-mail já está cadastrado!');
      return;
    }

    usuarios.push({
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      telefone: form.telefone,
      cpf: form.cpf,
      avatar: '/logo3.png',
      criadoEm: new Date().toISOString(),
    });

    localStorage.setItem('usuarios_sickhope', JSON.stringify(usuarios));
    setMsg('Cadastro realizado com sucesso!');

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <div className="cadastro-box">
          <div className="cadastro-box-title">
            📝 Criar nova conta
          </div>
          <div className="cadastro-box-content">
            {msg && (
              <div className={`cadastro-msg ${msg.includes('sucesso') ? 'sucesso' : 'erro'}`}>
                {msg}
              </div>
            )}

            <form className="cadastro-form" onSubmit={handleCadastro}>
              <div className="form-group full-width">
                <label>Nome completo</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="text"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  placeholder="(11) 98765-4321"
                  required
                />
              </div>

              <div className="form-group">
                <label>CPF</label>
                <input
                  type="text"
                  value={form.cpf}
                  onChange={(e) => setForm({ ...form, cpf: e.target.value })}
                  placeholder="123.456.789-00"
                  required
                />
              </div>

              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  value={form.senha}
                  onChange={(e) => setForm({ ...form, senha: e.target.value })}
                  placeholder="Mínimo 6 caracteres"
                  minLength={6}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Confirmar senha</label>
                <input
                  type="password"
                  value={form.confirmarSenha}
                  onChange={(e) => setForm({ ...form, confirmarSenha: e.target.value })}
                  placeholder="Digite a senha novamente"
                  minLength={6}
                  required
                />
              </div>

              <div className="form-botoes">
                <button type="button" className="btn-voltar" onClick={() => navigate('/login')}>
                  ← Voltar para login
                </button>
                <button type="submit" className="btn-cadastrar">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;