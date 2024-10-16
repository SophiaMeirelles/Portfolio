import Container from '../../Components/Container'
import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
                <section className={styles.contatos}>
                    <div>
                        <h2>Contato</h2>
                        <p>Entre em contato para que possamos conversar mais!</p>
                    </div>

                    <div className={styles.icones}>
                        
                        <a href=''  rel='noopener noreferrer' className={styles.A}>
                            <GoMail className={styles.icone} />
                            <p>sophiameirellesbri@gmail.com</p>
                        </a>

                        <a href='https://github.com/SophiaMeirelles' rel='noopener noreferrer' className={styles.A}>
                            <BsGithub className={styles.icone} />
                            <p>https://github.com/SophiaMeirelles</p>
                        </a>

                        <a href='https://www.linkedin.com/in/sophiameirelles/' rel='noopener noreferrer' className={styles.A}>
                            <BsLinkedin className={styles.icone} />
                            <p>https://www.linkedin.com/in/sophiameirelles/</p>
                        </a>

                    </div>

                </section>
        </>
    )
}

export default Contatos
