import React, {Component} from "react";

import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from '../../vendor/redux-async-connect'


@asyncConnect({
    lunch: (params, helpers) => {return Promise.resolve({id: 1, name: 'Borsch'})}
})
export default class Hello extends Component {
    render() {
        console.log("my props", this.props);
        return (
            <div>
                hello from react;
                {this.props.lunch.data.name}
            </div>
        )
    }
}

