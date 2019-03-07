import React, { Component } from 'react';
import SystemCard from '../app/SystemCard';

export default class MainContainer extends Component {
    render() {
        return (
            <div className='main-container'>
                <div className="main-container_head">   
                    <div class="text-center">
                        <h3>Olá, <b>Lucas Ramos</b>! Bem-vindo ao Performa.one</h3>
                    </div>
                    <div className='container'>
                        
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-2 '>
                                <SystemCard title={'Performance da Estratégia'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}