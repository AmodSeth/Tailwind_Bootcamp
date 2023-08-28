import mongoose from 'mongoose';


export async function connect() {
    try {
        mongoose.connect(process.env.DB_URL!);
        const connection = mongoose.connection;
        // /*grabbing a connection */
        connection.on('connected', () => {
            console.log('mongoDB connected successfully');
        })
        connection.on('error', (err) => {
            console.log("Mongo db connection error. please make sure mongoDb is running", err)
        })


    } catch (error) {
        console.log("something went wrong")
    }
}

