import { useEffect, useState } from "react";
import BackGroundSec from "../../components/backgroundSec";
import PrintSec from "../../components/prinntSec";
import { FaThLarge, FaList } from "react-icons/fa";
import CardGridView from "../../components/cardGridView";
import CardListView from "../../components/cardListView";
import { getAllCompanies } from "../../services";

function Possessions() {
  const [view, setView] = useState("grid");
  const [products, setProducts] = useState([]);
  const [up, setUp] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCompanies();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [up]);

  return (
    <>
      <BackGroundSec bgColor="#052841"></BackGroundSec>
      <div className="bg-[#F7F7F7]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 pb-[25px]">
          <h1 className="text-2xl font-bold">Türkiye'de Gayrimenkul</h1>
          <div className="flex gap-3 justify-end">
            <button
              className={`p-2 rounded-md ${
                view === "grid" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setView("grid")}
            >
              <FaThLarge />
            </button>
            <button
              className={`p-2 rounded-md ${
                view === "list" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setView("list")}
            >
              <FaList />
            </button>
          </div>
        </div>
        {view === "grid" ? <CardGridView data={products} /> : <CardListView />}
      </div>
      <PrintSec />
    </>
  );
}

export default Possessions;
