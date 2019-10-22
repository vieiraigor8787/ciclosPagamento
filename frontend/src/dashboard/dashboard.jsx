import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Vb from '../common/widget/valueBox';
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
        return (
            <div>
              <ContentHeader title='Dashboard' small='Versao 1.0' />
              <Content>
                <Row>
                    <Vb 
                    cols='12 4' 
                    color='green' 
                    icon='bank'
                    value='R$10'
                    text='Total crédito' 
                    />
                    <Vb 
                    cols='12 4' 
                    color='red' 
                    icon='credit-card'
                    value='R$10'
                    text='Total débito' 
                    />
                    <Vb 
                    cols='12 4' 
                    color='blue' 
                    icon='money'
                    value='R$0'
                    text='valor consolidado' 
                    />
                </Row>
              </Content>
            </div>
        )
    }
}

export default Dashboard