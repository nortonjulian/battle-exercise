// My ship (USS Assembly)

const ussAssembly = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
}

console.log("My ship", ussAssembly)

// Aien ship
const alienShip = {
    hull: Math.floor(Math.random() * 4) + 3,
    firepower: Math.floor(Math.random() * 3) + 2,
    accuracy: (Math.random() * .2 + .6).toFixed(1)
}

console.log("Alien ship", alienShip)

// Attack alien
if (Math.random() < ussAssembly.accuracy) {
    console.log("You hit the alien ship!");
    alienShip.hull -= ussAssembly.firepower; // Alien's ship health
  } else {
    console.log("I missed!");
  }

  console.log("Alien ship's hull after your attack:", alienShip.hull);


  // Alien attacks
if (alienShip.hull > 0 && Math.random() < alienShip.accuracy) {
    console.log("The alien hit me!");
    ussAssembly.hull -= alienShip.firepower; // My ship's health
  } else {
    console.log("The alien missed!");
  }

  console.log("USS Assembly hull after alien attack:", ussAssembly.hull);

  // Fight more than one ship
for (let i = 0; i < 6; i++) {
    console.log(`Battling alien ship ${i + 1}...`);

    // Repeat the battle

    if (ussAssembly.hull <= 0) {
      console.log("My ship was destroyed. Game over!");
      break;
    }

    if (alienShip.hull <= 0) {
      const continueBattle = prompt("Alien ship destroyed! Attack next ship? (yes/no)", "yes");
      if (continueBattle.toLowerCase() !== "yes") {
        console.log("We retreat. Game over!");
        break;
      }
    }
  }
