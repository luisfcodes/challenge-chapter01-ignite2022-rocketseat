import styles from './styles.module.css'
import logoImg from '../../assets/images/logo.svg'

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <img src={logoImg} alt="Imagem de um foguete com a escrita todo do lado" />
    </header>
  )
}