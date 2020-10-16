import { axiosWithAuth } from "../utils/axiosWithAuth";

export const fetchColorsApi = () => {
  return axiosWithAuth()
    .get("/colors")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
