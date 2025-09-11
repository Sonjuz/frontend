import axios from 'axios';

export const registerProfile = async profileData => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/profile/upload`,
      {
        profileData,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

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
