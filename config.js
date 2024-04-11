export const PORT = 3000;

export const MONGO_URI = "mongodb+srv://yorafa:sgFBTsgTwusLPCWp@cluster0.c2kr52a.mongodb.net/?retryWrites=true&w=majority";

export const CorsOptions = {
    origin: "https://cemetery.yorafa.com",
    method: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    // credentials: true,
    allowedHeaders: ["Content-Type"],
};