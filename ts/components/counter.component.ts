export let counterVar=0;
export const counter:Function=(id:string):void=>{
        let counterDisplayDiv=document.getElementById(id);
        if(counterDisplayDiv){
        counterDisplayDiv.innerHTML=counterVar+"";
        }
}
// export let DisplayCounter:Function;
export const toggleCount:Function=(dir:string):void=>{
    switch(dir){
        case "countup":
            counterVar++;
            counter("counterVar");
            break;
        case "countdown":
            counterVar-1>=0?counterVar--:counterVar=0
            counter("counterVar")
            break;
    }
};
