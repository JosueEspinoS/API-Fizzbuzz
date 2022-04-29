const ExplorerController = require("./controllers/ExplorerController");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");

});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorerInMission = ExplorerController.getExplorerByMission(mission);
    console.log(`Consulting ExplorerByMission... ${new Date()}`);
    res.json(explorerInMission);

});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersAmountInMission = ExplorerController.getAmountExplorerByMission(mission);
    console.log(`Consulting AmountExplorerByMission... ${new Date()}`);
    res.json({mission: req.params.mission, quantity: explorersAmountInMission});

});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUsernamesInMision = ExplorerController.getExplorersUsernamesByMission(mission);
    console.log(`Consulting ExplorersUSernamesByMission... ${new Date()}`);
    res.json({mission: req.params.mission, explorers: explorersUsernamesInMision});
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});