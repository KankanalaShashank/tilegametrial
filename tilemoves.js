let colorlist = ["orange", "red", "yellow", "blue", "pink", "grey"]
let counterelement = document.getElementById("countertime")
let countercount = 0
let uniqueid = null

function startcounter() {
    uniqueid = setInterval(function() {
        counterelement.textContent = countercount + " sec"
        countercount = countercount + 1
    }, 1000)

}
let answerelement = document.getElementById("answer")


let playgrid = [{
        Tileno: "Tile10"
    },
    {
        Tileno: "Tile11"
    }, {
        Tileno: "Tile12"
    }, {
        Tileno: "Tile13"
    }, {
        Tileno: "Tile14"
    }, {
        Tileno: "Tile15"
    }, {
        Tileno: "Tile16"
    }, {
        Tileno: "Tile17"
    }, {
        Tileno: "Tile18"
    }, {
        Tileno: "Tile19"
    }, {
        Tileno: "Tile20"
    }, {
        Tileno: "Tile21"
    }, {
        Tileno: "Tile22"
    }, {
        Tileno: "Tile23"
    }, {
        Tileno: "Tile24"
    }
]
let counter = 0

function changestyles(tiles) {
    let idvalue = tiles.tileno
    let Tidvalue = tiles.Tileno
    let buttonelement = document.getElementById(idvalue)
    let buttontelement = document.getElementById(Tidvalue)
    buttonelement.style.backgroundColor = randomcolors[counter]
    buttontelement.style.backgroundColor = randomcolors[counter]
    counter = counter + 1

}
let secondcounter = 0

function modifystyles(Tiles) {
    let nidvalue = Tiles.Tileno
    let buttonTelement = document.getElementById(nidvalue)
    buttonTelement.style.backgroundColor = randomnewcolors[secondcounter]
    secondcounter = secondcounter + 1
}

let grid = [{
        tileno: "tile1",
        Tileno: "Tile1"
    },
    {
        tileno: "tile2",
        Tileno: "Tile2"
    },
    {
        tileno: "tile3",
        Tileno: "Tile3"
    },
    {
        tileno: "tile4",
        Tileno: "Tile4"
    }, {
        tileno: "tile5",
        Tileno: "Tile5"
    }, {
        tileno: "tile6",
        Tileno: "Tile6"
    }, {
        tileno: "tile7",
        Tileno: "Tile7"
    }, {
        tileno: "tile8",
        Tileno: "Tile8"
    }, {
        tileno: "tile9",
        Tileno: "Tile9"
    }
]

let randomcolors = []
let randomnewcolors = []
for (let tiles of grid) {
    randomcolors.push(colorlist[Math.floor(Math.random() * colorlist.length)])
}
for (let Tiles of playgrid) {
    randomnewcolors.push(colorlist[Math.floor(Math.random() * colorlist.length)])
}
//console.log(randomcolors)
randomnewcolors.push("white")
//console.log(randomnewcolors)
for (let tiles of grid) {
    changestyles(tiles)
}
for (let Tiles of playgrid) {
    modifystyles(Tiles)
}



if (Boolean(check())) {
    document.getElementById("answer").innerText = "You won the game";

}

document.getElementById("playgrid").addEventListener("click",function(event){
    let id = event.target.id;
    //console.log("id:",id);
    if (document.getElementById(id).style.backgroundColor !== "white") {
        let number = parseInt(id.substring(4, id.length), 10);
        console.log("number:", number);
        swap(number);
        if (Boolean(check())) {
            document.getElementById("answer").innerText = "You won the game";


            clearInterval(uniqueid)
        }
    }
    
}) 




function swap(num) {
    var flag = false;
    var vis = false;
    if (num == 5) {
        vis = true;
        if (document.getElementById("Tile" + (num - 1)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num - 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        } else if (document.getElementById("Tile" + (num + 5)).style.backgroundColor == "white") {
            document.getElementById("Tile" + (num + 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
    }
    if (num == 25) {
        vis = true;
        if (document.getElementById("Tile" + (num - 1)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num - 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        } else if (document.getElementById("Tile" + (num - 5)).style.backgroundColor == "white") {
            document.getElementById("Tile" + (num - 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
    }
    if (num == 21) {
        vis = true;
        if (document.getElementById("Tile" + (num + 1)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num + 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        } else if (document.getElementById("Tile" + (num - 5)).style.backgroundColor == "white") {
            document.getElementById("Tile" + (num - 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
    }
    if (num == 1) {
        vis = true;
        if (document.getElementById("Tile" + (num + 1)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num + 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        } else if (document.getElementById("Tile" + (num + 5)).style.backgroundColor == "white") {
            document.getElementById("Tile" + (num + 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
    }

    if (Boolean(vis)) {
        if (Boolean(flag)) {
            document.getElementById("Tile" + num).style.backgroundColor = "white";
        }
        return;
    }


    if (num < 5 || num > 21) {
        if (document.getElementById("Tile" + (num + 1)).style.backgroundColor === "white") {
            //console.log("hello");
            document.getElementById("Tile" + (num + 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
        if (document.getElementById("Tile" + (num - 1)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num - 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
        if (num < 5) {
            if (document.getElementById("Tile" + (num + 5)).style.backgroundColor === "white") {
                document.getElementById("Tile" + (num + 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
                flag = true;
            }
        }
        if (num > 21) {
            if (document.getElementById("Tile" + (num - 5)).style.backgroundColor === "white") {
                document.getElementById("Tile" + (num - 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
                flag = true;
            }
        }
    } else if (num % 5 === 0 || num % 5 === 1) {
        if (document.getElementById("Tile" + (num + 5)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num + 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
        if (document.getElementById("Tile" + (num - 5)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num - 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
        if (num % 5 === 0) {
            if (document.getElementById("Tile" + (num - 1)).style.backgroundColor === "white") {
                document.getElementById("Tile" + (num - 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
                flag = true;
            }
        }
        if (num % 5 === 1) {
            if (document.getElementById("Tile" + (num + 1)).style.backgroundColor === "white") {
                document.getElementById("Tile" + (num + 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
                flag = true;
            }
        }

    } else {
        if (document.getElementById("Tile" + (num + 1)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num + 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
        if (document.getElementById("Tile" + (num - 1)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num - 1)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
        if (document.getElementById("Tile" + (num + 5)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num + 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
        if (document.getElementById("Tile" + (num - 5)).style.backgroundColor === "white") {
            document.getElementById("Tile" + (num - 5)).style.backgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            flag = true;
        }
    }

    if (Boolean(flag)) {
        document.getElementById("Tile" + num).style.backgroundColor = "white";
        return;
    }

}



function check() {
    let arr = [2, 3, 4];
    let c = 1;
    for (let i = 1; i <= 3; i++) {
        for (let j = 0; j < arr.length; j++) {
            let num = 5 * i + arr[j];
            let firstbackgroundColor = document.getElementById("Tile" + num).style.backgroundColor;
            let secondbackgroundColor = document.getElementById("tile" + c).style.backgroundColor;
            c++;
            if (firstbackgroundColor !== secondbackgroundColor) return false;
        }
    }
    return true;
}