import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@Types";

const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useReduxSelector;
