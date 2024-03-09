const express = require("express");
const cors = require("cors");
const { generateStory } = require("./gemini");  

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { weight, height, age } = req.body;
    if (!weight || !height || !age) {
      return res.status(400).json({ error: "Missing required fields: weight, height, age" });
    }
    const bmi = weight / Math.pow(height / 100, 2);
    let weightGoal = "maintain";
    if (bmi < 18.5) {
      weightGoal = "gain";
    } else if (bmi > 25) {
      weightGoal = "lose";
    }

    const prompt = `Write a personalized exercise timetable for a ${age}-year-old with a BMI of ${bmi.toFixed(1)} aiming to ${weightGoal} weight Give diet plan remember he is an indian so give indian food. Give him timetable so that he can set alarms when to eat and exercise.`;

    const generatedTimetable = await generateStory(prompt);  

    res.json({
      weightGoal,
      timetable: generatedTimetable,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
