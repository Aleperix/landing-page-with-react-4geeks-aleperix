import React from "react"; //Main React.js library

//create your first component
const Card = (props) => {
	return (
            <div className="card text-center mx-2 my-4" style={{"width": "16rem"}}>
                <img className="card-img-top" src={imageList[props.image]} alt="Card image cap" style={{"height": "160px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, molestiae.</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
	);
};

const imageList = {
	img1: "https://static.educalingo.com/img/en/800/nature.jpg",
	img2: "https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg",
    img3: "https://cdn.corporate.walmart.com/dims4/WMT/572511c/2147483647/strip/true/crop/1920x1066+0+7/resize/980x544!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a19c13e1ca65f193%2Fbusinessfornature-banner.png",
    img4: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325466_1100-800x825.jpg"
};

export default Card;