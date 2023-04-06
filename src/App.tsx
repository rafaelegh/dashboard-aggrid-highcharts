import Sidebar from './components/Sidebar/Sidebar'
import MainDash from './components/MainDash/MainDash'
import './App.css'
import { ChartExample } from './components/Cards/Chart'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  )
}

export default App
