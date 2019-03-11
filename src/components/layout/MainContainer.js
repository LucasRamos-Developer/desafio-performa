import React, { Component } from 'react';
import SystemCard from '../app/SystemCard';
import FloatButtonAdd from './FloatButtonAdd';

export default class MainContainer extends Component {
    render() {
        return (
            <div className='main-container'>
                <div className="main-container_header">   
                    <div class="text-center">
                        <h3>Olá, <b>Lucas Ramos</b>! Bem-vindo ao Performa.one</h3>
                        <p>Você ainda não tem nenhum acordo vinculado, adicione um utiliando os quadros abaixos</p>
                    </div>
                </div>
                <div className="main-container_body">
                    <div className='container-fluid' id="add-boxes">
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-md-4 col-lg-2 '>
                                <SystemCard skin='strategy' title={["Performance",<br/>,"Estratégia"]} />
                            </div>
                            <div className='col-md-4 col-lg-2 '>
                                <SystemCard skin='team' title={['Performance',<br/>,'Equipe']} />
                            </div>
                            <div className='col-md-4 col-lg-2 '>
                                <SystemCard skin='single' title={['Performance', <br/>,'Indidual']} />
                            </div>
                            <div className='col-md-4 col-lg-2 '>
                                <SystemCard skin='process' title={['Performance',<br/>, 'Processos']} />
                            </div>
                            <div className='col-md-4 col-lg-2 '>
                                <SystemCard skin='custom' title={['Performance',<br/>, 'Customizada']} />
                            </div>
                        </div>
                    </div>
                </div>
                <FloatButtonAdd></FloatButtonAdd>
            </div>
        );
    }

}