import Video from '../models/video';

export const createVideo = async (req, res) => {
    
    const {name, author, category, imgUrl, url} = req.body

    const newVideo = new Video({name, author, category, imgUrl, url});

    const videoSaved = await newVideo.save()

    res.status(201).json(videoSaved);
}

export const getVideoById = async (req, res) => {
    const video = await Video.findById(req.params.videoId);
    res.status(200).json(video);
}

export const getVideos = async (req, res) => {
    const videos = await Video.find();
    res.json(videos);
}

export const updateVideoById = async (req, res) => {
    const updatedVideo = await Video.findByIdAndUpdate(req.params.videoId, req.body, {
        new: true
    })
    res.status(200).json(updatedVideo)
}

export const deleteVideoById = async (req, res) => {
    const deletedVideo = await Video.findByIdAndDelete(req.params.videoId)
    res.status(204).json()
}