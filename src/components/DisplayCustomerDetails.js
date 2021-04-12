export default function DisplayCustomerDetails({ customer }) {

    return (

        <div>

            id = {customer.customerId}<br />
            name = {customer.name}<br />
            accountId = {customer.accountId}<br />
            balance = {customer.balance}

        </div>

    );


}