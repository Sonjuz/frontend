import axios from 'axios';

export const fetchAllSimulations = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/simulation`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSimulationById = async id => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/simulation/${id}`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};
