import mongoose from 'mongoose';

    const connect = async () => {
        let connection = await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    };

export default {
    connect
}
