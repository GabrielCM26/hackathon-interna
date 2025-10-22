const Tree = require('../models/Tree');

// Garantir conexão do MongoDB
const connectDB = require('../lib/mongodb');

// GET /api/trees
exports.getAllTrees = async (req, res) => {
  try {
    await connectDB();
    const trees = await Tree.find().sort({ createdAt: -1 });
    res.json(trees);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar árvores', error: error.message });
  }
};

// POST /api/trees
exports.createTree = async (req, res) => {
  try {
    await connectDB();
    
    // Calcular impacto automaticamente
    const impact = {
      co2: Math.floor(Math.random() * 20) + 10, // 10-30kg/ano
      oxygen: Math.floor(Math.random() * 100) + 50, // 50-150kg/ano
    };
    
    const tree = new Tree({
      ...req.body,
      impact,
    });
    
    await tree.save();
    res.status(201).json(tree);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao plantar árvore', error: error.message });
  }
};

// DELETE /api/trees/:id
exports.deleteTree = async (req, res) => {
  try {
    await connectDB();
    const tree = await Tree.findByIdAndDelete(req.params.id);
    if (!tree) {
      return res.status(404).json({ message: 'Árvore não encontrada' });
    }
    res.json({ message: 'Árvore removida com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar árvore', error: error.message });
  }
};

// GET /api/trees/stats
exports.getStats = async (req, res) => {
  try {
    await connectDB();
    const trees = await Tree.find();
    const totalTrees = trees.length;
    const totalCO2 = trees.reduce((sum, tree) => sum + tree.impact.co2, 0);
    const totalOxygen = trees.reduce((sum, tree) => sum + tree.impact.oxygen, 0);
    
    res.json({
      totalTrees,
      totalCO2,
      totalOxygen,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar estatísticas', error: error.message });
  }
};