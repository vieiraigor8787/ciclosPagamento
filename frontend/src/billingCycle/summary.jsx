import React, { Component } from 'react';

import Grid from '../common/layout/grid';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox';

export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' inco='bank' value={`R$ ${credit}`} text='Total Créditos' />
                <ValueBox cols='12 4' color='red' inco='credit-card' value={`R$ ${debt}`} text='Total Débitos' />
                <ValueBox cols='12 4' color='blue' inco='money' value={`R$ ${credit - debt}`} text='Valor Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)