import { Link, useNavigate } from 'react-router-dom';
import { useCarrinho } from './useCarrinho';
import './carrinho.css';

function Carrinho() {
  const { itens, removerItem, alterarQuantidade, limparCarrinho, totalPreco } = useCarrinho();
  const navigate = useNavigate();

  const finalizarCompra = () => {
    alert('Redirecionando para o checkout...\n(Integração com API pendente)');
  };

  return (
    <div className="orkut-page">
      <div className="orkut-body">
        <aside className="orkut-sidebar">
          <div className="orkut-box">
            <div className="orkut-box-title">Resumo</div>
            <div className="orkut-box-content">
              <p>Itens: <strong>{itens.length}</strong></p>
              <p>Total: <strong className="resumo-total">R$ {totalPreco.toFixed(2).replace('.', ',')}</strong></p>
              <button className="btn-continuar" onClick={() => navigate('/produto')}>
                ← Continuar comprando
              </button>
            </div>
          </div>

          {itens.length > 0 && (
            <div className="orkut-box">
              <div className="orkut-box-title">Ações</div>
              <div className="orkut-box-content">
                <button className="btn-limpar" onClick={limparCarrinho}>
                  🗑 Limpar carrinho
                </button>
              </div>
            </div>
          )}
        </aside>

        <main className="orkut-main">
          <div className="orkut-box">
            <div className="orkut-box-title">
              Meu Carrinho {itens.length > 0 && `(${itens.length} ${itens.length === 1 ? 'item' : 'itens'})`}
            </div>
            <div className="orkut-box-content">
              {itens.length === 0 ? (
                <div className="carrinho-vazio">
                  <p className="vazio-icone">🛒</p>
                  <p className="vazio-texto">Seu carrinho está vazio.</p>
                  <button className="btn-ir-produtos" onClick={() => navigate('/produto')}>
                    Ver produtos
                  </button>
                </div>
              ) : (
                <div className="carrinho-lista">
                  {itens.map((item) => (
                    <div className="carrinho-item" key={item.nome}>
                      <img src={item.img} alt={item.nome} className="carrinho-item-img" />
                      <div className="carrinho-item-info">
                        <h3>{item.nome}</h3>
                        <p className="item-categoria">Categoria: {item.categoria}</p>
                        <p className="item-preco-unit">R$ {parseFloat(String(item.preco).replace('R$ ', '').replace(',', '.')).toFixed(2).replace('.', ',')}</p>
                      </div>
                      <div className="carrinho-item-qtd">
                        <button onClick={() => alterarQuantidade(item.nome, item.quantidade - 1)}>-</button>
                        <span>{item.quantidade}</span>
                        <button onClick={() => alterarQuantidade(item.nome, item.quantidade + 1)}>+</button>
                      </div>
                      <div className="carrinho-item-subtotal">
                        <strong>R$ {(parseFloat(String(item.preco).replace('R$ ', '').replace(',', '.')) * item.quantidade).toFixed(2).replace('.', ',')}</strong>
                      </div>
                      <button className="btn-remover" onClick={() => removerItem(item.nome)}>✕</button>
                    </div>
                  ))}

                  <div className="carrinho-total">
                    <div className="total-linha">
                      <span>Subtotal:</span>
                      <span>R$ {totalPreco.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="total-linha">
                      <span>Frete:</span>
                      <span className="frete-gratis">Grátis</span>
                    </div>
                    <div className="total-linha total-final">
                      <span>Total:</span>
                      <span>R$ {totalPreco.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button className="btn-finalizar" onClick={finalizarCompra}>
                      Finalizar Compra
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <footer className="orkut-footer">
        <p>SICK HOPE COMÉRCIO DE VESTUÁRIO LTDA | CNPJ: 45.123.789/0001-10</p>
        <p>Rua da Aurora, 808 – Vila Madalena, SP | contato@sickhope.com.br | (11) 98765-4321</p>
      </footer>
    </div>
  );
}

export default Carrinho;