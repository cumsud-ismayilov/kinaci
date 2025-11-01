import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchSection() {
  const navigate = useNavigate();
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sizeMin, setSizeMin] = useState("");
  const [sizeMax, setSizeMax] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [rooms, setRooms] = useState("");
  const [floors, setFloors] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const tabs = [
    { label: "Hamısı", value: "all" },
    { label: "İcarə", value: "forRent" },
    { label: "Satılır", value: "forSale" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 URL parametrlərini yarat
    const params = new URLSearchParams({
      activeTab,
      priceMin,
      priceMax,
      sizeMin,
      sizeMax,
      propertyType,
      rooms,
      floors,
      propertyId,
    });

    // 🔹 Boş olanları sil
    for (const [key, value] of params.entries()) {
      if (!value) params.delete(key);
    }

    // 🔹 Possessions səhifəsinə yönləndir
    navigate(`/possessions?${params.toString()}`);
  };

  const handleReset = () => {
    setPriceMin("");
    setPriceMax("");
    setSizeMin("");
    setSizeMax("");
    setPropertyType("");
    setRooms("");
    setFloors("");
    setPropertyId("");
    setActiveTab("all");
    setShowMoreFilters(false);
  };

  return (
    <section className="-mt-[122px] relative max-w-5xl mx-auto z-9999 shadow-[0_7px_29px_#64646f33]">
      <div className="container py-5">
        {/* Tabs */}
        <div className="flex justify-between w-full text-sm relative z-[70] mb-5">
          <div className="tab-btns text-blue-900 font-semibold text-md flex rounded-t-selectBtn overflow-hidden relative">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                className={`w-[100px] px-7 py-4 relative ${
                  activeTab === tab.value ? "bg-white" : "bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                <span className="z-[5] relative">{tab.label}</span>
              </button>
            ))}
            {/* Moving box */}
            <div
              className="flex justify-center moving-box w-[100px] h-[54px] absolute z-[4] bg-white after:content-[''] after:absolute after:bottom-0 after:w-[50%] after:h-0.5 after:bg-orange-500 rounded-t-selectBtn transition-transform"
              style={{
                transform: `translateX(${
                  tabs.findIndex((tab) => tab.value === activeTab) * 100
                }px)`,
              }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="text-blue-900 py-5 px-4 w-full bg-white shadow-filter-box rounded-[12px] rounded-tl-none"
        >
          <div className="flex gap-3 flex-wrap">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-3 flex-wrap">
              {/* Qiymət */}
              <div className="grid gap-3">
                <label htmlFor="price" className="cursor-default text-sm mb-3 inline-block">
                  Qiymət
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    className="px-2.5 py-4 rounded-button border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    className="px-2.5 py-4 rounded-button border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] outline-none"
                  />
                </div>
              </div>

              {/* Ölçü */}
              <div className="grid gap-3">
                <label htmlFor="size" className="cursor-default text-sm mb-3 inline-block">
                  Ölçü (m<sup>2</sup>)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={sizeMin}
                    onChange={(e) => setSizeMin(e.target.value)}
                    className="px-2.5 py-4 rounded-button border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={sizeMax}
                    onChange={(e) => setSizeMax(e.target.value)}
                    className="px-2.5 py-4 rounded-button border border-blue-900/25 focus-within:border-blue-900 bg-white w-full flex text-xs h-[50px] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Daha çox filtr */}
            {showMoreFilters && (
              <div className="w-full mt-4 p-3 border-t border-gray-200 grid md:grid-cols-2 gap-3">
                {/* Əmlak növü */}
                <div className="grid gap-1">
                  <label className="text-sm">Əmlak növü</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="px-2.5 py-2 border border-blue-900/25 rounded-button w-full text-sm"
                  >
                    <option value="">Seçin</option>
                    <option value="menzil">Mənzil</option>
                    <option value="villa">Villa</option>
                    <option value="obyekt">Obyekt</option>
                  </select>
                </div>

                {/* Otaqların sayı */}
                <div className="grid gap-1">
                  <label className="text-sm">Otaqların sayı</label>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="px-2.5 py-2 border border-blue-900/25 rounded-button w-full text-sm"
                  >
                    <option value="">Seçin</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>

                {/* Mərtəbələrin sayı */}
                <div className="grid gap-1">
                  <label className="text-sm">Mərtəbələrin sayı</label>
                  <select
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    className="px-2.5 py-2 border border-blue-900/25 rounded-button w-full text-sm"
                  >
                    <option value="">Seçin</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>

                {/* Daşınmaz əmlak ID */}
                <div className="grid gap-1">
                  <label className="text-sm">Daşınmaz əmlak ID</label>
                  <input
                    type="text"
                    placeholder="ID daxil edin"
                    value={propertyId}
                    onChange={(e) => setPropertyId(e.target.value)}
                    className="px-2.5 py-2 border border-blue-900/25 rounded-button w-full text-sm"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="buttons w-full flex flex-col md:flex-row justify-between pt-5">
            <div className="flex text-xs gap-2.5 py-2">
              <button
                type="button"
                className="gap-[6px] flex items-center"
                onClick={() => setShowMoreFilters(prev => !prev)}
              >
                Daha çox filtr
              </button>
              <button
                type="button"
                className="gap-[6px] text-blue-900/50 hover:bg-blue-900/5 rounded px-2 flex items-center"
                onClick={handleReset}
              >
                Hamısını sıfırla
              </button>
            </div>
            <div className="text-md">
              <button
                type="submit"
                className="py-3 px-8 rounded-selectBtn w-full font-semibold gap-3 bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center"
              >
                Axtar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
