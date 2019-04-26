import React from 'react';


// Components
import Supporter from "./Supporter";
import supporters from './supporters';
import styledComponent from './styledComponent.css';



class App extends React.Component {
    constructor(props) {
            super(props);

        this.renderRows = this.renderRows.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    renderRows() {
        return supporters.map((group) => {
            return (
                <div className="content-upp" key={supporters.indexOf(group)}>
                    <Supporter
                    key={group.name}
                    {...group}
                    />
                </div>

            );
        });
    }

  render(){
    return <div>
          {this.renderRows()}
        </div>



    }
}



export default App;
