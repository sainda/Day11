
import axiosInstance from "./axios";

const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/all');
    return response.data.slice(0, 20);
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default fetchData;