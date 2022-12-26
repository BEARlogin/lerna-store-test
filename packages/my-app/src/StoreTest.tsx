import React from 'react';
import {observer} from "mobx-react-lite";
import {counterStore} from 'store-module'
import {ExampleComponent} from "test-package";

const StoreTest = observer(() => {
    return (
        <div>
            <div>count: {counterStore.counter}</div><br />
            <button onClick={counterStore.add}>Add</button>
            <ExampleComponent text={"test"} />
        </div>
    );
});

export default StoreTest;
