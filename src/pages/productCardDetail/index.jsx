import { useParams } from 'react-router';

function ProductCardDetail() {
     const { id } = useParams();
  return (
    <div className="p-6">
      <h1>Product Detail - {id}</h1>
      {/* məhsul məlumatları burda göstəriləcək */}
    </div>
  )
}

export default ProductCardDetail
