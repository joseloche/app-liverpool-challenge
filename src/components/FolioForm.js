import React, { useState } from 'react';

function FolioForm({ onFolioAdded }) {
  const [newFolio, setNewFolio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.100.85:9000/api/liverpool-challenge/folio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ folio: newFolio }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el folio');
      }

      const data = await response.json();
      console.log(data);

      // Notificar al componente principal sobre el nuevo folio
      onFolioAdded();
      setNewFolio('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='folioInput'>Nuevo Folio:</label>
        <input
          type='text'
          id='folioInput'
          value={newFolio}
          onChange={(e) => setNewFolio(e.target.value)}
          className='form-control'
          placeholder='Ingrese el nuevo folio'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Enviar Folio
      </button>
    </form>
  );
}

export default FolioForm;
