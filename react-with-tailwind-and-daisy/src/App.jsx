import Chart from './Component/Chart/Chart'
import NavBar from './Component/DaisyNavbar/NavBar/NavBar'
import GymPlans from './Component/GymPlans/GymPlans/GymPlans'
// import DaisyNavbar from './Component/DaisyNavbar/DaisyNavbar'

function App() {

  return (
    <>
      {/* <DaisyNavbar></DaisyNavbar> */}
      <NavBar></NavBar>
      <GymPlans></GymPlans>
      <Chart></Chart>
    </>
  )
}

export default App
