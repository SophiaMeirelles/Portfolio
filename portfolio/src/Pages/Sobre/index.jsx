import styles from './Sobre.module.css'
import html from './path/html.png';
import css from './path/css.png';
import js from './path/js.png';
import react from './path/react.png';
import figma from './path/figma.png';

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <div className={styles.textos}>
                    <h1>Sobre</h1>
                    <p>•Me chamo Sophia e tenho 17 anos</p>
                    <p>•Estudo no colégio de ensino técnico em informática Cotemig</p>
                    <p>•Sou apaixonada por arte e tecnologia</p>
                    <p>•Tenho forte interesse em Design Web/Mobile, Desenvolvimento Front-end e UI/UX.</p>
                    <p>•Atuo como CDO/ Web designer/ Dev. Front-end na startup <a href="https://www.linkedin.com/company/transporte-respons%C3%A1vel-escolar-m%C3%B3vel/posts/?feedView=all">TREM</a> (Transporte Responsável Escolar Móvel)</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h1>Techs</h1>
                <div className={styles.icones}>
                    <img src={figma} alt="icone do figma" />
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                </div>
            </div>

        </section>
    )
}

export default Sobre