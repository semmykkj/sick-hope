import { useNavigate } from 'react-router-dom';
import { useCarrinho } from './hookCarrinho';
import './carrinhoDrawer.css';

function CarrinhoDrawer({ aberto, fechar }) {
  const { itens, removerItem, alterarQuantidade, totalPreco } = useCarrinho();
  const navigate = useNavigate();

  if (!aberto) return null;

  const irParaCarrinho = () => {
    fechar();
    setTimeout(() => {
      navigate('/carrinho');
    }, 300);
  };

  return (
    <>
      <div className="drawer-overlay" onClick={fechar}></div>
      <div className={`drawer ${aberto ? 'aberto' : ''}`}>
        <div className="drawer-header">
          <h3>🛒 Meu Carrinho</h3>
          <button className="drawer-fechar" onClick={fechar}>✕</button>
        </div>

        <div className="drawer-content">
          {itens.length === 0 ? (
            <div className="drawer-vazio">
              <p>Seu carrinho está vazio.</p>
              <button className="drawer-btn-ir" onClick={() => { fechar(); navigate('/produto'); }}>
                Ver produtos
              </button>
            </div>
          ) : (
            <>
              <div className="drawer-itens">
                {itens.map((item) => (
                  <div className="drawer-item" key={item.nome}>
                    <img src={item.img} alt={item.nome} className="drawer-item-img" />
                    <div className="drawer-item-info">
                      <h4>{item.nome}</h4>
                      <p className="drawer-item-preco">
                        R$ {parseFloat(String(item.preco).replace('R$ ', '').replace(',', '.')).toFixed(2).replace('.', ',')}
                      </p>
                      <div className="drawer-item-qtd">
                        <button onClick={() => alterarQuantidade(item.nome, item.quantidade - 1)}>-</button>
                        <span>{item.quantidade}</span>
                        <button onClick={() => alterarQuantidade(item.nome, item.quantidade + 1)}>+</button>
                      </div>
                    </div>
                    <button className="drawer-item-remover" onClick={() => removerItem(item.nome)}>✕</button>
                  </div>
                ))}
              </div>

              <div className="drawer-footer">
                <div className="drawer-total">
                  <span>Total:</span>
                  <strong>R$ {totalPreco.toFixed(2).replace('.', ',')}</strong>
                </div>
                <button className="drawer-btn-ver" onClick={irParaCarrinho}>
                  Ver carrinho completo
                </button>
                <button className="drawer-btn-finalizar" onClick={() => { fechar(); navigate('/carrinho'); }}>
                  Finalizar compra
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CarrinhoDrawer;