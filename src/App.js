import React, { useState, useEffect } from 'react';
import './styles/global.css';
import './styles/App.css';
import './styles/Sidebar.css';
import './styles/Main.css';
import api from './services/api';
import ClienteItem from './components/ClienteItem/index';
import ClienteForm from './components/ClienteForm/index';

const App = () => {
  const [clientes, setClientes] = useState([]);

  // useEffect(() => {
  //   async function loadClients() {
  //     const headers = {
  //       Authorization: 'Bearer b6f7f1d5-5e41-4022-abca-df09c4feee44',
  //     };
  //     // const response = await api.get('/api/cliente', { headers });
  //     setClientes(dataClient);
  //   }
  //   loadClients();
  // }, []);

  async function handleAddClient(data) {
    const id =
      clientes[clientes.length - 1] !== undefined
        ? clientes[clientes.length - 1].id
        : 0;
    const dataCliente = {
      id,
      ...data,
    };

    dataCliente.id += 1;
    setClientes([...clientes, dataCliente]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <ClienteForm onSubmit={handleAddClient} />
      </aside>

      <main>
        <ul>
          {clientes.map(cliente => (
            <ClienteItem key={cliente.id} cliente={cliente} />
          ))}
        </ul>
      </main>
    </div>
  );
};
export default App;
