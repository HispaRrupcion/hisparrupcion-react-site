import React from 'react';

const corrupt = [
  {
    "NIT": 1, // Número Identificador de Tramas, se usa para identificar todos los casos de corrupción (que son muchos)
    "NAME": "Gürtel", // Nombre judicial de la trama (solo el nombre, no añadas "Caso", "Trama", o parecidos)
    "CONTEXTO": "Este caso es una prueba técnica, no es real.", // Una breve descripción del caso
    "COSTE": 300000, // Coste en Euros, sin céntimos, sin añadir la unidad, sin puntuación
    "IMPUTADOS": ["José", "Pepito"], // Nombres de los imputados, con apellidos
    "JUDICIAL": true, // Si es un caso investigado por los jueces, poner "true", si es una investigación independiente (sea de HR o no), poner "false"
  },
  {
    "NIT": 2,
    "CONTEXTO": "Este caso es una prueba técnica, no es real.",
    "COSTE": 300000,
    "IMPUTADOS": ["José", "Pepito"],
    "JUDICIAL": true,
  }
];

const Cases = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="case-card">
          <h3>Trama {item.NAME}</h3>
          <p>NIT: {item.NIT}</p>
          <p>Contexto: {item.CONTEXTO}</p>
          <p>Coste: {item.COSTE}€ (euros)</p>
          <p>Imputados: {item.IMPUTADOS.join(', ')}</p>
          <p>Judicial: {item.JUDICIAL.toString()}</p>
          <a href="undefined" className="cta-button">
            Ver trama completa
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cases;
