import styles from './styles.module.css'
import plusImg from '../../assets/images/plus.svg'

export function NewTask(){
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button>
        Criar
        <img src={plusImg} alt="Sinal de adição" />
      </button>
    </div>
  )
}