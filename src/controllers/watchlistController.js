import { prisma } from "../config/db.js"

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
        where: { 
            userId_movieId: {
            userId: req.user.id,
            movieId: movieId,
        } },
    }) 


    if (existingInWatchlist) {
        return res.status(409).json({ error: "Movie already exists in watchlist" })
    }

    const watchlistItem = await prisma.watchlistItem.create({
        data:{
            userId: req.user.id,
            movieId,
            status: status || "PLANNED",
            rating,
            notes, 
        }                                                    
    })
    res.status(201).json({ status: "success", 
        data: {
            watchlistItem,
        }
    })


}
export { addToWatchList }
