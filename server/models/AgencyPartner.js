import mongoose from 'mongoose';

const agencyPartnerSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  location: { type: String, required: true }, // e.g. "Tokyo / Zurich", "New York / London"
  specialization: { type: String, required: true },
  collaborationsCount: { type: Number, default: 1 },
  logo: { type: String, required: true },
  badgeColor: { type: String, default: 'cyan' },
  featuredProjects: [{ type: String }],
  status: { type: String, default: 'Active Partner' }
}, { timestamps: true });

export default mongoose.model('AgencyPartner', agencyPartnerSchema);
