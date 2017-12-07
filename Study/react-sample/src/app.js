import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LocalNavigationBar from './components/LocalNavigationBar.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '안녕하세요!',
            menu: ['나의 소개', '방명록', '이력사항', '활동내역', '이메일 주소']
        };
    }

    messangeChange() {
        this.setState({message: '만나서 반갑습니다!'});
    }

    render() {
        return (
            <div>
                {this.state.message}
                <button
                    type="button"
                    onClick={this
                    .messangeChange
                    .bind(this)}>
                    클릭하면 글자가 빠뀌어요.
                </button>
                <LocalNavigationBar menulist={this.state.menu}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#app'));