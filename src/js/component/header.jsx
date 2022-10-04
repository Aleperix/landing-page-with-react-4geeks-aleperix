import React from "react"; //Main React.js library

const Jumbotron = () => {
	return (
        <div className="jumbotron bg-secondary bg-opacity-25 p-4">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius eos voluptatem porro, minima dolore vitae enim libero placeat? Reprehenderit!</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
    );
};

export default Jumbotron;