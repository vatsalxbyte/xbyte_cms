import './App.css'
import TaskList from './components/List'
import TASKS from './json'
import Nevbar from './components/Nevbar'
import LeftSidebar from './components/LeftSidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar'


function App() {

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
