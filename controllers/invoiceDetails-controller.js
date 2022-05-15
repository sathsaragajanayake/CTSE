const { Invoice } = require("../models/invoice-model");

const AddDetails = async (req, res, next) => {
  let invoice = new Invoice(req.body);
  await invoice
    .save()
    .then((invoice) => {
      res.status(200).json({ invoice: "invoice is added succesfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save database");
    });
};
const getDetails = async (req, res) => {
  await Invoice.find(function (err, invoice) {
    if (err) console.log(err);
    else {
      res.json(invoice);
    }
  });
};
const editDetails = async (req, res) => {
  await Invoice.findById(req.params.id, function (err, invoice) {
    res.json(invoice);
  });
};
const updateDetails = async (req, res) => {
  await Invoice.findById(req.params.id, function (err, invoice) {
    console.log(req.body);
    if (!invoice) res.status(404).send("data is not found");
    else {
      invoice.invoiceId = req.body.invoiceId;
      invoice.customer_name = req.body.customer_name;
      invoice.customer_address = req.body.customer_address;
      invoice.phone = req.body.phone;
      invoice.invoice_date = req.body.invoice_date;
      invoice.tot_inv_amount = req.body.tot_inv_amount;
      invoice.pay_method = req.body.pay_method;
      invoice.item_code = req.body.item_code;
      invoice.item_name = req.body.item_name;
      invoice.item_amount = req.body.item_amount;
      invoice
        .save()
        .then((invoice) => {
          console.log(invoice);
          res.json(invoice);
        })
        .catch((err) => {
          res.status(400).send("unable to update database ");
        });
    }
  });
};
const deleteDetails = async (req, res) => {
  await Invoice.findByIdAndRemove(
    { _id: req.params.id },
    function (err, invoice) {
      if (err) res.json(err);
      else res.json("successfully removed");
    }
  );
};
module.exports = {
  AddDetails,
  getDetails,
  editDetails,
  updateDetails,
  deleteDetails,
};