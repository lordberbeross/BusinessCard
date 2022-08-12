import "./Info.css";
import image from "../images/image.jpg"
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

function Info (){
	return(
			<div className="card-container">
				<img src={image} alt="profile-photo"/>
				<h2>Mustafa Berber</h2>
				<h3>Front-End Developer</h3>
				<h4>mustafaberber.io</h4>
				<div className="button-area">
					<p className="button-1"><MdEmail style={{width:12.8, height:9.6, color:"1E1F26", marginRight:5}}/>Email</p>
					<p className="button-2"><FaLinkedin style={{width:12.8, height:9.6, marginRight:5}}/>Llnkedin</p>
				</div>

				<About/>
				<Interests/>
				<Footer/>
			</div>

		);
}
export default Info;