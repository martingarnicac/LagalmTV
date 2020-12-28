import {Router} from 'express';
const router = Router()

import * as videoController from '../controllers/video.controller'

router.post('/', videoController.createVideo)

router.get('/', videoController.getVideos)

router.get('/:videoId', videoController.getVideoById)

router.put('/:videoId', videoController.updateVideoById)

router.delete('/:videoId', videoController.deleteVideoById)

export default router;