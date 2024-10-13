import { useQuery } from "@tanstack/react-query";
import { fetcher, QueryKeys } from "../../queryClient";

const ProductList = () => {
  const { data } = useQuery(
    QueryKeys.PRODUCTS, // 첫 번째 인수: 쿼리 키
    () =>
      fetcher({
        // 두 번째 인수: 데이터 가져오는 함수
        method: "GET",
        path: "/products",
      })
  );

  console.log(data);

  return (
    <div>
      <h1>상품 목록 페이지</h1>
    </div>
  );
};

export default ProductList;
