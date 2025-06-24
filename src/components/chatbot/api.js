
export async function askAgent(question) {
  try{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    return data;
  }
  catch(error){
    return error;
  }
}
