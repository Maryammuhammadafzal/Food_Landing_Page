import React from "react";
import CardImage1 from "../assets/news-image1.png";
import CardImage2 from "../assets/news-image2.png";
import CardImage3 from "../assets/news-image3.png";
import CardImage4 from "../assets/news-image4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../popular.css";
import { FaArrowRightLong } from "react-icons/fa6";
const NewsCard = () => {
  const popular_card_data = [
    {
      card_image: CardImage2,
      card_title: "The Rise of Plant-Based Cuisine",
      card_description:
        "Plant-based meals are taking over the culinary world. Find out how they are revolutionizing the food industry!",
    },
    {
      card_image: CardImage1,
      card_title: "Spicy Foods & Their Health Benefits",
      card_description:
        "Did you know that eating spicy food can boost metabolism? Learn more about the benefits of adding spice to your meals.",
    },
    {
      card_image: CardImage3,
      card_title: "Best Street Foods Around the World",
      card_description:
        "Explore the top street food delights from different cultures. From tacos to satay, discover must-try dishes!",
    },
    {
      card_image: CardImage4,
      card_title: "Top Food Trends for This Year",
      card_description:
        "From fusion flavors to sustainable eating, check out the latest trends that food lovers are embracing.",
    },
  ];
  return (
    <>
      {window.innerWidth <= 768 ? (
        <>
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            className="w-full h-auto"
          >
            <div className=" w-[300px] mx-auto mb-18 h-auto relative font-['Jost']">
              {/* Image Container */}

              <img
                src={CardImage2}
                alt="card"
                className="w-auto h-[400px] bg-transparent shadow-2xl object-cover rounded-2xl"
              />
              {/* Content */}
              <div className="flex flex-col h-[210px] absolute -bottom-7 p-6 bg-white text-white">
                <div className="w-full h-auto flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-red-700">
                    The Rise of Plant-Based Cuisine
                  </h3>
                  <p className="text-xs text-red-700">
                    Plant-based meals are taking over the culinary world. Find
                    out how they are revolutionizing the food industry!
                  </p>
                  <button className="w-full flex justify-end text-orange-500 items-end">
                    <FaArrowRightLong size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-[300px] mx-auto  h-auto relative font-['Jost']">
              {/* Image Container */}

              <img
                src={CardImage1}
                alt="card"
                className="w-auto h-[400px] bg-transparent shadow-2xl object-cover rounded-2xl"
              />
              {/* Content */}
              <div className="flex flex-col h-[210px] absolute -bottom-7 p-6 bg-white text-white">
                <div className="w-full h-auto flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-red-700">
                    Spicy Foods & Their Health Benefits
                  </h3>
                  <p className="text-xs text-red-700">
                    Did you know that eating spicy food can boost metabolism?
                    Learn more about the benefits of adding spice to your meals.
                  </p>
                  <button className="w-full flex justify-end text-orange-500 items-end">
                    <FaArrowRightLong size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-[300px] mx-auto  h-auto relative font-['Jost']">
              {/* Image Container */}

              <img
                src={CardImage3}
                alt="card"
                className="w-auto h-[400px] bg-transparent shadow-2xl object-cover rounded-2xl"
              />
              {/* Content */}
              <div className="flex flex-col h-[210px] absolute -bottom-7 p-6 bg-white text-white">
                <div className="w-full h-auto flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-red-700">
                    Best Street Foods Around the World
                  </h3>
                  <p className="text-xs text-red-700">
                    Explore the top street food delights from different
                    cultures. From tacos to satay, discover must-try dishes!
                  </p>
                  <button className="w-full flex justify-end text-orange-500 items-end">
                    <FaArrowRightLong size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] mx-auto h-auto relative font-['Jost']">
              {/* Image Container */}

              <img
                src={CardImage4}
                alt="card"
                className="w-auto h-[400px] bg-transparent shadow-2xl object-cover rounded-2xl"
              />
              {/* Content */}
              <div className="flex flex-col h-[210px] absolute -bottom-7 p-6 bg-white text-white">
                <div className="w-full h-auto flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-red-700">
                    Top Food Trends for This Year
                  </h3>
                  <p className="text-xs text-red-700">
                    From fusion flavors to sustainable eating, check out the
                    latest trends that food lovers are embracing.
                  </p>
                  <button className="w-full flex justify-end text-orange-500 items-end">
                    <FaArrowRightLong size={20} />
                  </button>
                </div>
              </div>
            </div>
          </Carousel>
        </>
      ) : (
        <>
          {popular_card_data.map(
            ({ card_image, card_title, card_description }) => (
              <div className=" w-auto h-auto relative font-['Jost']">
                {/* Image Container */}

                <img
                  src={card_image}
                  alt="card"
                  className="w-auto h-[400px] bg-transparent shadow-2xl object-cover rounded-2xl"
                />
                {/* Content */}
                <div className="flex flex-col h-[210px] absolute -bottom-7 p-6 bg-white text-white">
                  <div className="w-full h-auto flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-red-700">
                      {card_title}
                    </h3>
                    <p className="text-xs text-red-700">{card_description}</p>
                    <button className="w-full flex justify-end text-orange-500 items-end">
                      <FaArrowRightLong size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </>
      )}
    </>
  );
};

export default NewsCard;
