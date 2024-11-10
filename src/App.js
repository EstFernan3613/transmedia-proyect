import React, { useState } from 'react';
import Modal from 'react-modal';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry'; // Importa el worker desde pdfjs-dist
import './App.css';

// Configuración del worker para PDF.js
// Esta configuración establece manualmente el worker desde pdfjs-dist
Worker.workerSrc = pdfWorker;

const App = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });

  const pdfFiles = {
    storyboard: `${process.env.PUBLIC_URL}/assets/storyboard.pdf`,
    biblia: `${process.env.PUBLIC_URL}/assets/biblia.pdf`,
    comic: `${process.env.PUBLIC_URL}/assets/comic.pdf`,
  };

  const openModal = (type) => {
    const descriptions = {
      storyboard: { title: 'Storyboard', description: 'Este PDF muestra el guion gráfico del proyecto.' },
      biblia: { title: 'Biblia Transmedia', description: 'Este PDF contiene la biblia transmedia del proyecto.' },
      comic: { title: 'Cómic', description: 'Aquí puedes ver el cómic completo del proyecto.' },
    };
    setModalContent(descriptions[type]);
    setPdfFile(pdfFiles[type]);
    setModalIsOpen(true);
  };

  return (
    <div className="app-container">
      <h1>The Dynasty of Football</h1>
      <p>Una historia épica que recorre generaciones de jugadores de fútbol, explorando sus victorias, derrotas y el legado que dejan en el deporte. Sumérgete en una narrativa que destaca la pasión, el sacrificio y la gloria en el mundo del fútbol.</p>
      
      <div className="button-container">
        <button onClick={() => openModal('storyboard')}>Ver Storyboard</button>
        <button onClick={() => openModal('biblia')}>Ver Biblia Transmedia</button>
        <button onClick={() => openModal('comic')}>Ver Cómic</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel={modalContent.title}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{modalContent.title}</h2>
        <p>{modalContent.description}</p>

        {pdfFile && (
          <Worker workerUrl={pdfWorker}>
            <div className="pdf-viewer-container">
              <Viewer fileUrl={pdfFile} />
            </div>
          </Worker>
        )}

        <button onClick={() => setModalIsOpen(false)} className="close-button">Cerrar</button>
      </Modal>
    </div>
  );
};

export default App;
