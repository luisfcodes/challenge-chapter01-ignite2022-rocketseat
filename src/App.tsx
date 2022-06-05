import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

export interface tasks {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {

  const [tasksList, setTasksList] = useState<tasks[]>([])

  return (
    <>
      <Header />
      <main>
        <NewTask tasksList={tasksList} setTasksList={setTasksList}/>
        <TasksList tasksList={tasksList} setTasksList={setTasksList}/>
      </main>
    </>
  )
}
