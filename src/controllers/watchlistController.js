import { prisma } from "../config/db"

const addToWatchList = async (req, res)=> {

    const { movieId, status, rating, notes } = req.body

    // verify movies
    const movie = await prisma.movie.findUnique({
        where: { id: movieId}
    })

    if (!movie) {
        return res.status(404).json({ error: "Movies not found"})
        
    }

    const existingInWatchlist = await prisma.watchlistItem.findUnique({
        where: { id: movieId}
    })



}