import styles from './page.module.css';
import NavBar from './components/Nav/NavBar';

export default function Home() {
  return (
    <main>
      <NavBar />
      <h1 className={styles.homeH1}>Hello!</h1>
    </main>
  )
}
