import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  category: { type: String, required: true }, // e.g. "Spatial AI", "FinTech", "Web3 & Crypto", "Luxury E-Commerce"
  clientName: { type: String, required: true },
  agencyPartner: {
    name: { type: String, required: true },
    role: { type: String, required: true },
    avatar: { type: String, required: true }
  },
  metrics: {
    conversionBoost: { type: String, default: '+140%' },
    award: { type: String, default: 'FWA of the Day / Awwwards SOTD' },
    activeUsers: { type: String, default: '2.4M+' }
  },
  heroImage: { type: String, required: true },
  gallery: [{ type: String }],
  description: { type: String, required: true },
  tags: [{ type: String }],
  deliverables: [{ type: String }],
  year: { type: String, default: '2025' },
  liveUrl: { type: String, default: '#' },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
