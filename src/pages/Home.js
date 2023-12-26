import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  return <div>this is the home page</div>;
};
