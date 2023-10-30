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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar'


function App() {
  // const [count, setCount] = useState(0)

  return (  
    <Router>
       <Topbar />
      <Routes>
        <Route path="*" element={<Nevbar />} />
        <Route path='/' element={<LeftSidebar />} />
        <Route path='/draganddropzone' element={<TaskList tasks={TASKS} />} />
      </Routes>
    </Router>
  )
}

export default App
