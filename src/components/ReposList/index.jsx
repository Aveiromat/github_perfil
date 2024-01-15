import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(false);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setDeuErro(false); // Limpar o erro ao iniciar uma nova busca

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Not Found");
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch(error => {
                if (error.message === "Not Found") {
                    setDeuErro(true); // Usuário não encontrado
                } else {
                    setDeuErro(true); // Outro tipo de erro
                }
                setEstaCarregando(false); // Certifique-se de limpar a flag de carregamento em caso de erro
            });
    }, [nomeUsuario]);

    return (
        <div className={styles.error}>
            {deuErro ? (
                <h1 className={styles.error} >Usuário não encontrado.</h1>
            ) : (
                <>
                    {estaCarregando ? (
                        <h1 className={styles.loadingScreen}>Carregando...</h1>
                    ) : (
                        <ul className={styles.list}>
                            {repos.map(({ id, name, language, html_url }) => (
                                <li className={styles.listItem} key={id}>
                                    <div className={styles.itemName}>
                                        <b>Nome:</b>
                                        {name}
                                    </div>
                                    <div className={styles.itemLanguage}>
                                        <b>Linguagem:</b>
                                        {language}
                                    </div>
                                    <a className={styles.itemLink} target="_blank" href={html_url}>
                                        LINK
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
}

export default ReposList;
