import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { init } from '../billingCycle/billingCycleActions';
import LabelAndInput from '../common/form/labelAndInput';
import ItemList from './itemList'; 
import Summary from './summary';

class BillingCycleForm extends Component {

    calculateSummary() {
        //reduce
        const sum = (t, v) => t + v
        return {
            sumCredits: this.props.credits.map(c => +c.value || 0).reduce(sum), 
            sumDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumCredits, sumDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelAndInput} readOnly={readOnly} label='Nome' cols='12 4' placeholer='Informe o nome'/>
                    <Field name='month' component={LabelAndInput} readOnly={readOnly} label='Mês' cols='12 4' placeholer='Informe o mês'/>
                    <Field name='year' component={LabelAndInput} readOnly={readOnly} label='Ano' cols='12 4' placeholer='Informe o ano'/>
                    <Summary credit={sumCredits} debt={sumDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus={true} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" onClick={this.props.init}  className='btn btn-default'>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)