export const determineTheGender = async (userFirstname) => {
    const response = await fetch(
      `https://api.genderize.io?name=${userFirstname}`);
    const convertResponse = await response.json();
    const gender = convertResponse.gender;
    const probability = convertResponse.probability;

    return { gender: gender, probability: probability };
  };