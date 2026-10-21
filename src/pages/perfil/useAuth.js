import { useState, useEffect, useCallback } from 'react';

const CHAVE = 'usuario_sickhope';

const USUARIO_PADRAO = {
  nome: 'Cliente SickHope',
  email: 'cliente@sickhope.com.br',
  telefone: '(11) 98765-4321',
  cpf: '123.456.789-00',
  endereco: 'Rua da Aurora, 808 - Vila Madalena, SP',
  cep: '05435-010',
  avatar: '/pfp.jpg',
};

function lerUsuario() {
  try {
    const salvo = localStorage.getItem(CHAVE);
    return salvo ? JSON.parse(salvo) : USUARIO_PADRAO;
  } catch {
    return USUARIO_PADRAO;
  }
}

function salvarUsuario(usuario) {
  localStorage.setItem(CHAVE, JSON.stringify(usuario));
  window.dispatchEvent(new CustomEvent('usuario-mudou'));
}

export function useAuth() {
  const [usuario, setUsuario] = useState(lerUsuario);
  const [logado, setLogado] = useState(true);

  useEffect(() => {
    const handler = () => setUsuario(lerUsuario());
    window.addEventListener('usuario-mudou', handler);
    return () => window.removeEventListener('usuario-mudou', handler);
  }, []);

  const atualizarPerfil = useCallback((dados) => {
    const novo = { ...usuario, ...dados };
    salvarUsuario(novo);
    setUsuario(novo);
  }, [usuario]);

  const trocarSenha = useCallback((senhaAtual, novaSenha) => {
    // Simulação - em produção validar com API
    if (senhaAtual.length < 4) {
      return { sucesso: false, msg: 'Senha atual inválida' };
    }
    if (novaSenha.length < 6) {
      return { sucesso: false, msg: 'Nova senha deve ter pelo menos 6 caracteres' };
    }
    return { sucesso: true, msg: 'Senha alterada com sucesso!' };
  }, []);

  const logout = useCallback(() => {
    setLogado(false);
    localStorage.removeItem(CHAVE);
    window.location.href = '/';
  }, []);

  const login = useCallback((email, senha) => {
    // Simulação - em produção validar com API
    if (email && senha) {
      setLogado(true);
      salvarUsuario({ ...USUARIO_PADRAO, email });
      return { sucesso: true };
    }
    return { sucesso: false, msg: 'Email ou senha inválidos' };
  }, []);

  return {
    usuario,
    logado,
    atualizarPerfil,
    trocarSenha,
    logout,
    login,
  };
} 