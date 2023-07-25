import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../slices/dataSlice";

const Searcher = () => {
  const dispacth = useDispatch();
  const handleOnchange = (e) => {
    dispacth(setFilter(e.target.value));
  };
  return <Input.Search placeholder="Buscar..." onChange={handleOnchange} style={{ marginBottom: 10 }} />;
};

export default Searcher;
