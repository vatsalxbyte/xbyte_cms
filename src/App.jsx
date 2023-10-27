import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Sidebar from './components/Sidebar'
// import List from './components/List'
// import Content from './components/Content'
import TaskList from './components/List'
import TASKS from './json'
import Nevbar from './components/Nevbar'
import LeftSidebar from './components/LeftSidebar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //  {/* <Sidebar />
    //  <List/> */}
    //  <Content />
    // </>
    <div className="App">
      {/* < Nevbar/>
      
    <TaskList tasks={TASKS} /> */}

    <LeftSidebar />

    </div>
  )
}

export default App
