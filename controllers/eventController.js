const Event = require('../models/Event');

// Get all events from MongoDB
exports.getAllEvents = async (req, res) => {
    try {
        // Fetch all events sorted by date (oldest first)
        const events = await Event.find().sort({ date: 1 });
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events from MongoDB:', error);
        res.status(500).json({ message: 'Erro ao obter os eventos da base de dados.' });
    }
};

// Create a new event in MongoDB
exports.createEvent = async (req, res) => {
    try {
        const { title, description, location, date, imageUrl, maxParticipants, organizerName } = req.body;

        // Validate required fields
        if (!title || !description || !location || !date) {
            return res.status(400).json({ message: 'Por favor, preenche todos os campos obrigatórios.' });
        }

        // Create and save the event document in MongoDB
        const newEvent = new Event({
            title,
            description,
            location,
            date,
            imageUrl,
            maxParticipants,
            organizerName,
        });

        const savedEvent = await newEvent.save();
        res.status(201).json({
            message: 'Evento criado com sucesso!',
            event: savedEvent,
        });
    } catch (error) {
        console.error('Error creating event in MongoDB:', error);
        res.status(500).json({ message: 'Erro ao criar o evento na base de dados.' });
    }
};

// Delete an event by ID from MongoDB
exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if event exists and delete it
        const deletedEvent = await Event.findByIdAndDelete(id);

        if (!deletedEvent) {
            return res.status(404).json({ message: 'Evento não encontrado.' });
        }

        res.status(200).json({ message: 'Evento eliminado com sucesso!' });
    } catch (error) {
        console.error('Error deleting event from MongoDB:', error);
        res.status(500).json({ message: 'Erro ao eliminar o evento da base de dados.' });
    }
};

// Join an event (increment participants) in MongoDB
exports.joinEvent = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the event by ID
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ message: 'Evento não encontrado.' });
        }

        // Check if maxParticipants reached
        if (event.participants >= event.maxParticipants) {
            return res.status(400).json({ message: 'O evento já atingiu o número máximo de participantes.' });
        }

        // Update participants and save in MongoDB
        event.participants += 1;
        await event.save();

        res.status(200).json({
            message: 'Inscrição no evento concluída com sucesso!',
            event,
        });
    } catch (error) {
        console.error('Error joining event in MongoDB:', error);
        res.status(500).json({ message: 'Erro ao inscrever-se no evento na base de dados.' });
    }
};
