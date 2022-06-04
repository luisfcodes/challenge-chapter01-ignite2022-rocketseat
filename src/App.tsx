import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

export function App() {
  return (
    <>
      <Header />
      <main>
        <NewTask />
        <TasksList />
      </main>
    </>
  )
}
