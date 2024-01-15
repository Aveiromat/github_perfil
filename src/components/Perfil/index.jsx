import React from 'react';
import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    // URL da imagem padrão
    const imagemPadraoUrl = 'https://cdn.icon-icons.com/icons2/3395/PNG/512/loading_search_icon_214009.png';

    return (
        <header className={styles.header}>
            <img
                className={styles.avatar}
                src={`https://github.com/${nomeUsuario}.png`}
                onError={(e) => {
                    e.target.src = imagemPadraoUrl;
                }}
                alt={`Avatar de ${nomeUsuario}`}
            />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    );
}

export default Perfil;
