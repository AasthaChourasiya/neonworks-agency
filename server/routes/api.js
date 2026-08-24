import express from 'express';
import Project from '../models/Project.js';
import AgencyPartner from '../models/AgencyPartner.js';
import Inquiry from '../models/Inquiry.js';
import { initialProjects, initialAgencyPartners } from '../data/initialData.js';

const router = express.Router();

// Helper to check MongoDB connection status
const isMongoConnected = () => {
  return typeof Project.db !== 'undefined' && Project.db.readyState === 1;
};

// In-memory submissions fallback cache
let memoryInquiries = [];

// GET /api/projects - list all projects (supports category query filter)
router.get('/projects', async (req, res) => {
  try {
    const { category } = req.query;
    if (isMongoConnected()) {
      let query = {};
      if (category && category !== 'All') {
        query.category = category;
      }
      const projects = await Project.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, count: projects.length, data: projects, source: 'database' });
    } else {
      // Fallback
      let filtered = initialProjects;
      if (category && category !== 'All') {
        filtered = initialProjects.filter(p => p.category.toLowerCase() === category.toLowerCase());
      }
      return res.json({ success: true, count: filtered.length, data: filtered, source: 'fallback' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message, data: initialProjects });
  }
});

// GET /api/projects/:id - single project details
router.get('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (isMongoConnected()) {
      const project = await Project.findOne({ id });
      if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
      return res.json({ success: true, data: project });
    } else {
      const project = initialProjects.find(p => p.id === id);
      if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
      return res.json({ success: true, data: project });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/partners - list partner agencies
router.get('/partners', async (req, res) => {
  try {
    if (isMongoConnected()) {
      const partners = await AgencyPartner.find().sort({ collaborationsCount: -1 });
      return res.json({ success: true, count: partners.length, data: partners, source: 'database' });
    } else {
      return res.json({ success: true, count: initialAgencyPartners.length, data: initialAgencyPartners, source: 'fallback' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message, data: initialAgencyPartners });
  }
});

// POST /api/inquiries - Submit Project Scope Estimation / Inquiry
router.post('/inquiries', async (req, res) => {
  try {
    const { clientName, email, company, selectedServices, budgetRange, targetTimeline, preferredAgencyPartners, projectDetails, estimatedCost } = req.body;
    
    if (!clientName || !email || !projectDetails) {
      return res.status(400).json({ success: false, message: 'Client name, email, and project details are required.' });
    }

    const payload = {
      clientName,
      email,
      company: company || 'N/A',
      selectedServices: selectedServices || [],
      budgetRange: budgetRange || '$50k - $100k',
      targetTimeline: targetTimeline || '4-8 Weeks',
      preferredAgencyPartners: preferredAgencyPartners || [],
      projectDetails,
      estimatedCost: estimatedCost || '$75,000',
      createdAt: new Date()
    };

    if (isMongoConnected()) {
      const newInquiry = new Inquiry(payload);
      await newInquiry.save();
      return res.status(201).json({ success: true, message: 'Project estimation submitted successfully!', inquiryId: newInquiry._id });
    } else {
      memoryInquiries.push(payload);
      return res.status(201).json({ success: true, message: 'Project estimation submitted successfully! (Stored in active session)', inquiryId: `mem-${Date.now()}` });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET /api/stats - Agency statistics overview
router.get('/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      completedRealWorldProjects: 48,
      globalAgencyPartners: 12,
      industryAwardsWon: 29,
      totalClientCapitalRaised: "$1.4B+"
    }
  });
});

export default router;
