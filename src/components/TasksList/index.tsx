import styles from './styles.module.css'
import cilpboardImg from '../../assets/images/clipboard.svg'
import checkImg from '../../assets/images/check.svg'
import checkedImg from '../../assets/images/checked.svg'
import { tasks } from '../../App'
import { Dispatch, SetStateAction } from 'react'

export interface TasksListProps {
  tasksList: tasks[],
  setTasksList: Dispatch<SetStateAction<tasks[]>>
}

export function TasksList({ tasksList, setTasksList }: TasksListProps) {

  const tasksCompleted = tasksList.reduce((acc, task) => {
    if (task.isCompleted) {
      acc++
    }
    return acc
  }, 0)

  function handleTaskCompleted(id: string) {
    const newTasks = tasksList.filter(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })

    setTasksList(newTasks)
  }

  function deleteTask(id: string) {
    const newTasks = tasksList.filter(task => {
      return task.id !== id
    })

    setTasksList(newTasks)
  }

  return (
    <div className={styles.container}>
      <header>
        <h2>Tarefas criadas <span>{tasksList.length}</span></h2>
        <h2>Concluídas <span>{tasksList.length !== 0 ? `${tasksCompleted} de ${tasksList.length}` : tasksCompleted}</span></h2>
      </header>

      {tasksList.length !== 0 ? (
        <ul className={styles.contentList}>
          {tasksList.map(task => (
            <li className={styles.contentListItem} key={task.id}>
              <button onClick={() => handleTaskCompleted(task.id)}>
                {task.isCompleted ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={styles.checked}>
                  <g opacity="0.9">
                    <path d="M11.9801 19.4262C16.0726 19.4262 19.3903 16.1085 19.3903 12.0159C19.3903 7.92336 16.0726 4.60568 11.9801 4.60568C7.8875 4.60568 4.56982 7.92336 4.56982 12.0159C4.56982 16.1085 7.8875 19.4262 11.9801 19.4262Z" fill="currentColor" />
                    <path d="M11.9643 4.85957C13.3765 4.85957 14.7571 5.27835 15.9313 6.06296C17.1056 6.84757 18.0208 7.96276 18.5612 9.26752C19.1017 10.5723 19.2431 12.008 18.9676 13.3931C18.6921 14.7782 18.012 16.0505 17.0134 17.0492C16.0148 18.0478 14.7424 18.7278 13.3573 19.0034C11.9722 19.2789 10.5365 19.1375 9.23173 18.597C7.92697 18.0566 6.81178 17.1414 6.02717 15.9671C5.24257 14.7929 4.82378 13.4123 4.82378 12.0001C4.8311 10.1085 5.58574 8.29657 6.92326 6.95905C8.26079 5.62153 10.0728 4.86688 11.9643 4.85957ZM11.9643 3.27279C10.2397 3.27985 8.55592 3.79768 7.12543 4.76093C5.69494 5.72417 4.58191 7.08964 3.92683 8.68495C3.27176 10.2803 3.10401 12.0339 3.44478 13.7245C3.78554 15.415 4.61954 16.9667 5.84148 18.1837C7.06342 19.4006 8.61852 20.2283 10.3105 20.5622C12.0024 20.896 13.7553 20.7211 15.348 20.0595C16.9406 19.398 18.3015 18.2794 19.2589 16.8449C20.2163 15.4105 20.7272 13.7246 20.7273 12.0001C20.7273 10.851 20.5003 9.71319 20.0595 8.65202C19.6187 7.59084 18.9727 6.62716 18.1585 5.81629C17.3443 5.00542 16.378 4.36332 15.315 3.92684C14.2521 3.49036 13.1134 3.26809 11.9643 3.27279Z" fill="currentColor" />
                    <path d="M15.4306 9.34212L11.0986 13.6741L8.61618 11.1916L7.78027 12.0275L11.0986 15.3459L16.2665 10.178L15.4306 9.34212Z" fill="#F2F2F2" />
                  </g>
                </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.check}>
                    <path d="M11.9643 4.85958C13.3765 4.85958 14.7571 5.27836 15.9313 6.06297C17.1056 6.84757 18.0208 7.96277 18.5612 9.26752C19.1017 10.5723 19.2431 12.008 18.9676 13.3931C18.6921 14.7782 18.012 16.0505 17.0134 17.0492C16.0148 18.0478 14.7424 18.7278 13.3573 19.0034C11.9722 19.2789 10.5365 19.1375 9.23173 18.597C7.92697 18.0566 6.81178 17.1414 6.02717 15.9671C5.24257 14.7929 4.82378 13.4123 4.82378 12.0001C4.8311 10.1085 5.58574 8.29658 6.92326 6.95906C8.26079 5.62154 10.0728 4.86689 11.9643 4.85958ZM11.9643 3.2728C10.2397 3.27986 8.55592 3.79769 7.12543 4.76093C5.69494 5.72418 4.58191 7.08964 3.92683 8.68495C3.27176 10.2803 3.10401 12.0339 3.44478 13.7245C3.78554 15.415 4.61954 16.9667 5.84148 18.1837C7.06342 19.4007 8.61852 20.2283 10.3105 20.5622C12.0024 20.896 13.7553 20.7211 15.348 20.0595C16.9406 19.398 18.3015 18.2794 19.2589 16.845C20.2163 15.4105 20.7272 13.7246 20.7273 12.0001C20.7273 10.851 20.5003 9.7132 20.0595 8.65202C19.6187 7.59085 18.9727 6.62717 18.1585 5.8163C17.3443 5.00543 16.378 4.36333 15.315 3.92685C14.2521 3.49037 13.1134 3.2681 11.9643 3.2728Z" fill="currentColor" />
                  </svg>
                )}
              </button>
              <span className={task.isCompleted ? styles.isCompleted : ''}>{task.content}</span>
              <button
                className={styles.contentListItemTrash}
                onClick={() => deleteTask(task.id)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={styles.trash}>
                  <path d="M14.2021 9.98548H12.8716V15.5073H14.2021V9.98548Z" fill="currentColor" />
                  <path d="M11.4624 9.98548H10.1318V15.5073H11.4624V9.98548Z" fill="currentColor" />
                  <path d="M18.478 7.16712C18.4754 7.03061 18.4295 6.89846 18.3469 6.78975C18.2642 6.68104 18.1492 6.6014 18.0184 6.56232C17.9596 6.53782 17.8974 6.52252 17.8339 6.51696H14.2868C14.1525 6.07791 13.8808 5.69355 13.5117 5.42047C13.1426 5.14739 12.6956 5 12.2365 5C11.7774 5 11.3304 5.14739 10.9613 5.42047C10.5922 5.69355 10.3205 6.07791 10.1862 6.51696H6.63911C6.58068 6.51814 6.52269 6.52729 6.46674 6.54418H6.45162C6.31318 6.58701 6.19334 6.67547 6.11163 6.79515C6.02992 6.91483 5.99117 7.05866 6.00169 7.20319C6.01222 7.34771 6.0714 7.48441 6.16958 7.59099C6.26776 7.69757 6.39916 7.76774 6.54234 7.79006L7.25298 17.5334C7.26382 17.9127 7.41693 18.2741 7.68191 18.5458C7.94688 18.8175 8.30435 18.9797 8.68332 19H15.7867C16.1662 18.9804 16.5244 18.8186 16.79 18.5468C17.0556 18.2751 17.2092 17.9132 17.22 17.5334L17.9277 7.79914C18.0802 7.77797 18.22 7.70232 18.3212 7.58615C18.4223 7.46999 18.478 7.32116 18.478 7.16712ZM12.2365 6.21456C12.3661 6.21458 12.4943 6.24146 12.6129 6.29351C12.7316 6.34556 12.8382 6.42164 12.926 6.51696H11.547C11.6346 6.42135 11.7411 6.34507 11.8599 6.29299C11.9786 6.24092 12.1069 6.21421 12.2365 6.21456ZM15.7867 17.7904H8.68332C8.60168 17.7904 8.47467 17.6573 8.45955 17.4457L7.75798 7.81123H16.715L16.0135 17.4457C15.9984 17.6573 15.8714 17.7904 15.7867 17.7904Z" fill="currentColor" />
                </svg>
              </button>
            </li>
          ))}
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