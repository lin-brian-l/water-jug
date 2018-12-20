// Actions: Fill, empty, pour into another

const Jug = require('models/jug');

class WaterJugs {
    constructor(waterJugs, targetAmount) {
        this.waterJugs = this.createJugs(waterJugs);
        this.targetAmount = targetAmount;
    }

    createJugs(waterJugs) {
        return waterJugs.map((jugCapacity, index) => {
            return new Jug(jugCapacity, index);
        });
    }
    
    /**
     * @desc Beginning function.
     * @param {Array} waterJugs Array of integers representing the max quantity of water held by a jug. 
     * @param {integer} targetAmount The desired ending amount.
     * @returns A the shortest sequence of actions required to reach the target amount. An error is raised if it is not possible.
     */
    static fillWaterJugs(waterJugs, targetAmount) {


        // const sortedJugs = this.sortJugsByDescendingOrder(waterJugs);
    
        const incrementsAndSteps = this.generateIncrementsAndSteps(sortedJugs); 
    }

    // static sortJugsByDescendingOrder(waterJugs) {
    //     return waterJugs.sort((jug1, jug2) => jug2 - jug1);
    // }
    
    static generateIncrementsAndSteps(waterJugs) {
        
    }
}

module.exports = WaterJugs;