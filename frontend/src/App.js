import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './app.css';

function App() {
  const [InputFrutas, setInputFrutas] = React.useState("");
  const [InputTitulo, setInputTitulo] = React.useState("");

  //Redux
  const frutas = useSelector((state) => state.frutasReducer.frutas); 
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  const dispatch = useDispatch();

  function adicionaFruta(event) {
    event.preventDefault();

    const objFruta = {
      nome: InputFrutas
    }

    dispatch({type: "ADICIONAR", value: objFruta});
  }

  function alteraTitulo(event) {{
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }}

  return (
    <div className="container-forms">
      <div className="box-forms">
        <div className="section-01">
          <form>
            <label>Titulo</label><br/>
            <input placeholder="Digite o titulo" onChange={alteraTitulo} value={InputTitulo} />
          </form>
          <h1>{stateTitulo}</h1>
        </div>
        <div className="section-02">
          <form onSubmit={adicionaFruta}>
            <label>Digite uma Fruta...</label><br />
            <input placeholder="Digite uma Fruta" onChange={(event) => setInputFrutas(event.target.value)} value={InputFrutas} /><br />
            <button>Enviar</button>
          </form>
            {frutas.map((fruta, index) => {
              return (
                <li key={index}>{fruta.nome}</li>
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
