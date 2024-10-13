import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getTodos, postTodo } from "../my-api";

// QueryClient 생성: getClient: 싱글턴 패턴을 사용하여 QueryClient의 인스턴스를 한 번만 생성하고 재사용합니다.

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient();
    return client;
  };
})();
const BASE_URL = "https://fakestoreapi.com/products";

type AnyOBJ = { [key: string]: any };
// fetcher 함수: fetcher: API 요청을 수행하는 비동기 함수입니다. method, path, body를 인자로 받아 요청을 처리합니다.
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
}) => {
  const url = `${BASE_URL}${path}`;
  const fetchOptions: RequestInit = {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": BASE_URL,
    },
  };

  try {
    const res = await fetch(url, fetchOptions);

    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
    throw err; // 또는 적절한 에러 처리 로직
  }
};
//QueryKeys: QueryKeys: 상수 객체로, 쿼리 키를 관리합니다. 현재는 PRODUCTS라는 키만 포함되어 있습니다.틀린 부분 및
export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
};
