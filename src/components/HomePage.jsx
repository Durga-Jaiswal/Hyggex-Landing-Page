import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

function HomePage() {
 

    return (
      <>
        <div className="navigation-section">
            <GoHome className="icon" />
            <h2 className="navigation">Flashcard</h2>
            <IoIosArrowForward className="icon"/>
            <h2 className="navigation">Methamatics</h2>
            <IoIosArrowForward className="icon"/>
            <h2 className="navigation">Relation and Function</h2>
        </div>
        <h1>Relations and Functions(Mathematics)</h1>
      </>
    )
  }
  
  export default HomePage