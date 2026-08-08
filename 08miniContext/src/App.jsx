import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  

  return (
    <UserContextProvider>
      <h1>React - Api Context</h1>
       <Login/>
       <Profile/>
    </UserContextProvider>
  )
}

export default App

//"Context API" ek feature hai jo data ko
//  component tree mein share karne deta
//  hai bina har level pe props manually 
// pass kiye ("prop drilling" se bachne ke liye).