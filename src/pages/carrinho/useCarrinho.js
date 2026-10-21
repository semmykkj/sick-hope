import { useState, useEffect, useCallback } from 'react';

const CHAVE = 'carrinho_sickhope';

function lerCarrinho() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE)) || [];
  } catch {
    return [];
  }
}

function salvarCarrinho(itens) {
  localStorage.setItem(CHAVE, JSON.stringify(itens));
  window.dispatchEvent(new CustomEvent('carrinho-mudou'));
}

export function useCarrinho() {
  const [itens, setItens] = useState(lerCarrinho);

  useEffect(() => {
    const handler = () => setItens(lerCarrinho());
    window.addEventListener('carrinho-mudou', handler);
    return () => window.removeEventListener('carrinho-mudou', handler);
  }, []);

  const adicionarItem = useCallback((produto) => {
    const atual = lerCarrinho();
    const existe = atual.find((i) => i.nome === produto.nome);
    let novo;
    if (existe) {
      novo = atual.map((i) =>
        i.nome === produto.nome ? { ...i, quantidade: i.quantidade + 1 } : i
      );
    } else {
      novo = [...atual, { ...produto, quantidade: 1 }];
    }
    salvarCarrinho(novo);
  }, []);

  const removerItem = useCallback((nome) => {
    salvarCarrinho(lerCarrinho().filter((i) => i.nome !== nome));
  }, []);

  const alterarQuantidade = useCallback((nome, qtd) => {
    if (qtd <= 0) {
      removerItem(nome);
      return;
    }
    const novo = lerCarrinho().map((i) =>
      i.nome === nome ? { ...i, quantidade: qtd } : i
    );
    salvarCarrinho(novo);
  }, [removerItem]);

  const limparCarrinho = useCallback(() => {
    salvarCarrinho([]);
  }, []);

  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0);

  const totalPreco = itens.reduce((acc, i) => {
    const preco = parseFloat(String(i.preco).replace('R$ ', '').replace(',', '.'));
    return acc + preco * i.quantidade;
  }, 0);

  return {
    itens,
    adicionarItem,
    removerItem,
    alterarQuantidade,
    limparCarrinho,
    totalItens,
    totalPreco,
  };
}