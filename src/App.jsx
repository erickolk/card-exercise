
import Profile from "./Profile/index.jsx"
import ellipse from "../src/assets/Ellipse 2.png"

export default function App() {
  return(
    <div className="bg-blue-500 w-screen h-screen flex justify-center items-center">
      <Profile avatar={ellipse}/>
    </div>
  )
}