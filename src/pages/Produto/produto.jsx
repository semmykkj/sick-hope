import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCarrinho } from '../carrinho/hookCarrinho';
import './produto.css';

const produtos = [
  { nome: 'Camiseta "Isso é Brasil com s"', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/brasil com s.png', categoria: 'Brasil', detalhes: 'Camiseta oversized com estampa exclusiva. Tecido 100% algodão penteado, costura reforçada e acabamento premium.' },
  { nome: 'Camiseta "Sick"', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/menino.png', categoria: 'Sick', detalhes: 'Camiseta com estampa minimalista. Algodão de alta qualidade, caimento perfeito e durabilidade garantida.' },
  { nome: 'Camiseta "sick doble cross"', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/SICK.jpg', categoria: 'Sick', detalhes: 'Camiseta com estampa doble cross exclusiva. Design autoral, tecido macio e confortável.' },
  { nome: 'Camiseta "Yes i´m ok..."', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/yes im ok.png', categoria: 'Yes', detalhes: 'Camiseta com a icônica frase. Estampa frontal e nas costas. Algodão premium.' },
];

const categorias = ['Todas', 'Brasil', 'Sick', 'Yes'];

function Produto() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todas');
  const { adicionarItem } = useCarrinho();

  const produtosFiltrados = filtroAtivo === 'Todas'
    ? produtos
    : produtos.filter((p) => p.categoria === filtroAtivo);

  return (
    <div className="orkut-page">
      <div className="orkut-body">
        <aside className="orkut-sidebar">
          <div className="orkut-box">
            <div className="orkut-box-title">Filtros</div>
            <div className="orkut-box-content">
              <ul className="filtro-lista">
                {categorias.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`filtro-btn ${filtroAtivo === cat ? 'ativo' : ''}`}
                      onClick={() => setFiltroAtivo(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="orkut-box">
            <div className="orkut-box-title">Estatísticas</div>
            <div className="orkut-box-content">
              <p>Total de produtos: <strong>{produtos.length}</strong></p>
              <p>Exibindo: <strong>{produtosFiltrados.length}</strong></p>
            </div>
          </div>
        </aside>

        <main className="orkut-main">
          <div className="orkut-box">
            <div className="orkut-box-title">
              Catálogo de Produtos {filtroAtivo !== 'Todas' && `- ${filtroAtivo}`}
            </div>
            <div className="orkut-box-content">
              {produtosFiltrados.length === 0 ? (
                <p className="sem-produtos">Nenhum produto encontrado nesta categoria.</p>
              ) : (
                <div className="produtos-grid">
                  {produtosFiltrados.map((p) => (
                    <Link
                      to={`/produto/${encodeURIComponent(p.nome)}`}
                      className="produto-card"
                      key={p.nome}
                    >
                      <div className="produto-img-wrap">
                        <img src={p.img} alt={p.nome} className="produto-img" />
                      </div>
                      <div className="produto-info">
                        <h3>{p.nome}</h3>
                        <p className="produto-desc">{p.desc}</p>
                        <p className="produto-categoria">Categoria: {p.categoria}</p>
                        <div className="produto-footer">
                          <strong className="produto-preco">{p.preco}</strong>
                          <button
                            className="btn-comprar"
                            onClick={(e) => {
                              e.preventDefault();
                              adicionarItem(p);
                            }}
                          >
                            Adicionar
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
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

export default Produto;