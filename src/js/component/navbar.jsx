import React from "react"; //Main React.js library

const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="javascript:void(0)">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">Services</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
	);
};

export default Navbar;