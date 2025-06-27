export default function Header() {
    return (
      <header id="header" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1>Fluoride in Alberta: An Interactive Study</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Visualizing the impact of fluoride levels on dental health in Alberta.
        </p>
  
        <nav style={{ marginTop: '20px' }}>
          <a href="#background" style={{ margin: '0 10px' }}>Background</a>
          <a href="#visualizations" style={{ margin: '0 10px' }}>Visualizations</a>
        </nav>
      </header>
    );
  }
  