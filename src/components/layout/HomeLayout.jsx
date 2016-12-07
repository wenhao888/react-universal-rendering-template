import React, {Component} from "react";

import MenuBar from "../menu/MenuBar";


class HomeLayout extends Component {
    render()  {
    var {children} = this.props;
        return (
            <div>
                <MenuBar/>
                <div>
                    {children}
                </div>
            </div>

        )
    }
}

export default HomeLayout;