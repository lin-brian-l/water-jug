// [
//    {
//         quantity: int,
//         action: string,
//         cupIndexes: Array,
//         cupAmounts: Array,
//         stepCount: int
//     }
// ]

class Increments {
    static generateIncrements(waterJugs) {
        for (let firstIndex = 0; firstIndex < waterJugs.length; firstIndex++) {
            [20, 10, 4, 1]
            { 20, "fill", [0], [20], 1 }
            { 10, "fill", [1], [10], 1 }
            { 4, "fill", [2], [4], 1 }
            { 1, "fill", [3], [1], 1 }
            { 6, "pour", [1, 2], [10, 4], 1 }
            { 9, "pour", [1, 3], [10, 3], 1 }
            { 3, "pour", [2, 3], [4, 1], 1 }
        }
    }
}

class Cup {
    constructor(index, capacity) {
        this.index = index;
        this.capacity = capacity;
        this.currentAmount = 0;
    }
}