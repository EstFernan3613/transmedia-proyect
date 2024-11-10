import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Importa el Worker de pdfjs-dist para asegurar que el visor funcione correctamente
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

const App = () => {
  const [pdfFile, setPdfFile] = useState(null);

  // Rutas de los archivos PDF dentro de la carpeta 'public/assets'
  const pdfFiles = {
    storyboard: `${process.env.PUBLIC_URL}/assets/storyboard.pdf`,
    biblia: `${process.env.PUBLIC_URL}/assets/biblia.pdf`,
    comic: `${process.env.PUBLIC_URL}/assets/comic.pdf`,
  };

  const handleViewPdf = (type) => {
    setPdfFile(pdfFiles[type]);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Proyecto Transmedia</h1>
      <p>Bienvenido a la presentación del proyecto. Selecciona una sección para ver su contenido:</p>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => handleViewPdf('storyboard')}>Ver Storyboard</button>
        <button onClick={() => handleViewPdf('biblia')}>Ver Biblia Transmedia</button>
        <button onClick={() => handleViewPdf('comic')}>Ver Cómic</button>
      </div>
      
      {pdfFile ? (
        <Worker workerUrl={pdfWorker}>
          <div style={{ height: '750px', border: '1px solid #ccc' }}>
            <Viewer fileUrl={pdfFile} />
          </div>
        </Worker>
      ) : (
        <p>Seleccione una sección para visualizar el contenido</p>
      )}
    </div>
  );
};

export default App;
