import React from "react";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import { Link } from "react-router-dom";
import SideMenu from "../../components/sideMenu/SideMenu.jsx";

const SinglePost = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Free-download-Retrowave-Wallpaper-HD.png"
          alt=""
        />
        <div className="user">
          <img
            src="https://i.etsystatic.com/16205647/r/il/34ebfa/2510573402/il_1080xN.2510573402_753w.jpg"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 20 minutes ago</p>
          </div>
          <div className="edit">
            <Link to="/createpost?edit=2" className="link">
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic
          sit modi maxime minus, repellendus quod voluptates blanditiis
          molestias provident doloremque, doloribus at vel ut. Ducimus eum odit
          voluptatum consequuntur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Expedita hic sit modi maxime minus, repellendus quod
          voluptates blanditiis molestias provident doloremque, doloribus at vel
          ut. Ducimus eum odit voluptatum consequuntur. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Expedita hic sit modi maxime minus,
          repellendus quod voluptates blanditiis molestias provident doloremque,
          doloribus at vel ut. Ducimus eum odit voluptatum consequuntur. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Expedita hic sit
          modi maxime minus, repellendus quod voluptates blanditiis molestias
          provident doloremque, doloribus at vel ut. Ducimus eum odit voluptatum
          consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Expedita hic sit modi maxime minus, repellendus quod voluptates
          blanditiis molestias provident doloremque, doloribus at vel ut.
          Ducimus eum odit voluptatum consequuntur.
        </p>
      </div>
      <SideMenu />
    </div>
  );
};

export default SinglePost;
