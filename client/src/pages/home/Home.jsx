import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${cat}`);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
  //     desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
  //     img: "https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
  //     desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
  //     img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
  //     desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
  //     img: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1273516682.jpg?c=original",
  //   },
  //   {
  //     id: 4,
  //     title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
  //     desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
  //     img: "https://www.herbalife.com/dmassets/hn-one/en-us/product-catalog/category-image/NutritionTips_SusanBowerman_article1_770x515_USEN.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
  //     desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
  //     img: "https://poolegrammar.com/wp-content/uploads/3v8PB95CCSn86e5fowthRAybW4ajSY18z2FfVPi2spk.jpeg",
  //   },
  // ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id_post}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
