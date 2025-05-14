import React from "react";
import CardImage1 from "../assets/news-image1.png";
import CardImage2 from "../assets/news-image2.png";
import CardImage3 from "../assets/news-image3.png";
import CardImage4 from "../assets/news-image4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../popular.css"

const NewsCard = () => {
  const popular_card_data = [
    {
      card_image: CardImage2,
      card_title: "Heavenly Spiced Chicken",
      card_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      card_image: CardImage1,
      card_title: "Cheese Burst Burger",
      card_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      card_image: CardImage3,
      card_title: "Classic Tiramisu",
      card_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      card_image: CardImage4,
      card_title: "Truffle Mushroom Risotto",
      card_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
            className="w-full  h-auto"
          >
            <div className="popular-card group w-[400px] h-full mx-auto rounded-lg overflow-hidden relative font-['Jost']">
              {/* Image Container */}
              <div className="relative w-[250px] h-full">
                <img
                  src={CardImage1}
                  alt="card"
                  className="w-[400px] h-full object-cover"
                />
               
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                <h3 className="text-lg font-bold">Truffle Mushroom Risotto"</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit}
                </p>
              </div>
            </div>
            <div className="popular-card group w-[400px] h-full mx-auto rounded-lg overflow-hidden relative font-['Jost']">
              {/* Image Container */}
              <div className="relative w-[250px] h-full">
                <img
                  src={CardImage1}
                  alt="card"
                  className="w-[400px] h-full object-cover"
                />
               
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                <h3 className="text-lg font-bold">Truffle Mushroom Risotto"</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit}
                </p>
              </div>
            </div>
            <div className="popular-card group w-[400px] h-full mx-auto rounded-lg overflow-hidden relative font-['Jost']">
              {/* Image Container */}
              <div className="relative w-[250px] h-full">
                <img
                  src={CardImage1}
                  alt="card"
                  className="w-[400px] h-full object-cover"
                />
               
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                <h3 className="text-lg font-bold">Truffle Mushroom Risotto"</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit}
                </p>
              </div>
            </div>
            <div className="popular-card group w-[400px] h-full mx-auto rounded-lg overflow-hidden relative font-['Jost']">
              {/* Image Container */}
              <div className="relative w-[250px] h-full">
                <img
                  src={CardImage1}
                  alt="card"
                  className="w-[400px] h-full object-cover"
                />
               
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end pb-10 pl-3 pr-6 text-white">
                <h3 className="text-lg font-bold">Truffle Mushroom Risotto"</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit}
                </p>
              </div>
            </div>
          </Carousel>
        </>
      ) : (
        <>
          {popular_card_data.map(
            ({ card_image, card_title, card_description }) => (
              <div className="popular-card group w-[400px] h-full rounded-lg overflow-hidden relative font-['Jost']">
                {/* Image Container */}
                <div className="relative w-auto h-full">
                  <img
                    src={card_image}
                    alt="card"
                    className="w-[400px] h-auto object-cover"
                  />
                 
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end pb-5 pl-3 pr-5 text-white">
                  <div className="w-full h-[130px] bg-red-500 ">
                        <h3 className="text-lg font-bold">{card_title}</h3>
                  <p className="text-sm">{card_description}</p>
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

export default NewsCard
