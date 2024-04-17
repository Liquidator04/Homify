import BackgroundImage from "../Homepage/BackgroundImage"
import Footer from "../../Utilities/Footer"
import Search from "../../Utilities/Search"
import "./App.css"
import SearchCard from "./SearchCard"

export default function App1(){
    return (
        <>
            <BackgroundImage/>
            <SearchCard IMGurl={"https://imagecdn.99acres.com/media1/24056/5/481125082M-1710849302847.jpg"} Name={"Vaishnavi Oasis"} Address={"JP Nagar, Bangalore"} Price={"₹48000"} Sqft={"1570 sqft"} BHK={"3 BHK"} ContactNumber={"9843212345"}/>
            <Footer/>
        </>
    )
}