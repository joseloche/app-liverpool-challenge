import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import Nabvar from './components/Navbar';
import Folios from './components/Folios';
import FolioForm from './components/FolioForm';

function App() {
  const [folios, setFolios] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Función para obtener los folios
  const getFolios = async (term = '') => {
    try {
      const response = await fetch(`http://192.168.100.85:9000/api/liverpool-challenge/folio?folio=${term}`);
      const data = await response.json();
      console.log(data);
      setFolios(data);
    } catch (error) {
      console.error('Error fetching folios:', error);
    }
  };

  // Efecto para cargar folios al montar el componente y cuando searchTerm cambia
  useEffect(() => {
    getFolios(searchTerm);
  }, [searchTerm]);

  // Manejar la adición de un nuevo folio
  const handleFolioAdded = () => {
    getFolios(searchTerm); // Volver a cargar los folios después de agregar uno nuevo
  };

  return (
    <Fragment>
      <Nabvar brand='Liverpool-Challenge' />
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{ textAlign: 'center' }}>Lista De Folios</h2>
            <input
              type='text'
              placeholder='Buscar folios...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='form-control'
            />
            <Folios folios={folios} />
          </div>
          <div className='col-5'>
            <h2 style={{ textAlign: 'center' }}>Folios Form</h2>
            <FolioForm onFolioAdded={handleFolioAdded} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
