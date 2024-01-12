import React from 'react'
import './latestNewsSection.scss'
import { LiaSmileWink } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";

function LatestNewsSection() {
  return (
    <section id='latestNewsSection'>
      <div className="latestNewsSectionUpBox">
        <p>Popular Item in the market</p>
        <h1>Latest <p>News</p></h1>
      </div>
      <div className="latestNewsSectionDownBox">
        <div className="latestCartBox">
          <div className="latestImgBox">
            <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="" />
          </div>
          <div className="latestTextBox">
            <div className="typeBox">
              <p>By Admin</p>
              <div><LiaSmileWink /> 2 Comments</div>
            </div>
            <p>The Richland Center Shooping News and weekly shooper</p>
            <span>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</span>
            <div className='latestTextBtnBox'>Read More
            <IoIosArrowRoundForward className='arrow'/> </div>
          </div>
        </div>
        <div className="latestCartBox">
          <div className="latestImgBox">
            <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png" alt="" />
          </div>
          <div className="latestTextBox">
            <div className="typeBox">
              <p>By Admin</p>
              <div><LiaSmileWink /> 2 Comments</div>
            </div>
            <p>The Shopping News also offers top-quality printing services</p>
            <span>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</span>
            <div className='latestTextBtnBox'>Read More
            <IoIosArrowRoundForward className='arrow'/> </div>
          </div>
        </div>
        <div className="latestCartBox">
          <div className="latestImgBox">
            <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png" alt="" />
          </div>
          <div className="latestTextBox">
            <div className="typeBox">
              <p>By Admin</p>
              <div><LiaSmileWink /> 2 Comments</div>
            </div>
            <p>Professional design staff and efficient equipment you’ll find we offer</p>
            <span>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</span>
            <div className='latestTextBtnBox'>Read More
            <IoIosArrowRoundForward className='arrow'/> </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default LatestNewsSection