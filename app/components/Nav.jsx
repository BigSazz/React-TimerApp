const React = require('react');
const { Link, IndexLink } = require('react-router');

let Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React-TIMER</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="" target="_blank">BigSazz</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Nav;

