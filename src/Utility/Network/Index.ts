import axios from "axios";

export const Index = async (_URL: any) => {
  if (!_URL) {
    return;
  }
  try {
    const response = await axios.get(_URL);
    return response.status === 200 ? response.data : {};
  } catch (e) {
    return;
  }
};
export default Index;
