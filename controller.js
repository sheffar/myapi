// const News = require('./models/News'); // Assuming your News model is in a file called News.js
import { TechnologyNews, RussiaWarNews, IsraelWarNews, SportNews, News } from "./news.model.js";

export const createNews = async (req, res) => {
    const { imageUrl, title, description, mainContent, category } = req.body;

    try {
        // Check if news title already exists
        const existingNews = await News.findOne({ title });
        if (existingNews) {
            return res.status(400).json({ message: 'A News With This Title Already Exist' });
        }

        let newsModel;
        switch (category) {
            case 'Technology':
                newsModel = TechnologyNews;
                break;
            case 'Russia War':
                newsModel = RussiaWarNews;
                break;
            case 'Israel War':
                newsModel = IsraelWarNews;
                break;
            case 'Sport':
                newsModel = SportNews;
                break;
            default:
                return res.status(400).json({ message: 'Invalid category' });
        }

        // Create new news item in the selected category
        const newsItem = new newsModel({ imageUrl, title, description, mainContent, category });
        await newsItem.create();

        res.status(200).json({ message: 'News saved successfully' });
    } catch (error) {
        console.error('Error creating news item:', error);
        res.status(400).json({ message: 'Internal server error' });
    }
};

// get all news api
export const getallnews = async (req, res) => {
    try {
        let news = await News.find()
        
        if(!news){
            return res.status(400).json({message: `No news found`})
        }

        return res.status(200).json({news})

    } catch (e) {
        return res.status(400).json({ message: `An Error occured `})
    }
}
