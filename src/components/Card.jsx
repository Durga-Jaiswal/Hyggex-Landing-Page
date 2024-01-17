import { MdLightbulbOutline } from "react-icons/md";
import { AiOutlineSound } from "react-icons/ai";
import { MdOutlineRefresh } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"
import { FaPlus } from "react-icons/fa";

function Card() {
 

    return (
      <>
        <div >
            <ul className="filter-section">
                <li className="select">Study</li>
                <li>Quiz</li>
                <li>Test</li>
                <li>Game</li>
                <li>Others</li>
            </ul>
        </div>
        <div className="flashcard">
            <div className="icon-box">
            <MdLightbulbOutline className="flashcard-icon left"/>
            <AiOutlineSound className="flashcard-icon right"/>
            </div>

            <p>9 + 6 + 7x - 2x - 3</p>
        </div>
        <div className="box">
        <MdOutlineRefresh className="icon"/>
        
        <IoIosArrowBack className="arrow icon"/>
        <p>1/10</p>
        <IoIosArrowForward className="arrow icon"/>
        <MdFullscreen className="icon"/>
        </div>
        <div className="create-flashcard-section">
            <div className="flex">
                <div className="logo"></div>
                <p>Powered By<span>Hyggex</span></p>
            </div>
            
            <div className="create-flashcard-subsection">
                <FaPlus className="icon"/>
                <p>Create FlashCard</p>
            </div>
        </div>
      </>
    )
  }
  
  export default Card;