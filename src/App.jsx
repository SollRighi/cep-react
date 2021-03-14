import './App.css';
import React from "react"
import buscaCep from 'cep-promise'

function App() {
  const [cep, defineCep] = React.useState("");
  const [cor, defineCor] = React.useState("#7fffd4")
  const [cepCarregado, defineCepCarregado] = React.useState();
  
  function alteraCep(e) {
    defineCep(e.target.value);
    defineCepCarregado()
   
  }

  async function click() {
    const resultado = await buscaCep(cep);
    defineCepCarregado(resultado)
  }

  function corFundo(e) {
    defineCor(e.target.value);
  }

  function limpaCep() {
    defineCepCarregado()
    defineCep("")
  }

  return (
    <div className="cep" style= {{backgroundColor: cor}}>
      <input type="color" value= {cor} onChange={corFundo}/>
      <br/>
      <input type= "text" value={cep} onChange={alteraCep}/>
      <input type="button" value= "botão" onClick={click}/>
      { cepCarregado &&
        <div>
        
          <h3> <span onClick= {limpaCep} style= {{cursor: "pointer"}}> X </span> Informações do CEP {cep}:</h3>
          <p> rua: {cepCarregado.street}</p>
          <p> bairro: {cepCarregado.neighborhood}</p>
          <p> cidade: {cepCarregado.city}</p>
          <p> estado: {cepCarregado.state}</p>
        </div> 
      }
    </div>

    
  );
}

export default App;
