// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://my-floussi-back.vercel.app/api";

/**
 * Sends the questionnaire result via email.
 * @param {string} email - The recipient's email address.
 * @param {object} result - The result data containing personType and scoreLevel.
 * @returns {Promise<void>}
 */
export const sendResultEmail = async (email, result) => {
  try {
    const response = await fetch(`${BASE_URL}/email/send-result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        subject: "Your Questionnaire Result",
        result: result,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send email: ${errorText}`);
    }

    alert("Email sent successfully");
  } catch (error) {
    console.error("Error:", error);
    alert(`Failed to send email: ${error.message}`);
  }
};
