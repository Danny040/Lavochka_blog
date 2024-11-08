import React, { useContext, useEffect, useState } from "react";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import { Link, useLocation } from "react-router-dom";
import SideMenu from "../../components/sideMenu/SideMenu.jsx";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../../context/authContext.jsx";

const SinglePost = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img
            src="https://i.etsystatic.com/16205647/r/il/34ebfa/2510573402/il_1080xN.2510573402_753w.jpg"
            alt=""
          />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to="/createpost?edit=2" className="link">
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <SideMenu />
    </div>
  );
};

export default SinglePost;
