const Event = require('../models/Event');

// 📥 Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 }); // latest first
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Erro ao obter eventos da base de dados.' });
    }
};

// ➕ Create new event
exports.createEvent = async (req, res) => {
    try {
        const { title, description, location, date, imageUrl, icon, liked } = req.body;

        if (!title || !description || !location || !date) {
            return res.status(400).json({ message: 'Campos obrigatórios em falta.' });
        }

        const newEvent = new Event({ title, description, location, date, imageUrl, icon, liked });
        const saved = await newEvent.save();

        res.status(201).json({
            message: 'Evento criado com sucesso!',
            event: saved,
        });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Erro ao criar o evento.' });
    }
};

// 🗑️ Delete event
exports.deleteEvent = async (req, res) => {
    try {
        const deleted = await Event.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Evento não encontrado.' });
        res.status(200).json({ message: 'Evento eliminado com sucesso!' });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ message: 'Erro ao eliminar o evento.' });
    }
};