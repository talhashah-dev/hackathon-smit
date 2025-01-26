import mongoose from 'mongoose';

const loanSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    period: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Loan = mongoose.model('Loan', loanSchema);
export default Loan;
