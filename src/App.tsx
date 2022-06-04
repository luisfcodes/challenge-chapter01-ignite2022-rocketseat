import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

export function App() {
  return (
    <>
      <Header />
      <main>
        <NewTask />
      </main>
    </>
  )
}
