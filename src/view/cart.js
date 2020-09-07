import React from 'react';

// import components
import HeaderSection from './../component/header';

const Cart = () => { 
    return (
        <div>
            <HeaderSection />
            <div className="mt-50">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img className="img-fluid" alt={'/'} /></td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                    <td>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><button class="btn btn-primary" type="button" style={{backgroundcolor: "rgb(176,9,79)",border: "none",borderRadius: "0"}}><i className="material-icons">add</i></button></li>
                                            <li className="list-inline-item"><button class="btn btn-primary" type="button" style={{backgroundColor: "rgb(1,13,25)",border: "none",borderRadius: "0"}}><i className="material-icons">remove</i></button></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-4"><span>Total item(s)</span>
                    <p>1</p><span>Amount</span>
                    <p>N 2000</p>
                    <form>
                        <div className="form-group"><input className="form-control" type="email" placeholder="Email" style={{height: "50px",borderRadius: "0",border: "1px solid rgb(0,6,11)"}}/></div>
                        <div><button className="btn btn-primary" type="button" style={{backgroundColor: "rgb(0,6,11)",height: "50px",width: "100%",border: "none",borderRadius: "0"}}>Pay with paystack</button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
 }

export default Cart;