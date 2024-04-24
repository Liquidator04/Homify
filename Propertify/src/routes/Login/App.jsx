import BackgroundImage from "../Homepage/BackgroundImage"
import Search from "../../Utilities/Search" 
import Footer from "../../Utilities/Footer"
import Header from "../../Utilities/Header"
import "./App.css"

function App3() {

  return (
    <>
      <div id="login_container1">
        <div id="login_container2">
          <div className="flex_container">
            <img src="/Logo.jpg" height={30} width={30} className="image-container" id="logo_img"></img>
          </div>
          <br/><br/>
          <div className="flex_container">
            <h1 id="login_h1" className="login">Sign in to Homify</h1>
          </div>
          <br/>
          <div id="login_container4" className="login">
            <p>Username or email address</p>
            
            <input type="text" className="login_input"></input>
            
            <p>Password</p>
            
            <input type="password" className="login_input"></input>
            
            <a href="/"><button class="submit_button">Sign in</button></a>
          </div>
          <br/><br/>
          <div id="login_container5" className="flex_container">
            <p>New to Homify?</p> <a href="/CreateAccount">Create an account</a>
          </div>
        </div> 
      </div>
      <Footer/>
    </>
  )
}

export default App3
