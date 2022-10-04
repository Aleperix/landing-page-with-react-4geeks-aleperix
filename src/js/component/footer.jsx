import React from "react"; //Main React.js library


//create your first component
const Footer = () => {
    let currentYear = document.write(new Date().getFullYear())
	return (
        <footer className="text-center text-white bg-dark p-4">
                Copyright &copy; Your Website {new Date().getFullYear()}
        </footer>
	);
};

export default Footer;
