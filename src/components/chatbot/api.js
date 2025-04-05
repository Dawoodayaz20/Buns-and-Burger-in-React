// api.js or inside your component
export async function askAgent(question) {
    const response = await fetch('http://127.0.0.1:8000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
  
    const data = await response.json();
    return data.response;
  }
  