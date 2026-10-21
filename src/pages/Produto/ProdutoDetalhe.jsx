import { useParams, Link } from 'react-router-dom';
import './produtoDetalhe.css';

const produtos = [
  { nome: 'Camiseta "Isso é Brasil com s"', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/brasil com s.png', categoria: 'Brasil', detalhes: 'Camiseta oversized com estampa exclusiva "Isso é Brasil com s". Tecido 100% algodão penteado, costura reforçada e acabamento premium. Disponível nos tamanhos P, M, G e GG.' },
  { nome: 'Camiseta "Sick"', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/menino.png', categoria: 'Sick', detalhes: 'Camiseta com estampa minimalista "Sick". Algodão de alta qualidade, caimento perfeito e durabilidade garantida. Ideal para o dia a dia com estilo.' },
  { nome: 'Camiseta "sick doble cross"', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/SICK.jpg', categoria: 'Sick', detalhes: 'Camiseta com estampa doble cross exclusiva da SickHope. Design autoral, tecido macio e confortável. Peça única para quem quer se destacar.' },
  { nome: 'Camiseta "Yes i´m ok..."', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/yes im ok.png', categoria: 'Yes', detalhes: 'Camiseta com a icônica frase "Yes i\'m ok...". Estampa frontal e nas costas. Algodão premium, perfeita para quem vive com humor e estilo.' },
];

function ProdutoDetalhe() {
  const { nome } = useParams();
  const produto = produtos.find((p) => p.nome === decodeURIComponent(nome));

  if (!produto) {
    return (
      <div className="orkut-page">
        <div className="orkut-body" style={{ display: 'block', textAlign: 'center', padding: '50px' }}>
          <h2 style={{ color: '#b366ff' }}>Produto não encontrado</h2>
          <Link to="/produto" className="btn-voltar">← Voltar para produtos</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orkut-page">
      <header className="orkut-header">
        <div className="orkut-header-inner">
          <img src="/logo3.png" alt="SickHope" className="orkut-logo" />
          <nav className="orkut-nav">
            <a href="/" className="orkut-link">Início</a>
            <a href="/produto" className="orkut-link ativo">Produtos</a>
            <a href="/funcionario" className="orkut-link">Funcionários</a>
          </nav>
        </div>
      </header>

      <div className="orkut-body">
        <aside className="orkut-sidebar">
          <div className="orkut-box">
            <div className="orkut-box-title">Navegação</div>
            <div className="orkut-box-content">
              <Link to="/produto" className="btn-voltar-sidebar">← Voltar para produtos</Link>
            </div>
          </div>

          <div className="orkut-box">
            <div className="orkut-box-title">Informações</div>
            <div className="orkut-box-content">
              <p>Categoria: <strong>{produto.categoria}</strong></p>
              <p>Disponibilidade: <strong style={{ color: '#66ff66' }}>Em estoque</strong></p>
            </div>
          </div>
        </aside>

        <main className="orkut-main">
          <div className="detalhe-box">
            <div className="detalhe-header">
              {produto.nome}
            </div>
            <div className="detalhe-content">
              <div className="detalhe-grid">
                <div className="detalhe-img-wrap">
                  <img src={produto.img} alt={produto.nome} className="detalhe-img" />
                </div>
                <div className="detalhe-info">
                  <h2>{produto.nome}</h2>
                  <p className="detalhe-categoria">Categoria: {produto.categoria}</p>
                  <p className="detalhe-desc">{produto.detalhes}</p>
                  <div className="detalhe-preco-wrap">
                    <span className="detalhe-preco">{produto.preco}</span>
                    <span className="detalhe-parcela">ou 3x de R$ {(119.90 / 3).toFixed(2).replace('.', ',')}</span>
                  </div>
                  <button className="btn-comprar-grande">Comprar agora</button>
                  <button className="btn-carrinho">Adicionar ao carrinho</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="orkut-footer">
        <p>SickHope © 2026 - Inspirado no Orkut</p>
      </footer>
    </div>
  );
}

export default ProdutoDetalhe;