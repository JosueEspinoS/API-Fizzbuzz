const res = require('express/lib/response')
const ExplorerService = require('../services/ExplorerService')
const FizzbuzzService = require('../services/FizzbuzzService')
const Reader = require('../utils/Reader')

class ExplorerController{
    static getExplorerByMission(mission){
        const explorer = Reader.readJsonFile('explorers.json')
        const explorerByMission = ExplorerService.filterByMission(explorer, mission)
        return explorerByMission
    }

    static getAmountExplorerByMission(mission){
        const explorer = Reader.readJsonFile('explorers.json')
        const explorersAmountInMission = ExplorerService.getAmountOfExplorersByMission(explorer,mission)
        return explorersAmountInMission
    }

    static getExplorersUsernamesByMission(mission){
        const explorer = Reader.readJsonFile('explorers.json')
        const explorerUsernamesInMission = ExplorerService.getExplorersUsernamesByMission(explorer, mission)
        return explorerUsernamesInMission
    }
    
}


module.exports = ExplorerController