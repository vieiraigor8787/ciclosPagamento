import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Vb from '../common/widget/valueBox';
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
      const { credit, debt } = this.props.summary
      return (
          <div>
            <ContentHeader title='Dashboard' small='Versao 1.0' />
            <Content>
              <Row>
                  <Vb 
                  cols='12 4' 
                  color='green' 
                  icon='bank'
                  value={`R$ ${credit}`}
                  text='Total crédito' 
                  />
                  <Vb 
                  cols='12 4' 
                  color='red' 
                  icon='credit-card'
                  value={`R$ ${debt}`}
                  text='Total débito' 
                  />
                  <Vb 
                  cols='12 4' 
                  color='blue' 
                  icon='money'
                  value={`R$ ${credit - debt}`}
                  text='valor consolidado' 
                  />
              </Row>
            </Content>
          </div>
      )
    }
}

const mapStateToProps = state => ({
  summary: state.dashboard.summary
});
export default connect(mapStateToProps)(Dashboard)