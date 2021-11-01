import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function Formulario() {
    const [qtdPortas, setQtdPortas] = useState(3);
    const [portaComPresente, setPortaComPresente] = useState(1);
    return (
        <div className={styles.formulario}>
            <div>
                <Cartao bgcolor="#c0392c">
                    {" "}
                    <h1>Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica
                        value={qtdPortas}
                        onChange={(novaQtd) => setQtdPortas(novaQtd)}
                        text="Quantidade Portas ?"
                    />
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica
                        value={portaComPresente}
                        onChange={(novaPortaComPresente) => setPortaComPresente(novaPortaComPresente)}
                        text="Porta com Presente ?"
                    />
                </Cartao>
                <Cartao bgcolor="#28a085">
                    <Link passHref href={`/jogo/${qtdPortas}/${portaComPresente}` }>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Cartao>
            </div>
        </div>
        
    );
}
