import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../services";

function ProductCardDetail() {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id); // yalnız kliklənən məhsulu alır
        setSinglePro(data);
      } catch (err) {
        setError(err.message || "Məhsulu gətirərkən xəta baş verdi");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  if (loading) return <p className="p-6">Yüklənir...</p>;
  if (error) return <p className="p-6 text-red-500">Xəta: {error}</p>;




  return (
    <div className="p-6">
      <h1>Product Detail - {id}</h1>
      <p>{singlePro.title}</p>
      {/* məhsul məlumatları burda göstəriləcək */}
    </div>
  );
}

export default ProductCardDetail;
