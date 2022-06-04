import styles from './styles.module.css'
import cilpboardImg from '../../assets/images/clipboard.svg'
import checkImg from '../../assets/images/check.svg'
import checkedImg from '../../assets/images/checked.svg'
import trashImg from '../../assets/images/trash.svg'

import { useState } from 'react'

interface tasks {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function TasksList() {

  const [tasksList, setTasksList] = useState<tasks[]>([
    {
      id: 1,
      content: 'Sou a primeira tarefa',
      isCompleted: false
    },
    {
      id: 2,
      content: 'Sou a segunda tarefa',
      isCompleted: true
    }
  ])

  return (
    <div className={styles.container}>
      <header>
        <h2>Tarefas criadas <span>0</span></h2>
        <h2>Concluídas <span>0</span></h2>
      </header>

      {tasksList.length !== 0 ? (
        <ul className={styles.contentList}>
          {tasksList.map(task => (
            <li className={styles.contentListItem}>
              <button>
                <img 
                  src={task.isCompleted ? checkedImg : checkImg}  
                  alt="Caixa de seleção para concluir tarefa" 
                />
              </button>
              <span className={task.isCompleted ? 'isCompleted' : ''}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illum quidem saepe eveniet at veniam temporibus quisquam dolor ipsum.</span>
              <button className={styles.contentListItemTrash}>
                <img src={trashImg} alt="Ícone de lixeira para excluir a tarefa" />
              </button>
            </li>
          ))}
          {/* <li className={styles.contentListItem}>
            <img src={checkImg} alt="Caixa de seleção para concluir tarefa" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illum quidem saepe eveniet at veniam temporibus quisquam dolor ipsum.</span>
            <img src={trashImg} alt="Ícone de lixeira para excluir a tarefa" />
          </li> */}
        </ul>
      ) : (
        <div className={styles.emptyContent}>
          <div className={styles.emptyContentList}>
            <img src={cilpboardImg} alt="Caderno de tarefas vazio" />
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}

    </div>
  )
}