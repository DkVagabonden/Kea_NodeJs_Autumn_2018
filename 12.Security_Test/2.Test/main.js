
exports.makeAHumanPrototype = (gender) => {
    return {
        "name": undefined,
        "genetalia": gender === 0 ? "vagina" : "penis",
        "canStandUp": true,
        "limbs": ["head", "arms", "legs", "torso"]
    };
};