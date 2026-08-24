import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  selectedServices: [{ type: String }],
  budgetRange: { type: String, required: true },
  targetTimeline: { type: String, required: true },
  preferredAgencyPartners: [{ type: String }],
  projectDetails: { type: String, required: true },
  estimatedCost: { type: String },
  status: { type: String, default: 'Pending Review' }
}, { timestamps: true });

export default mongoose.model('Inquiry', inquirySchema);
