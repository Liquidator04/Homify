import BackgroundImage from "../Homepage/BackgroundImage"
import Search from "../../Utilities/Search" 
import Footer from "../../Utilities/Footer"
import Header from "../../Utilities/Header"
import "./App.css"

function App4() {

  return (
    <>
      <div id="login_container1">
        <div id="login_container2">
          <div className="flex_container">
            <img src="/Logo.jpg" height={30} width={30} className="image-container" id="logo_img"></img>
          </div>
          <br/><br/>
          <div className="flex_container">
            <h1 id="login_h1" className="login">Create Account</h1>
          </div>
          <br/>
          <div id="login_container4" className="login">
            <p>Username or email address</p>
            
            <input type="text" className="login_input"></input>
            
            <p>Password</p>
            
            <input type="password" className="login_input"></input>

            <p>Confirm password</p>
            
            <input type="password" className="login_input"></input>
            
            <a href="/LoginPage"><button id="submit_button">Sign up</button></a>
          </div>
          <br/><br/>
        </div> 
      </div>
      <Footer/>
    </>
  )
}

export default App4
