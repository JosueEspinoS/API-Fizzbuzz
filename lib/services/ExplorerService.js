
class ExplorerService{

    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission;

    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        const explorerUsernames = explorerByMission.map((explorer) => explorer.githubUsername);
        return explorerUsernames;
    }
}

module.exports = ExplorerService;