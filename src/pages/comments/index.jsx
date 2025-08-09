import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import CommentsSec from "./commentsSec";
import BackImg from "../../assets/backSec.webp"

function Comments() {
  return (
    <div>
      <BackGroundSec bgImage={BackImg}>
        <h1>salam</h1>
      </BackGroundSec>
      <CommentsSec />
      <PrintSec />
    </div>
  );
}

export default Comments;
