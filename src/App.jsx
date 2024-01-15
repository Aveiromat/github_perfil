import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import styles from './App.module.css';

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>

      <>
        <div className={styles.input}>
          <input placeholder="Search" className={styles.inputCenter} type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
        </div>
        <Perfil nomeUsuario={nomeUsuario} />
      </>

      {nomeUsuario.length >= 3 && (

        <ReposList nomeUsuario={nomeUsuario} />

      )}


      {/* {formularioEstaVisivel && ( //mount /  onmount
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App

/* ESTUDOS
<h1>Olá, {pessoa.nome}</h1>
<h2>Subtitulo</h2>
{estaDeDia === true ? 'Bom dia' : 'Boa noite'}
{estaDeDia ? 'Bom dia' : 'Boa noite'}
{estaDeDia && 'Bom dia'} */