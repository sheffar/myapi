import mongoose from "mongoose";


const newsSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
    mainContent: String,
    category: String
});

const TechnologyNewsSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
    mainContent: String,
    category: String
});
const RussiaWarNewsSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
    mainContent: String,
    category: String
});
const IsraelWarNewsSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
    mainContent: String,
    category: String
});
const SportNewsSchema = new mongoose.Schema({
    imageUrl: String,
    title: String,
    description: String,
    mainContent: String,
    category: String
});

export const TechnologyNews = mongoose.model('TechnologyNews', TechnologyNewsSchema);
export const RussiaWarNews = mongoose.model('RussiaWarNews', RussiaWarNewsSchema);
export const IsraelWarNews = mongoose.model('IsraelWarNews', IsraelWarNewsSchema);
export const SportNews = mongoose.model('SportNews', SportNewsSchema);
export const News = mongoose.model('news', newsSchema)



