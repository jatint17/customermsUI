import React, { Component } from 'react';
import { getCustomerById } from '../service/CustomerService';
import DisplayCustomerDetails from './DisplayCustomerDetails';

export default class GetCustomerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { id: null, customer: undefined, errorMessage: undefined };
    }

    idRef = React.createRef();

    submitHandler(event) {
        console.log("hello");
        event.preventDefault();
        const promise = getCustomerById(this.state.id);

        promise.then((response) => {
        
            const customer = response.data;
            this.setState({ ...this.state, customer:customer, errorMessage: undefined });
            console.log(customer);
        
        }).catch((error) => {
                
                console.log("error occured", error);
                this.setState({...this.state, customer: undefined, errorMessage: "error.response.data"});
            
            });        
    }

    setFieldVal(reference) {
        const field = reference.current;
        const fieldName = field.name;
        let fieldVal = field.value;
        this.setState({ ...this.state, [fieldName]: fieldVal, customer: undefined, errorMessage: undefined });
    }


    render() {

        return (
            <div>
                <h2>Get Customer Details</h2>
                <form onSubmit={(event) => this.submitHandler(event)}>
                    <div>
                        <label>Enter Id: </label>
                        <input type="text" name="id" ref={this.idRef} onChange={() => this.setFieldVal(this.idRef)} />
                    </div>
                    <button>Find Customer</button>
                </form>

                {/*to check wether customer is there or not*/}
                {this.state.customer ? (
                    <div>
                        <h2>Customer Details:</h2>
                        <DisplayCustomerDetails customer={this.state.customer} />
                    </div>
                ) : this.state.id}

                {this.state.errorMessage ? (
                    <div>
                        No customer exists for the id: {this.state.id}
                    </div>
                ) : ''}

            </div>
        );
    }
}