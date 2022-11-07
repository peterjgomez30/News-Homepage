import React from "react";
import Hero from "./Assets/image-web-3-desktop.jpg";
import Pic1 from "./Assets/image-retro-pcs.jpg";
import Pic2 from "./Assets/image-top-laptops.jpg";
import Pic3 from "./Assets/image-gaming-growth.jpg";
const Main = () => {
  return (
    <main>
      <div className="main-container">
        <div className="main-blog">
          <picture>
            <img src={Hero} alt=""></img>
          </picture>
          <div className="blog-info">
            <h1 className="blog-title">The Bright Future of Web 3.0?</h1>
            <div className="blog-read">
              <p className="blog-content">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="new">
          <div className="new-container">
            <h2 className="new-heading">New</h2>
            <div className="new-blogs">
              <div className="new-blog">
                <h3 className="new-title">New Hydrogen VS Electric Cars</h3>
                <p className="new-content">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </div>
              <div className="new-blog">
                <h3 className="new-title">The Downsides of AI Artistry</h3>
                <p className="new-content">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <div className="new-blog">
                <h3 className="new-title">Is VC Funding Drying Up?</h3>
                <p className="new-content">
                  Private funding by VC firsm is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-blogs">
          <div className="bottom-blog">
            <img src={Pic1} alt="" />
            <div className="bottom-info">
              <h2 className="num">02</h2>
              <h3 className="bottom-title">Reviving Retro PCS</h3>
              <p className="bottom-content">
                {" "}
                What happens when old PCS are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="bottom-blog">
            <img src={Pic2} alt="" />
            <div className="bottom-info">
              <h2 className="num">03</h2>
              <h3 className="bottom-title">Top 10 Laptops of 2022</h3>
              <p className="bottom-content">
                Our best picks for various needs and budgets
              </p>
            </div>
          </div>
          <div className="bottom-blog">
            <img src={Pic3} alt="" />
            <div className="bottom-info">
              <h2 className="num">03</h2>
              <h3 className="bottom-title">The Growth of Gaming</h3>
              <p className="bottom-content">
                {" "}
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
