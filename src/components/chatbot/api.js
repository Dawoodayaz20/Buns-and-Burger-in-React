
export async function askAgent(question) {
  try{
    const response = await fetch(`${import.meta.env.Customer_Support_API_URL}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    alert("Error calling agent:", error.message);
    return { error: "Something went wrong. Please try again later." };
  }
}
