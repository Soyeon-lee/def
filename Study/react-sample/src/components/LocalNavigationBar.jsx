import React, {Component} from 'react';

class LocalNavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: []
        };
    }

    render() {

        let {menu} = this.state;
        menu.map((item, i) => {
            return (
                <li key={i}>{item}</li>
            )
        })

        return (
            <div id="lnb">
                <ul>
                    {menu}
                </ul>
            </div>
        )
    }
}

export default LocalNavigationBar;