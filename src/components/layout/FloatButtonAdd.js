import React, { Component } from 'react';
import Menu from 'react-mfb/build/menu';
import MainButton from 'react-mfb/build/main-button';
import ChildButton from 'react-mfb/build/child-button';

export default class FloatButtonAdd extends Component {
    render() {
        return (
            <Menu effect='slidein' method='click' position='br'>
                <MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
                <ChildButton
                    icon="ion-social-octocat"
                    label="Follow me on Github"
                    href="https://github.com/nobitagit" />
                <ChildButton
                    icon="ion-social-octocat"
                    label="Follow me on Github"
                    href="https://github.com/nobitagit" />
            </Menu>
        );
    }

}