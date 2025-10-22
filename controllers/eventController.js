const Event = require('../models/Event');

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });
        res.status(200).json(events);
    } catch (error) {
        console.error('Erro ao obter eventos:', error);
        res.status(500).json({ message: 'Erro ao obter os eventos.' });
    }
};

// Create a new event (used by "Plant your first tree")
exports.createEvent = async (req, res) => {
    try {
        const { title, description, location, date, imageUrl } = req.body;

        const newEvent = new Event({
            title: title || 'Plantação Comunitária 🌳',
            description: description || 'Um novo evento de plantação foi criado!',
            location: location || 'Lisboa, Parque Verde',
            date: date || new Date(),
            imageUrl: imageUrl || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
            organizerName: 'Verde Lab',
        });

        const savedEvent = await newEvent.save();
        res.status(201).json({
            message: '🌱 Evento criado com sucesso!',
            event: savedEvent,
        });
    } catch (error) {
        console.error('Erro ao criar evento:', error);
        res.status(500).json({ message: 'Erro ao criar o evento.' });
    }
};

// Join event
exports.joinEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);
        if (!event) return res.status(404).json({ message: 'Evento não encontrado.' });

        if (event.participants >= event.maxParticipants) {
            return res.status(400).json({ message: 'O evento já atingiu o número máximo de participantes.' });
        }

        event.participants += 1;
        await event.save();
        res.status(200).json({ message: 'Inscrição concluída com sucesso!', event });
    } catch (error) {
        console.error('Erro ao juntar-se ao evento:', error);
        res.status(500).json({ message: 'Erro ao juntar-se ao evento.' });
    }
};

// Delete event
exports.deleteEvent = async (req, res) => {
    try {
        const deleted = await Event.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Evento não encontrado.' });
        res.status(200).json({ message: 'Evento eliminado com sucesso!' });
    } catch (error) {
        console.error('Erro ao eliminar evento:', error);
        res.status(500).json({ message: 'Erro ao eliminar evento.' });
    }
};
