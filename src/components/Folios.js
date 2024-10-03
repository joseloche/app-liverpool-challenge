import React from 'react';

function Folios({ folios }) {
  if (!folios || folios.length === 0) {
    return <p>No se encontraron folios.</p>;
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Folio</th>
          <th>Digest</th>
        </tr>
      </thead>
      <tbody>
        {folios.map(folio => (
          <tr key={folio.idFolio}>
            <td>{folio.idFolio}</td>
            <td>{folio.folio}</td>
            <td>{folio.digest}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Folios;
