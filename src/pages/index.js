import * as React from "react";
import { SEO } from "../components/seo"
import "../styles/global.css";
import Layout from "../components/layout";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Pizza from "../images/Pizza.png";
import SlicePizza from "../images/Slice Pizza.png";
import Mockup from "../images/Mockup.png";
import PizzaSlice from "../images/Pizza slice.png";
import RightPizza from "../images/rightPizza.png";
import LeftPizza from "../images/leftPizza.png";
import PngPizza from "../images/pngPizza.png";
import Review from "../JSON/review.json"
import BgPizza from "../images/BackgroundPizza.png"

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className=" px-4 py-2 absolute top-0 lg:right-[45%] shadow-[5px_10px_20px_rgba(0,0,0,0.16)] rounded-lg bg-white md:right-[43%] sm:right-[40%] right-[35%]" 
      onClick={() => onClick()}
    >
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.0687 19.5067L11.4962 11.2556C11.6794 11.0762 11.8089 10.8819 11.8846 10.6726C11.9615 10.4634 12 10.2392 12 10C12 9.76084 11.9615 9.53662 11.8846 9.32735C11.8089 9.11809 11.6794 8.92377 11.4962 8.74439L3.0687 0.493273C2.73282 0.164424 2.30534 0 1.78626 0C1.26718 0 0.839696 0.164424 0.503818 0.493273C0.16794 0.822122 0 1.24066 0 1.74888C0 2.2571 0.16794 2.67564 0.503818 3.00448L7.64886 10L0.503818 16.9955C0.16794 17.3244 0 17.7429 0 18.2511C0 18.7593 0.16794 19.1779 0.503818 19.5067C0.839696 19.8356 1.26718 20 1.78626 20C2.30534 20 2.73282 19.8356 3.0687 19.5067Z" fill="#7056B5"/>
</svg>

    </button>
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className=" px-4 py-2 absolute top-0 shadow-[5px_10px_20px_rgba(0,0,0,0.16)] bg-white rounded-lg lg:left-[45%] md:left-[43%] sm:left-[40%] left-[35%] "
      onClick={() => onClick()}
    >
     <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.9313 19.5067L0.503816 11.2556C0.32061 11.0762 0.191145 10.8819 0.115419 10.6726C0.0384728 10.4634 0 10.2392 0 10C0 9.76084 0.0384728 9.53662 0.115419 9.32735C0.191145 9.11809 0.32061 8.92377 0.503816 8.74439L8.9313 0.493273C9.26718 0.164424 9.69466 0 10.2137 0C10.7328 0 11.1603 0.164424 11.4962 0.493273C11.8321 0.822122 12 1.24066 12 1.74888C12 2.2571 11.8321 2.67564 11.4962 3.00448L4.35114 10L11.4962 16.9955C11.8321 17.3244 12 17.7429 12 18.2511C12 18.7593 11.8321 19.1779 11.4962 19.5067C11.1603 19.8356 10.7328 20 10.2137 20C9.69466 20 9.26718 19.8356 8.9313 19.5067Z" fill="#7056B5"/>
</svg>

    </button>
  );
};

