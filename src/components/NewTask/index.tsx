import styles from './styles.module.css'
import plusImg from '../../assets/images/plus.svg'

import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TasksListProps } from '../TasksList';

export function NewTask({ tasksList, setTasksList }: TasksListProps){

  const [taskTitle, setTaskTitle] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  function handleNewTitle(event: ChangeEvent<HTMLInputElement>){
    setTaskTitle(event.target.value)
  }

  function handleNewTask(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    taskTitle.length !== 0 && setTasksList(
    [...tasksList, {
      id: uuidv4(),
      content: taskTitle,
      isCompleted: false
    }])

    setTaskTitle('')
  }

  return (
    <form onSubmit={handleNewTask} className={styles.container}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        value={taskTitle}
        onChange={handleNewTitle}
        className={isFocused ? styles.isFocused : ''}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button type='submit'>
        Criar
        <img src={plusImg} alt="Sinal de adição" />
      </button>
    </form>
  )
}