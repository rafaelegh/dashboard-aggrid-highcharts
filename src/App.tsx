import Sidebar from './components/Sidebar/Sidebar'
import MainDash from './components/MainDash/MainDash'
import RightSide from './components/RightSide/RightSide'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  )
}

export default App