const IndexPage = () => {
  const responsive = {
    xlsuperLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2224 },
      items: 5
    },
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2224, min: 1720 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1720, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };
  
  const Star = [1, 2, 3, 4, 5];
  return (
    <Layout >
      <div id="home" className="">
        <div className="bg-[#dc0023]  2xl:px-60   xl:px-40 lg:px-20  sm:px-10 px-5">
          <div className=" lg:px-10 pt-20 ">
            <h2 className="md:text-5xl text-3xl text-center font-light text-white leading-snug">
              Great <span className="font-bold">Food</span> , Great{" "}
              <span className="font-bold">Atmosphere</span>, <br></br> Great{" "}
              <span className="font-bold">People</span>
            </h2>
            <div className="flex justify-center w-full">
              <img
                src={Pizza}
                className="object-fill"
                alt="Pizza-buonpadrepizza"
              />
            </div>
          </div>
        </div>
        

        <div className="bg-[#FEC700]  flex md:flex-row flex-col 2xl:px-60   xl:px-40 lg:px-20  sm:px-10 px-5">
          <div
            className="md:w-[60%] relative flex md:bg-contain  md:bg-no-repeat  mt-10 
            "
            style={{ backgroundImage: `url('${SlicePizza}')` }}
          >
            <div className="md:absolute   md:top-0 md:right-0 bg-[#FEC700] md:bg-transparent ">
              <h2 className=" text-white lg:text-5xl  text-4xl font-semibold">
                Delivery available <br></br>
                ONLY ONLINE
              </h2>

              <h3 className="text-white ml-1 mt-3 lg:text-sm text-[16px]  tracking-wide text-sm font-semibold">
                WE OFFER ONLINE ORDERING AND DELIVERY SERVICES. <br></br>
                CALL TODAY TO PLACE A PIZZA ORDER
              </h3>
            </div>
          </div>

          <div className="md:w-[40%] flex justify-center mt-20">
            <img src={Mockup} alt="Mockup" width={400} />
          </div>
        </div>

        <div className="flex justify-between 2xl:px-60   xl:px-40 lg:px-20  sm:px-10 px-5 py-10">
          <div>
            <img src={LeftPizza} width={200} alt="LeftPizza" />
          </div>
          <ul className="flex md:flex-row  flex-col lg:gap-16 md:gap-10  gap-5 md:text-lg   text-[16px] items-center top-0 ">
            <li>
              {" "}
              <button className="px-4 py-4 hover:text-[#DC0023] bg-[#DC0023] text-white hover:bg-white  font-medium rounded-lg shadow-[5px_10px_15px_rgba(0,0,0,0.36)]">
                {" "}
                Take Out Orders
              </button>{" "}
            </li>
            <li>
              {" "}
              <button className="px-4 py-4 hover:text-[#DC0023] bg-[#DC0023] text-white hover:bg-white  rounded-lg shadow-[5px_10px_15px_rgba(0,0,0,0.36)]">
                Our Menu
              </button>{" "}
            </li>
            <li>
              {" "}
              <button className="px-4 py-4 hover:text-[#DC0023] bg-[#DC0023]  text-white hover:bg-white  rounded-lg shadow-[5px_10px_15px_rgba(0,0,0,0.36)]">
                {" "}
                Delivery Order
              </button>
            </li>
          </ul>
          <div className="md:block hidden">
            <img src={RightPizza} width={200} alt="RightPizza" />
          </div>
        </div>
     
        <div className="py-20 2xl:px-60   xl:px-40 lg:px-20  sm:px-10 px-5 bg-cover bg-black  bg-fixed text-lg text-center leading-6 font-normal tracking-normal text-white"   style={{ backgroundImage: `url('${BgPizza}')` }} >
          <h2 className="text-center  font-bold Caveat placeholder: leading-10 text-3xl ">
            Buon Padre Pizza is proud to set the gold standard for Gourmet Pizza{" "}
            <br></br>
            in Chandler, AZ
          </h2>

          <h2 className="text-center Caveat  text-3xl leading-10  mt-5">
            THANK YOU FOR SUPPORTING YOUR LOCAL PIZZERIA
          </h2>
          </div>
      

        <div className="bg-[#DC0023] 2xl:px-60  flex md:flex-row flex-col  xl:px-40 lg:px-20  sm:px-10 px-5  py-20 ">
          <div className="md:w-[50%] lg:px-10 text-white">
            <h2 className=" text-4xl font-extrabold " >
              A Dining Experience with <br></br>Buon Padre Pizza
            </h2>
            <p className="mt-10 md:text-lg   text-[16px]">
              {" "}
              Buon Padre Pizza located in Chandler, AZ. Buon Padre means “Good
              father” in Italian. To us at Buon Padre Pizza, it means great
              pizza, wings, calzones, breads and salads, at affordable prices
              with a terrific family-friendly service. That's not all, at Buon
              Padre’s you'll be treated to our one-of-a-kind Gourmet Grilled
              Hotdog Pizza, it's a specialty that cannot be duplicated. Once
              you've had one slice you'll clamor for more!
            </p>

            <p className="mt-5 text-lg md:text-lg   text-[16px]">
              Buon Padre would not be complete without our gourmet pizzas,
              wings, and salads that all have a Mediterranean flair with a touch
              of mouth-watering fragrant spices and olive oils. We're family
              friendly so bring the kids and enjoy!
            </p>
          </div>
          <div className="md:w-[50%] overflow-hidden">
            <img
              src={PngPizza}
              className="flex justify-items-end h-full"
              alt="PngPizza"
            />
          </div>
        </div>

        <div className="bg-[#FFF2D1] 2xl:px-60   xl:px-40 lg:px-20  sm:px-10 px-5 pb-10">
          <h1 className="text-[#272727] text-center font-[600] pt-20 pb-7 leading-10 tracking-wide md:text-5xl text-4xl ">
            See what our <span className="text-[#7056B5]">#Pizzafam</span> say
            about us
          </h1>
            <div className=" ">
            <Carousel responsive={responsive} className="py-10"
      
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
             itemClass="lg:px-4 "
            >
            {Review.map((n)=>
              <div key={n.id} className=" bg-white mx-auto  shadow-[5px_10px_20px_rgba(0,0,0,0.26)] my-5 rounded-md  h-[400px] w-[300px]">
              <div className="flex flex-col p-5 gap-5  px-10">
                <div className="flex flex-row gap-5">
                  <div>
                    <img
                      className="rounded-2xl"
                      src={n.img}
                      width={60}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-[#272727]">
                      
                      {n.name}
                    </p>
                    <p className="text-sm font-normal text-[#3f3e3e]">
                      {" "}
                      {n.location}
                    </p>
                    <div className="flex flex-row gap-2 mt-2">
                      {Star.map((n) => (
                        // <h1>{n}</h1>
                        <svg key={n}
                          width="16"
                          viewBox="0 0 30 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.7375 29L8.175 18.4625L0 11.375L10.8 10.4375L15 0.5L19.2 10.4375L30 11.375L21.825 18.4625L24.2625 29L15 23.4125L5.7375 29Z"
                            fill="#FFC700"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-lg leading-6">
                  {n.comment.slice(0, 250)}...<span className="font-medium cursor-pointer text-blue-500">Read more</span>
                </div>
              </div>
            </div>
            )}
            </Carousel>
            
          </div>
        </div>
       
        
        <div className="py-20 2xl:px-60   xl:px-40 lg:px-20  sm:px-10 px-5 bg-cover bg-black  bg-fixed md:text-lg   text-[16px] text-center leading-6 font-normal tracking-normal text-white"   style={{ backgroundImage: `url('${BgPizza}')` }} >
         
              <p>
              Buon Padre Pizza is located in Chandler, AZ. We offer pizza, wings, salads, beer, and gluten free options. Like most restaurants, we prepare and serve products that may contain gluten, egg, milk, soy, wheat or other allergens. While a particular food may not contain one of these allergens, our products may be prepared on the same equipment and in the same kitchen area as those that do. We cannot guarantee that cross contact with allergens will not occur and neither Buon Padre Pizza®, our employees, nor our franchisees assume any responsibility for a person's sensitivity or allergy to any food item provided in our restaurants. Variations may occur due to differences in suppliers, ingredient substitutions, recipe revisions, and/or product production at the restaurant.
              </p>
            </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO />
)
