const getAllNews = (req, res) => {
    res.send('Get All News')
}
const getSingleNews = (req, res) => {
    res.send('Get A Single News')
}
const createNews = (req, res) => {
    res.send('Create News')
}
const updateNews = (req, res) => {
    res.send('Update News')
}
const deleteNews = (req, res) => {
    res.send('delete News')
}

module.exports = {
    getAllNews,
    getSingleNews,
    createNews,
    updateNews,
    deleteNews
}