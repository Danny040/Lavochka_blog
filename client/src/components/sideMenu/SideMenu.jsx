import React from "react";

const SideMenu = () => {
  const posts = [
    {
      id: 1,
      title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
      desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
      img: "https://img.freepik.com/free-photo/volumetric-musical-background-with-treble-clef-notes-generative-ai_169016-29576.jpg",
    },
    {
      id: 2,
      title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
      desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg",
    },
    {
      id: 3,
      title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
      desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1273516682.jpg?c=original",
    },
    {
      id: 4,
      title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
      desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
      img: "https://www.herbalife.com/dmassets/hn-one/en-us/product-catalog/category-image/NutritionTips_SusanBowerman_article1_770x515_USEN.jpg",
    },
    {
      id: 5,
      title: "Lidfoiwefijoiwjefwfdiojv sdvsdwevsd sdfsdf",
      desc: "Kodivlsidfj soidajf sijdf iaj ij oeiwjfisjef  sidahfhiuwheiufhowi e fi oisfjoishdf soidafoiwhe8yoihsvn sjdvsdofaiuowhfdhh.",
      img: "https://poolegrammar.com/wp-content/uploads/3v8PB95CCSn86e5fowthRAybW4ajSY18z2FfVPi2spk.jpeg",
    },
  ];

  return (
    <div className="sidemenu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
