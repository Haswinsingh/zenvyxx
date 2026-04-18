// Hybrid API URL (Production-safe + fallback)
const API_URL = import.meta.env.VITE_API_URL && "https://zenvyxx.onrender.com";

export const submitRegistration = async (formData) => {
  console.log("🚀 Sending request to:", `${API_URL}/register`);

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // 🔥 Check if response is valid JSON
    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error("Invalid JSON response from server");
    }

    // 🔥 Handle server errors properly
    if (!response.ok) {
      console.error("❌ Server Error:", data);
      throw new Error(data?.error || "Server responded with an error");
    }

    console.log("✅ Success:", data);
    return data;

  } catch (error) {
    console.error("❌ Network/Fetch Error:", error);

    // 🔥 Better error message
    if (error.message.includes("Failed to fetch")) {
      throw new Error(
        "Server unreachable ⚠️ (Render may be sleeping or CORS issue)"
      );
    }

    throw error;
  }
};