const API = "http://localhost:3000/creatures";

async function addCreature() {
    const name = document.getElementById("name").value;
    const power = document.getElementById("power").value;
    const dangerLevel = document.getElementById("danger").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, power, dangerLevel })
    });

    getCreatures();
}

async function getCreatures() {
    const res = await fetch(API);
    const data = await res.json();

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(c => {
        list.innerHTML += `
        <div class="creature">
        <strong>${c.name}</strong>
        <br>
        Power: ${c.power}
        <br>
        Danger: ${c.dangerLevel}<br>
        ID: ${c.id}
        <br>
        <button onclick="deleteCreature(${c.id})">Delete</button>
        </div>`;
    });  
}

async function deleteCreature(id) {
    await fetch(API + "/"+ id, {
        method: "DELETE"
    });
    getCreatures();
}