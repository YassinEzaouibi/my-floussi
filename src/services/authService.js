const BASE_URL = "http://localhost:5000/auth";

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok ${JSON.stringify(errorText)}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Network response was not ok");
    }

    return data.token;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// // BASE_URL = 'http://localhost:5000/auth';
// export const redirectToGoogleAuth = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/google/callback`, {
//       method: "GET",
//       credentials: "include",
//     });
//     if (!response.ok) {
//       throw new Error("Failed to login with Google");
//     }
//     const data = await response.json();
//     localStorage.setItem("token", data.token);
//     history.push("/questionnaires");
//   } catch (error) {
//     console.log("Google authentication error:", error);
//     ``;
//   }
// };
