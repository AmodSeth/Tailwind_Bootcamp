import mongoose from 'mongoose';


export async function connect() {
        try {
            mongoose.connect(process.env.DB_URL!);
            const connection = mongoose.connection;

            connection.on('connected', () => {
                console.log('mongoDB connected successfully');
            })
            connection.on('error'.replace()=> {
                console.log("Mongo db connection error. please make sure mongoDb is running")
            })


        } catch (error) {
            console.log("something went wrong")
        }


}