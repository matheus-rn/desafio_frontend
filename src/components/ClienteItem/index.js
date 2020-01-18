import React from 'react';
import './styles.css';

function ClienteItem({ cliente }) {
  return (
    <li className="item-cliente">
      <div className="nome-card">
        <strong>{cliente.nome}</strong>
      </div>
      <div>
        <span>{cliente.cpf}</span>
      </div>
      <div>
        <span>{cliente.cep}</span>
      </div>
      <div>
        <span>{cliente.logradouro}</span>
      </div>
      <div>
        <span>{cliente.bairro}</span>
      </div>
      <div>
        <span>{cliente.uf}</span>
      </div>
      <div>
        <span>{cliente.telefone[0]}</span>
      </div>
    </li>
  );
}

export default ClienteItem;
