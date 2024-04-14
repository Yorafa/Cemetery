export const PORT = 3000;
// here use local mongodb with port 27017
export const MONGO_URI = "mongodb://localhost:27017/cemetery";

export const CorsOptions = {
    origin: "https://cemetery.yorafa.com/",
    method: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    // credentials: true,
    allowedHeaders: ["Content-Type"],
};