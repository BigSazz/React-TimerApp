const React = require('react');
const Nav = require('Nav');

// let Main = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <Nav/>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

let Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Nav/>
                    <p>Main.jsx - Rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;