
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Counter extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { value, onIncrement, onDecrement } = this.props;
        const styles = {
            container:{
                display:'flex',
                width:300
            },
            left:{
                flex:1
            },
            right:{
                flex:1
            }
        }
        return(
            <div className='container'>
                <p>Clicked { value } times</p>
                <div className='left'>
                    <button
                        onClick={onIncrement}
                    >
                        +
                    </button>
                </div>

                <div className='left'>
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
