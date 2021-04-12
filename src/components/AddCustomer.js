// import React, { Component } from "react";

// export default class AddCustomer extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {name: undefined, customer: undefined, errorMessage:undefined};
//     }

//     nameRef = React.createRef();

//     setFieldVal(reference) {
//         const field = reference.current;
//         const fieldName = field.name;
//         let fieldVal = field.value;
//         this.setState({ ...this.state, [fieldName]: fieldVal, customer: undefined, errorMessage: undefined });
//     }

//     render() {

//         render(

//             <div>
//                 <div>
//                     <form onSubmit={(event) => this.submitHandler(event)}>
//                     <div>
//                         <label>Enter Name: </label>
//                         <input type="text" name="name" ref={this.nameRef} onChange={() => this.setFieldVal(this.nameRef)} />
//                     </div>
//                     <button>Add Customer</button>
//                 </form>
//                 </div>
//             </div>

//         )
//     }

// }