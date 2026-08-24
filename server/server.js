import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import apiRoutes from './routes/api.js';
import Project from './models/Project.js';
import AgencyPartner from './models/AgencyPartner.js';
import { initialProjects, initialAgencyPartners } from './data/initialData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', server: 'NeonWorks MERN API Server', time: new Date() });
});

// MongoDB Connection attempt
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/neonworks';

const seedDatabase = async () => {
  try {
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.insertMany(initialProjects);
      console.log('⚡ Seeded initial real-world projects into MongoDB!');
    }
    const partnerCount = await AgencyPartner.countDocuments();
    if (partnerCount === 0) {
      await AgencyPartner.insertMany(initialAgencyPartners);
      console.log('⚡ Seeded initial partner agencies into MongoDB!');
    }
  } catch (err) {
    console.error('Error seeding data:', err.message);
  }
};

mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 3000
})
.then(async () => {
  console.log('🟢 MongoDB connected successfully');
  await seedDatabase();
})
.catch((err) => {
  console.log('⚠️ MongoDB connection deferred or unavailable:', err.message);
  console.log('💡 Server running cleanly with in-memory fallback API data!');
});

app.listen(PORT, () => {
  console.log(`🚀 NeonWorks Backend API Server listening on port ${PORT}`);
});
