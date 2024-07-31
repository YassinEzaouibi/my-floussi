const BASE_URL = "http://localhost:5000/api";

export const fetchAllQuestionnaires = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/questionnaires`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch Questionnaires");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Questionnaires:", error);
    throw error;
  }
};

// export const fetchQuestionnairesCount = async (token) => {
//   try {
//     const questionnaires = await fetchAllQuestionnaires(token);
//     return questionnaires.length;
//   } catch (error) {
//     console.error("Error fetching questionnaires count:", error);
//     throw error;
//   }
// };
