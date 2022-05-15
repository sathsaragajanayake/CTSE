const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema =  mongoose.Schema({
    invoiceId : {
        type:String
    },
    customer_name : {
        type:String
    },
    customer_address : {
        type:String
    },
    phone : {
        type:String
    },
    invoice_date : {
        type:String
    },
    tot_inv_amount : {
        type:String
    },
    pay_method : {
        type:String
    },
    item_code : {
        type:String
    },
    item_name : {
        type:String
    },
    item_amount : {
        type:String
    }
},{timesamps:true})

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = {Invoice}
