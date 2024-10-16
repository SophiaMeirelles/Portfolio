import Container from '../../Components/Container'
import styles from './Home.module.css'

function Home() {
    return (
       <>
        <Container>
        <article className={styles.article}>
                <div>
                  <h1 className={styles.H1}>Olá,me chamo</h1>
                      <text className={styles.TEXT}>Sophia Meirelles</text>
                  <h2 className={styles.H2}>Web developer e designer</h2>
                </div>
            </article>
        </Container>
        </> 
    )
}

export default Home