import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import CommentsSec from "./commentsSec";
import BackImg from "../../assets/backSec.webp"
import ChoProperty from "../../components/choProperty";

function Comments() {
  return (
    <div>
      <BackGroundSec bgImage={BackImg}>
        <ChoProperty/>
      </BackGroundSec>
      <CommentsSec />
      <PrintSec />
    </div>
  );
}

export default Comments;
