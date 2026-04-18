const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const submitRegistration = async (formData) => {
  console.log(`[API Init] Connecting to: ${API_URL}/register`);
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error("[API Server Error]", data.error);
      throw new Error(data.error || "Server responded with an error");
    }

    return data;
  } catch (error) {
    console.error("[API Network/Fetch Error]", error.message);
    if (error.message.includes("Failed to fetch")) {
      throw new Error("Network error. The server is unreachable.");
    }
    throw error;
  }
};
