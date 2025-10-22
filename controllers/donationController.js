const Donation = require('../models/Donation');
const connectDB = require('../lib/mongodb');

// GET /api/donations
exports.getAllDonations = async (req, res) => {
  try {
    await connectDB();
    const donations = await Donation.find().sort({ createdAt: -1 }).limit(20);
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar doações', error: error.message });
  }
};

// POST /api/donations
exports.createDonation = async (req, res) => {
  try {
    await connectDB();
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar doação', error: error.message });
  }
};

// GET /api/donations/stats
exports.getDonationStats = async (req, res) => {
  try {
    await connectDB();
    const donations = await Donation.find({ status: 'completed' });
    const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
    const totalDonations = donations.length;
    
    res.json({
      totalAmount,
      totalDonations,
      averageDonation: totalDonations > 0 ? totalAmount / totalDonations : 0,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar estatísticas', error: error.message });
  }
};