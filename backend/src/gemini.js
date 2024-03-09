const { GoogleGenerativeAI } = require("@google/generative-ai");

 
const genAI = new GoogleGenerativeAI("AIzaSyCID0hsMbQunlb2HM2dCkJSxQvmBEqrU4w");

async function generateStory(prompt) {
 
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

module.exports = { generateStory };
