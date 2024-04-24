import BackgroundImage from "../Homepage/BackgroundImage"
import Search from "../../Utilities/Search" 
import Footer from "../../Utilities/Footer"
import Header from "../../Utilities/Header"
import "./App.css"

function App2() {

  return (
    <>
        
        
        <div id="property_listing_container0"><Header/></div>

        <div id="property_listing_container1">
            <img id="skyscraper" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg"></img>

            <div id="property_listing_container2">
                <div id="property_listing_container3">
                    <h1>Property Listing</h1><br/>
                    <form action="/action_page.php">
                        <label for="property_name">Property Name:</label><br/>
                        <input type="text" id="property_name" name="property_name"/><br/>
                        <label for="location">Location:</label><br/>
                        <input type="text" id="location" name="location"/><br/>
                        <label for="monthly_rent">Monthly Rent:</label><br/>
                        <input type="text" id="monthly_rent" name="monthly_rent"/><br/>
                        <label for="area">Area (in sqft):</label><br/>
                        <input type="text" id="area" name="area"/><br/>

                        <label> Room Size:</label><br/>
                        <input type="radio" id="html" name="fav_language" value="HTML"/>
                        <label for="html">1 BHK</label><br/>
                        <input type="radio" id="css" name="fav_language" value="CSS"/>
                        <label for="css">2 BHK</label><br/>
                        <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                        <label for="javascript">3 BHK</label><br/>

                        <label for="phone">Phone no:</label><br/>
                        <input type="text" id="phone" name="phone"/><br/><br/>
                        <input type="file"/><br/>

                        <br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default App2
