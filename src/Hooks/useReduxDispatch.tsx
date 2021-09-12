import { useDispatch } from "react-redux";
import { AppDispatch } from "@Types";

const useReduxDispatch = () => useDispatch<AppDispatch>();
export default useReduxDispatch;
