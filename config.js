export const PORT = 80;

export const MONGO_URI = "mongodb+srv://yorafa:sgFBTsgTwusLPCWp@cluster0.c2kr52a.mongodb.net/?retryWrites=true&w=majority";

export const CorsOptions = {
    origin: "https://home.yorafa.com",
    method: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    // credentials: true,
    allowedHeaders: ["Content-Type"],
};