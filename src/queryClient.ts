import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient();
    return client;
  };
})();

const BASE_URL = "https://fakestoreapi.com";

type AnyOBJ = { [key: string]: any };

export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: AnyOBJ;
  params?: AnyOBJ;
}): Promise<any> => {
  try {
 
   
    const url = `${BASE_URL}${path}`; // 쿼리스트링 추가된 URL

    const fetchOptions: RequestInit = {
      method,
 
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : BASE_URL
      },
    };

    const res = await fetch(url, fetchOptions);

    if (!res.ok) {
      // 상세 에러 메시지 출력
      const errorMessage = await res.text();
      throw new Error(`Error: ${res.status} ${res.statusText} - ${errorMessage}`);
    }

    const json = await res.json();
    return json;
  } catch (err) {
    console.error("Fetcher error:", err); // 에러를 좀 더 자세히 출력
    throw err;
  }
};

export const QueryKeys = {
  PRODUCTS: ["PRODUCTS"], // 배열로 정의
};
