import './home.css';

const produtos = [
  { nome: 'Camiseta "Isso é Brasil com s"', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/brasil com s.png' },
  { nome: 'Camiseta "Sick', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/menino.png' },
  { nome: 'Camiseta "sick doble cross"', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/SICK.jpg' },
  { nome: 'Camiseta "Yes i´m ok..."', desc: '100% algodão, conforto diário', preco: 'R$ 119,90', img: '/yes im ok.png' },
];

function Home() { 
  return ( 
    <div className="home">
      <header className="hero">
        <h1>
          <img src="/logo3.png" alt="SickHope" className="logo" />
        </h1>
        <p>As melhores tendências da moda com estilo e qualidade.</p>
     <a href="/produto" className="btn">Ver Coleção</a>
      </header>
<footer>
  <p>SICK HOPE COMÉRCIO DE VESTUÁRIO LTDA &nbsp;|&nbsp; CNPJ: 45.123.789/0001-10</p>
  <p>Rua da Aurora, 808, Sala 42 – Vila Madalena, São Paulo – SP &nbsp;|&nbsp; CEP: 05435-010</p>
  <p>sickhope@hotmail.com &nbsp;|&nbsp; (11) 98765-4321 &nbsp;|&nbsp; @sickhope.oficial</p>
</footer>
    </div>
  );
}

export default Home;