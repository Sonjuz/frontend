import axios from 'axios';

export const registerProfile = async profileData => {
  const { voiceFile, profileImage, name, familyRelation } = profileData;

  const form = new FormData();
  form.append('voiceFile', voiceFile);
  form.append('profileImg', profileImage);
  form.append('name', name);
  form.append('familyRelation', familyRelation);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/profile/upload`,
      form
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchAllSimulations = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/book`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSimulationById = async id => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/book/${id}/simulation`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSummaryById = async id => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/book/${id}/summary`
    );
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};
