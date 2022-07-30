import React from "react";
import "./ExploreMore.css";
import ExploreMoreCard from "./../../Components/ExploreMoreCard/ExploreMoreCard";

const ExploreMore = () => {
  const cards = [
    {
      _id: "1",
      title: "Pet treates our picks food of favorite recipes",
      url: "https://waggfoods.com/assets/images/products/_productImage1xWebp/137/wagg_tasty_bones_150g.webp",
    },
    {
      _id: "2",
      title: "Top grooming tips for your dog this summer",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/8281/chicken-wagg-12kg-new-active.webp",
    },
    {
      _id: "3",
      title: "10 Dog facts you might not already know",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/244/wagg-special-diets.webp",
    },
    {
      _id: "4",
      title: "Most famous puppy foods that are more to explore",
      url: "https://waggfoods.com/assets/images/categories/_productImage1xWebp/243/wagg-puppy.webp",
    },
  ];

  return (
    <>
      <div className="main-container-for-explore-more">
        <div className="wid-for-explore-more-compo">
          <div className="heading-text-and-explore-button">
            <div className="heading-in-explore-more">
              <p className="sweet-inspiration-text-heading">
                Sweet Inspirations
              </p>
              <p className="iduldge-in-our-text-heading">
                Induldge in our latest recipes, tips and more!
              </p>
            </div>
            <div className="button-for-explore-more-in-heading">
              <button type="submit" className="explore-more-btn">
                Explore More
              </button>
            </div>
          </div>
          <div className="cards-for-explore-more-and-read-more-about-us">
            {cards.map((val, index) => (
              <ExploreMoreCard cardDetail={val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreMore;
