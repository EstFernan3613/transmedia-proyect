import React from 'react';
import './App.css';

const App = () => {
  const pdfLinks = {
    storyboard: "https://drive.google.com/file/d/1f8s4fF52O7Kahx8XnqWPCVLNo6wv4LB1/view?usp=sharing",
    biblia: "https://drive.google.com/file/d/1ijcP-icYeASXJLa96cDfgax0kPC5oXYW/view?usp=sharing",
    comic: "https://drive.google.com/file/d/1Jzq3BkHJcBeKK3BOra4ZTXVNAVJkLv6M/view?usp=sharing",
  };

  return (
    <div className="app-container">
      <header className="hero-section">
        <h1>The Dynasty of Football</h1>
        <p>Una historia épica que recorre generaciones de jugadores de fútbol, explorando sus victorias, derrotas y el legado que dejan en el deporte.</p>
      </header>

      <section className="info-section">
        <h2>Sobre el Proyecto</h2>
        <p>
          "The Dynasty of Football" es una narrativa transmedia que sigue las vidas de jugadores de fútbol a través de generaciones.
          A través de este proyecto, exploramos la pasión, el sacrificio y la gloria en el mundo del fútbol, ofreciendo una experiencia
          inmersiva y emotiva que conecta a los aficionados con la historia y los personajes.
        </p>
        <p><strong>Creado por:</strong> Juan Esteban Fernandez Cuervo</p>
      </section>

      <section className="teaser-section">
        <h2>Teaser Promocional</h2>
        <p>Descubre un adelanto de "The Dynasty of Football" a través de nuestro teaser oficial en YouTube.</p>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/frLo2yAjMYE" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="full-image-section">
        <h2>Imagen Destacada del Proyecto</h2>
        <img src={`${process.env.PUBLIC_URL}/image.png`} alt="Imagen Destacada" className="full-image" />
      </section>

      <section className="links-section">
        <h2>Documentos del Proyecto</h2>
        <div className="button-container">
          <a href={pdfLinks.storyboard} target="_blank" rel="noopener noreferrer" className="button">
            Ver Storyboard
          </a>
          <a href={pdfLinks.biblia} target="_blank" rel="noopener noreferrer" className="button">
            Ver Biblia Transmedia
          </a>
          <a href={pdfLinks.comic} target="_blank" rel="noopener noreferrer" className="button">
            Ver Cómic - Plataforma Principal
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 The Dynasty of Football. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;