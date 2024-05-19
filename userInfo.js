// userInfo.js

const { test,modifiedNames } = require('./arrayManipulation');



// Function to create user profiles
function createUserProfiles() {
    

    const profiles = [];
    for (let i = 0; i <test.length; i++) {
        profiles.push({
            id: i + 1,
            originalName: test[i],
            modifiedName: modifiedNames[i]
        });
    }
    return profiles;
}

const profiles = createUserProfiles();
console.log(profiles);

module.exports = {
    test,
    modifiedNames
};
