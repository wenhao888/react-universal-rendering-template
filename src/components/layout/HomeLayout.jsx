import React, {Component} from "react";


class HomeLayout extends Component {
    render()  {
    var {children} = this.props;
        return (
            <div>
                {children}
            </div>

        )
    }
}

export default HomeLayout;