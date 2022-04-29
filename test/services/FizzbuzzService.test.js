const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test para FizzbuzzService", () => {
    test("Requerimiento score = trick", () => {
        const explorer1 = {name: "explorer1", score: 1};
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer1);        
        expect(explorerTrick.trick).toBe(explorerTrick.score);
    });

    test("Requerimiento trick = FIZZ", () => {
        const explorer1 = {name: "explorer1", score: 3};
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer1);        
        expect(explorerTrick.trick).toBe("FIZZ");
    });

    test("Requerimiento trick = BUZZ", () => {
        const explorer1 = {name: "explorer1", score: 5};
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer1);        
        expect(explorerTrick.trick).toBe("BUZZ");
    });

    test("Requerimiento trick = FIZZBUZZ", () => {
        const explorer1 = {name: "explorer1", score: 15};
        const explorerTrick = FizzbuzzService.applyValidationInExplorer(explorer1);        
        expect(explorerTrick.trick).toBe("FIZZBUZZ");
    });
});