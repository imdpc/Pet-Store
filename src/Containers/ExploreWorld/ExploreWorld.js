import React from "react";
import experts from "../../Assets/made by expert.png"
import "./ExploreWorld.css";
import ExploreWorldCard from "./../../Components/ExploreWorldCard/ExploreWorldCard";
const ExploreWorld = () => {
  const cards = [
    {
      _id: "1",
      name: "Made In Britain",
      url: "https://cdn-icons-png.flaticon.com/128/32/32719.png",
      para_text:
        "Personalized care for dogs in a seperate atrium. Great for those who can't play with other dogs,senior or those active.",
    },
    {
      _id: "2",
      name: "Made By Exports",
      url: experts,
      para_text:
        "Half Day includes up to 6 hours of play,socialization & you enrichment. Campers also enjoy meeting new friends.",
    },
    {
      _id: "3",
      name: "Love By Dogs",
      url: "https://cdn-icons-png.flaticon.com/128/1692/1692130.png",
      para_text:
        "Over the years, we've learned that dogs thrive on routines and activities that give them an opportunity to exercise.",
    },
  ];
  return (
    <>
      <div className="main-container-for-flex-center-for-exploreworld">
        <div className="exploreworld-wid-for-contain">
          {/* heading Explore more section  */}
          <div className="main-heading-in-world-explore">
            Explore Wagg's World <br /> and discover fun
          </div>
          {/* calling component  */}
          <div className="containing-all-cards-in-explorer">
            {cards.map((val, index) => (
              <ExploreWorldCard cardDetail={val} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreWorld;
