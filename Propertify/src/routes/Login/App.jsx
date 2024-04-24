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
          <div class="flex_container">
            <img src="/Logo.jpg" height={30} width={30} className="image-container" id="logo_img"></img>
          </div>
          <br/><br/>
          <div class="flex_container">
            <h1 id="login_h1" class="login">Sign in to Homify</h1>
          </div>
          <br/>
          <div id="login_container4" class="login">
            <p>Username or email address</p>
            <br/>
            <input type="text" class="login_input"></input>
            <br/><br/>
            <p>Password</p>
            <br/>
            <input type="password" class="login_input"></input>
            <br/><br/>
            <button id="submit_button">Sign in</button>
          </div>
        </div> 
      </div>
      <Footer/>
    </>
  )
}

export default App3
