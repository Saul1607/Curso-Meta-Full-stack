// Sin objeto

var storeManagerMovement = 4;
var storeManagerSocialSkills = 50;
var storeManagerStreetSmarts = 50;
var storeManagerHealth = 30;

// Con objeto

var storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = 'finding business opportunities';
storeManager.greeting = "Let's make some money";

console.log(storeManager)

// Otra forma de hacer objetos

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health:40
}