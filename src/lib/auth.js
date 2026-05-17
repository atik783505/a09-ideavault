// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db('ideavaultdb');

// export const auth = betterAuth({
//     database: mongodbAdapter(db, {
//         // Optional: if you don't provide a client, database transactions won't be enabled.
//         client
//     }),
//     emailAndPassword: {
//         enabled: true,
//     },
//     socialProviders: {
//         google: {
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         },
//     },
// });

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// MongoClient তৈরি করো
const client = new MongoClient(process.env.MONGODB_URI);

export const auth = betterAuth({
    // 💡 পরিবর্তন এখানে: mongodbAdapter-এ সরাসরি 'client' পাস করতে হবে
    database: mongodbAdapter(client, {
        databaseName: "ideavaultdb", // তোমার ডাটাবেজের নাম এখানে দাও
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
});