
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Counter extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { value, onIncrement, onDecrement } = this.props;

        return(
            <div >
                <p>Clicked { value } times</p>
                <div >
                    <button

                        onClick={onIncrement}
                    >
                        +
                    </button>

                    <button
                        onClick={onDecrement}
                    >
                        -
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;
