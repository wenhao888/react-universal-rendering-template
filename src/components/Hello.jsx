import React, {Component} from "react";

import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-async-connect'


@asyncConnect([ {
    key:"lunch",
    promise: (params, helpers) => { return Promise.resolve({id: 1, name: 'Borsch'})}
}])
export default class Hello extends Component {
    render() {
        return (
            <div>
                hello from react;
                {this.props.lunch.name}
            </div>
        )
    }
}

