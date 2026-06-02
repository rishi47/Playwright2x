function makecounter(start=0){
    let count=start;
    return {
            incement(){count++},
            decement(){count--},
            get(){return count}
    }
}

let counter=makecounter(0);
counter.incement();
counter.incement();
counter.incement();
console.log(counter.get());
counter.decement();
console.log(counter.get());