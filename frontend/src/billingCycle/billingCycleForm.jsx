import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import labelAndInput from '../common/form/labelAndInput';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} label='Nome' cols='12 4' placeholer='Informe o nome'/>
                    <Field name='month' component={labelAndInput} label='Mês' cols='12 4' placeholer='Informe o mês'/>
                    <Field name='year' component={labelAndInput} label='Ano' cols='12 4' placeholer='Informe o ano'/>
                </div>
                <div className="box-footer">
                    <button type="submit" className='btn btn-primay'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)