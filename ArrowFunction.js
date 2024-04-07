let number = (n) => 10;

let number2 = (a, b) => {
    return a + b;
}

// console.log(number());

// console.log(number2(10, 20));

var javascript = {
    name: "JavaScript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function () {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    }
}

javascript.printLibraries();