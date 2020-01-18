import React, { useState } from 'react';
import axios from 'axios';

function ClienteForm({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [uf, setUf] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  async function getServiceCep(e) {
    e.preventDefault();
    if (cep) {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
      if (data) {
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setUf(data.uf);
      }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      nome,
      cpf,
      cep,
      logradouro,
      bairro,
      // cidade: 'brasilia',
      uf,
      // complemento_endereco,
      telefone: ['(61) 99999-9999'],
      email: ['matheus@matheus.com'],
    });

    // setNome('');
    // setCep('');
    // setCpf('');
    // setLogradouro('');
    // setBairro('');
    // setUf('');
    // setComplemento('');
    // setTelefone('');
    // setEmail('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="nome_cliente">Nome</label>
        <input
          name="nome_cliente"
          id="nome_cliente"
          required
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="cpf_cliente">CPF</label>
        <input
          type="text"
          className="cpf-mask"
          name="cpf_cliente"
          id="cpf_cliente"
          required
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="cep_cliente">CEP</label>
        <input
          name="cep_cliente"
          id="cep_cliente"
          className="cep-mask"
          required
          value={cep}
          onChange={e => setCep(e.target.value)}
          onBlur={e => getServiceCep(e)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="logradouro_cliente">Logradouro</label>
        <input
          name="logradouro_cliente"
          id="logradouro_cliente"
          required
          value={logradouro}
          onChange={e => setLogradouro(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="bairro_cliente">Bairro</label>
        <input
          name="bairro_cliente"
          id="bairro_cliente"
          required
          value={bairro}
          onChange={e => setBairro(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="uf_cliente">UF</label>
        <input
          name="uf_cliente"
          id="uf_cliente"
          required
          value={uf}
          onChange={e => setUf(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="complemento_cliente">Complemento</label>
        <input
          name="complemento_cliente"
          id="complemento_cliente"
          value={complemento}
          onChange={e => setComplemento(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="telefone_cliente">Telefone</label>
        <input
          name="telefone_cliente"
          id="telefone_cliente"
          className="cel-sp-mask"
          required
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="email_cliente">Email</label>
        <input
          name="email_cliente"
          id="email_cliente"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default ClienteForm;
