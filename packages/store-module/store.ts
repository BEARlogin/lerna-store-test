import {action, makeObservable, observable} from "mobx";

class CounterStore {
    counter: number = 0;

    constructor() {
        makeObservable(this,{
            add: action.bound,
            counter: observable
        });
    }

    add() {
        this.counter++;
    }
}

export const counterStore = new CounterStore();
