import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

import './App.css'; // Importa el archivo CSS

const App = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const pdfFiles = {
    storyboard: `${process.env.PUBLIC_URL}/assets/storyboard.pdf`,
    biblia: `${process.env.PUBLIC_URL}/assets/biblia.pdf`,
    comic: `${process.env.PUBLIC_URL}/assets/comic.pdf`,
  };

  const handleViewPdf = (type) => {
    setPdfFile(pdfFiles[type]);
  };

  return (
    <div className="app-container">
      <h1>Proyecto Transmedia</h1>
      <p>Bienvenido a la presentación del proyecto. Selecciona una sección para ver su contenido:</p>
      
      <div className="button-container">
        <button onClick={() => handleViewPdf('storyboard')}>Ver Storyboard</button>
        <button onClick={() => handleViewPdf('biblia')}>Ver Biblia Transmedia</button>
        <button onClick={() => handleViewPdf('comic')}>Ver Cómic</button>
      </div>
      
      {pdfFile ? (
        <Worker workerUrl={pdfWorker}>
          <div className="pdf-viewer-container">
            <Viewer fileUrl={pdfFile} />
          </div>
        </Worker>
      ) : (
        <p className="placeholder-text">Seleccione una sección para visualizar el contenido</p>
      )}
    </div>
  );
};

export default App;
