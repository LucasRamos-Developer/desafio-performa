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
            <div className={'SystemCard-box box ' + this.props.skin}>
                <div className='box-content'>
                    <div className='box-content_header'>
                        <span className={'icon icon-'+this.props.skin}>
                            <img src={'assets/icons/icon-'+this.props.skin+'.svg'} />
                        </span>
                    </div>
                    <div className='box-content_body'>
                    <h3 className='title'>{this.props.title}</h3>
                        <p className='btn-content center'>
                            <button className='btn btn-primary'>Adicionar</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}