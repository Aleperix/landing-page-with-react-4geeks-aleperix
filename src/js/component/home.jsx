import React from "react"; //Main React.js library
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./header.jsx";
import Navbar from "./navbar.jsx"


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div class="card-deck d-flex flex-wrap justify-content-center">
					<Card image="img1" />
					<Card image="img2" />
					<Card image="img3" />
					<Card image="img4" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
