 import event from '../controller/events';
    import express from 'express';
    const router = express.Router();
    router.post('/', event.add);
    export default router;