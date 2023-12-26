import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data: catFact, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isError) {
    return <h1>there is an Error here</h1>
  }
  if (isLoading) {
    return <h1>Its Loading ...</h1>
  }

  return <div>this is the home page<p>{catFact?.fact}</p>
  
  <div><button onClick={refetch}>update </button></div></div>;
};
