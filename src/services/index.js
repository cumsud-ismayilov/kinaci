import { api } from "../api";

export const getAllCompanies = async () => {

  const res = await api.get("/products");
  if (!res.data) {
    throw new Error("Get All Companies fetch Error");
  }
  console.log("All Fetch bitdi", res.data);
  return res.data
}