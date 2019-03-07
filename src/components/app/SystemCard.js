import React, { Component } from 'react';

export default class SystemCard extends Component {

    constructor () {
        super();
        this.state = {
            isLoad: true,
            product: {},
            recommendation: []
        }
    }

    render() {
        return (
            <div className='SystemCard-box box'>
                <div className='box-content'>
                    <h3 className='title'>{this.props.title}</h3>
                    <p className='description'>{this.props.description}</p>
                    <p className='btn-content center'>
                        <button className='btn btn-primary'>Adicionar</button>
                    </p>
                </div>
            </div>
        );
    }

}