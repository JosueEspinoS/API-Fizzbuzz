const ExplorerService = require('../services/ExplorerService')
const FizzbuzzService = require('../services/FizzbuzzService')
const Reader = require('../utils/Reader')

class ExplorerController{
    static getExplorerByMission(mission){
        const explorer = Reader.readJsonFile('explorers.json')
        const explorerByMission = ExplorerService.filterByMission(explorer, mission)
        return explorerByMission
    }
}


module.exports = ExplorerController