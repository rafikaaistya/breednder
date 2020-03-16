import { GET_PREMIUM } from "../config/constants";
import { API } from "../config/api";

export const getPremium = () => {
  return {
    type: GET_PREMIUM,
    payload: async () => {
      const res = await API.get("/payment");
      const { data } = res.data;
      return data;
    }
  };
};
