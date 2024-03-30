import { useQuery } from "react-query";
import { getTaskboards } from "../../../appUtils";

const useTaskboardView = () => {
  const { isLoading, isError,isSuccess,isIdle, data } = useQuery({
    queryKey: [`taskboards`],
    queryFn: ({signal}) => getTaskboards({signal})
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {status,data}
}

export default useTaskboardView;