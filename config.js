export const PORT = 8000;

export const MONGO_URI = "mongodb://localhost:27017/mongodb";

export const CorsOptions = {
    origin: "https://home.yorafa.com",
    method: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    // credentials: true,
    allowedHeaders: ["Content-Type"],
};