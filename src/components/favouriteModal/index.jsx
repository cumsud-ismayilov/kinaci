import Closebutton from "../../icons/closebutton";

function FavoriteModal({ setIsFav, favorites }) {
  return (
    <div className="bg-white p-[10px] rounded-[7px] absolute bottom-0 top-[122%] z-50 min-h-[350px]">
      <div className="flex items-center gap-[8px] border-b-2 border-b-[rgb(243,243,243)]">
        <h2 className="text-[24px]">Beğendiklerim</h2>
        <Closebutton setIsFav={setIsFav} />

        <ul className="space-y-2"></ul>
      </div>
    </div>
  );
}

export default FavoriteModal;
