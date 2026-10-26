// Global Sample Game Data
const partyMembers = [
  { name: "Knight", hp: 100, attack: 25, gold: 150 },
  { name: "Mage", hp: 45, attack: 40, gold: 200 },
  { name: "Archer", hp: 70, attack: 30, gold: 90 },
  { name: "Healer", hp: 35, attack: 10, gold: 110 }
];

let inventory = ["⚔️ Sword", "🛡️ Shield", "🧪 Health Potion", "🗡️ Excalibur"];
const mapLocations = ["Village", "Forest", "Dungeon", "Dragon Cave", "Castle"];

// 1. Date - Get Method
function demo1() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 0-indexed
  const date = now.getDate();
  const hours = now.getHours();

  document.getElementById("out-1").innerHTML = 
    `📅 Quest Start:<br>` +
    `Year: <b>${year}</b> | Month: <b>${month}</b> | Day: <b>${date}</b> | Hour: <b>${hours}:00</b>`;
}

// 2. Date - Set Method
function demo2() {
  const deadline = new Date();
  deadline.setFullYear(2030);
  deadline.setMonth(11); // December
  deadline.setDate(25);

  document.getElementById("out-2").innerHTML = 
    `⏳ Quest Deadline Set To:<br><b>${deadline.toDateString()}</b>`;
}

// 3. String Methods
function demo3() {
  const rawText = "   hero attack: dragon slain!   ";
  const trimmed = rawText.trim();
  const upper = trimmed.toUpperCase();
  const replaced = upper.replace("DRAGON", "FINAL BOSS");
  const sub = replaced.substring(0, 20);

  document.getElementById("out-3").innerHTML = 
    `Original: "${rawText}"<br>` +
    `Result: <b>${replaced}</b><br>` +
    `Substring (0-20): <i>${sub}...</i>`;
}

// 4. Array forEach()
function demo4() {
  let listHTML = "<b>Inventory Items:</b><ul>";
  inventory.forEach((item, index) => {
    listHTML += `<li>Slot ${index + 1}: ${item}</li>`;
  });
  listHTML += "</ul>";

  document.getElementById("out-4").innerHTML = listHTML;
}

// 5. Array map()
function demo5() {
  // Boost attack by 2x
  const buffedParty = partyMembers.map(hero => {
    return `${hero.name}: ${hero.attack * 2} ATK (Buffed)`;
  });

  document.getElementById("out-5").innerHTML = 
    `<b>Buffed Party Attacks (2x):</b><br>` + buffedParty.join(" | ");
}

// 6. Array filter()
function demo6() {
  // Filter hero with HP > 50
  const healthyHeroes = partyMembers.filter(hero => hero.hp > 50);
  const names = healthyHeroes.map(h => `${h.name} (${h.hp} HP)`).join(", ");

  document.getElementById("out-6").innerHTML = 
    `<b>Heroes with HP > 50:</b><br>${names}`;
}

// 7. Array find()
function demo7() {
  const legendaryWeapon = inventory.find(item => item.includes("Excalibur"));
  
  document.getElementById("out-7").innerHTML = 
    legendaryWeapon 
      ? `<b>Found Legendary Weapon:</b> ${legendaryWeapon} ✨`
      : "Item not found in inventory!";
}

// 8. Array reduce()
function demo8() {
  const totalGold = partyMembers.reduce((sum, hero) => sum + hero.gold, 0);

  document.getElementById("out-8").innerHTML = 
    `💰 Total Party Gold: <b>${totalGold} Coins</b>`;
}

// 9. Array sort()
function demo9() {
  // Sort descending by attack power
  const sorted = [...partyMembers].sort((a, b) => b.attack - a.attack);
  
  let table = "<table><tr><th>Hero</th><th>ATK</th></tr>";
  sorted.forEach(h => {
    table += `<tr><td>${h.name}</td><td>${h.attack}</td></tr>`;
  });
  table += "</table>";

  document.getElementById("out-9").innerHTML = table;
}

// 10. Array some() & every()
function demo10() {
  const allAlive = partyMembers.every(h => h.hp > 0);
  const hasLowHp = partyMembers.some(h => h.hp < 40);

  document.getElementById("out-10").innerHTML = 
    `Every hero HP > 0? <b>${allAlive ? "YES ✅" : "NO ❌"}</b><br>` +
    `Is any hero HP < 40? <b>${hasLowHp ? "YES ⚠️" : "NO 🛡️"}</b>`;
}

// 11. Array includes() & indexOf()
function demo11() {
  const target = "Dragon Cave";
  const exists = mapLocations.includes(target);
  const index = mapLocations.indexOf(target);

  document.getElementById("out-11").innerHTML = 
    `Location "${target}":<br>` +
    `Visited? <b>${exists}</b> | Map Slot Index: <b>${index}</b>`;
}

// 12. Date - Join / Format Dates
function demo12() {
  const dates = [
    new Date(2026, 0, 15),
    new Date(2026, 4, 20),
    new Date(2026, 9, 31)
  ];

  // Formatting and joining dates
  const formattedDates = dates.map(d => d.toLocaleDateString('en-US'));
  const joinedLog = formattedDates.join(" ➔ ");

  document.getElementById("out-12").innerHTML = 
    `<b>Quest Milestones Timeline:</b><br>${joinedLog}`;
}

// 13. Array push() & pop()
function demo13() {
  let demoInv = ["⚔️ Sword", "🛡️ Shield"];
  
  // push
  demoInv.push("🏹 Bow");
  const afterPush = [...demoInv];
  
  // pop
  const dropped = demoInv.pop();

  document.getElementById("out-13").innerHTML = 
    `Added Item (push): [ ${afterPush.join(", ")} ]<br>` +
    `Dropped Item (pop): <b>${dropped}</b><br>` +
    `Final Bag: [ ${demoInv.join(", ")} ]`;
}

// 14. Final Summary
function demo14() {
  const totalParty = partyMembers.length;
  const totalGold = partyMembers.reduce((acc, curr) => acc + curr.gold, 0);
  const strongest = [...partyMembers].sort((a, b) => b.attack - a.attack)[0];
  const itemsCount = inventory.length;

  document.getElementById("out-14").innerHTML = `
    <table>
      <tr><th>Metric</th><th>Details / Result</th></tr>
      <tr><td>Party Size</td><td>${totalParty} Heroes</td></tr>
      <tr><td>Strongest Hero</td><td>${strongest.name} (${strongest.attack} ATK)</td></tr>
      <tr><td>Total Treasury</td><td>💰 ${totalGold} Gold Coins</td></tr>
      <tr><td>Inventory Items</td><td>${itemsCount} Items Loaded</td></tr>
      <tr><td>Engine Status</td><td>🟢 All 13 JS Concepts Verified & Ready</td></tr>
    </table>
  `;
}