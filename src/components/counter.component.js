export let counterVar = 0;
export const counter = (id) => {
    let counterDisplayDiv = document.getElementById(id);
    if (counterDisplayDiv) {
        counterDisplayDiv.innerHTML = counterVar + "";
    }
};
export const toggleCount = (dir) => {
    switch (dir) {
        case "countup":
            counterVar++;
            counter("counterVar");
            break;
        case "countdown":
            counterVar - 1 >= 0 ? counterVar-- : counterVar = 0;
            counter("counterVar");
            break;
    }
};
