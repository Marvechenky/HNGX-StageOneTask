const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/api", (req, res) => {
	const slack_name = req.query.slack_name;
	const track = req.query.track;

	if (!slack_name || !track) {
		return res.status(400).json({
			error: "slack name and track is required",
		});
  }

    const current_day = new Date().toLocaleDateString("en-US", {weekday: "long"});
    const utc_time = new Date().toUTCString();

    const response = {
      slack_name: "Marvis_Alimhiantare",
      current_day,
      utc_time,
      track: "backend",
      "github_file_url":"https://github.com/Marvechenky/HNGx-StageOneTask/blob/main/server.js",
      "github_repo_url": "https://github.com/Marvechenky/HNGx-stageOneTask",
      "status_code": 200
    };

    res.status(200).json(response);
	
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
