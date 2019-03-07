import React, { Component } from 'react';
import SystemCard from '../app/SystemCard';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
                                <SystemCard title={["Performance da",<br/>,"Estratégia"]} />
                            </div>
                            <div className='col-md-2 '>
                                <SystemCard title={'Performance da Equipe'} />
                            </div>
                            <div className='col-md-2 '>
                                <SystemCard title={'Performance da Indidual'} />
                            </div>
                            <div className='col-md-2 '>
                                <SystemCard title={'Performance da Processos'} />
                            </div>
                            <div className='col-md-2 '>
                                <SystemCard title={'Customizado'} />
                            </div>
                        </div>
                    </div>
                </div>
                <Fab color="primary" aria-label="Add" className='btn-float'>
                    <AddIcon />
                </Fab>
            </div>
        );
    }

}