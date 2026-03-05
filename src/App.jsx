import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import MainContainer from "./components/MainContainer/MainContainer";
import Footer from "./components/Footer/Footer";
import { Suspense, useState } from "react";

const fetchTask = async () => {
  const res = await fetch('/task.json')
  return res.json()
}

function App() {

  const taskPromise = fetchTask()

  const [inProgressCount, setInProgressCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)

  return (
    <>
      <header>
        <Navbar />

        <Banner
          inProgressCount={inProgressCount}
          resolvedCount={resolvedCount}
        />
      </header>

      <main className="max-w-[1440px] p-4 bg-gray-100">

        <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>

          <MainContainer
            taskPromise={taskPromise}
            setInProgressCount={setInProgressCount}
            setResolvedCount={setResolvedCount}
          />

        </Suspense>

      </main>

      <footer className="bg-black">
        <Footer />
      </footer>
    </>
  )
}

export default App