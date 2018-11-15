const chai = require('chai');
const assert = chai.assert;

const main = require('../main');

describe("Creates a human prototype", () => {

    const humanProto = main.makeAHumanPrototype(0);

    it("should stand up", () => {
        assert.equal(humanProto.canStandUp, true);
    })

    it("should have all limbs", () => {
        assert.deepEqual(humanProto.limbs, ["head", "arms", "legs", "torso"]);
    })
});