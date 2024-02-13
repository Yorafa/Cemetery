export const PORT = 8000;

export const MONGO_URI = "mongodb://localhost:27017/mongodb";

export const CorsOptions = {
    origin: "http://localhost:3000",
    method: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    // credentials: true,
    allowedHeaders: ["Content-Type"],
};