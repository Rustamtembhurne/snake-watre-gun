let user = "snake";
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["snake", "water", "gun"][cpuI];

const match = (cpu, user) => {

    if (cpu === user){
        return "Nobody";
    }

    else if (cpu === "snake"  &&  user === "water"){
        return "cpu";
    }

    else if (cpu === "snake"  &&  user === "gun"){
        return "user"
    }

    else if (cpu === "gun"  &&  user === "water"){
        return "user"
    }

    else if (cpu === "gun"  &&  user === "snake"){
        return "cpu"
    }

    else if (cpu === "water"  &&  user === "gun"){
        return "cpu"
    }

    else if (cpu === "water"  &&  user === "snake"){
        return "user"
    }

}

let result = match(cpu, user)
document.write(`CPU : ${cpu}  <br>  USER : ${user}  <br>  The winner is : ${result.toUpperCase()}`)

// used only console
console.log('The winner is : '+ result);