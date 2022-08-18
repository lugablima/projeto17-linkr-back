import { Router } from "express";

import authRouter from "./authRouter.js";
import postsRouter from "./postsRouter.js";
import likesRouter from "./likesRouter.js";
import hashtagsRouter from "./hashtagsRouter.js";
import usersRouter from "./usersRouter.js";
import commentsRouter from "./commentsRouter.js";

const router = Router();

router.use(authRouter);
router.use(postsRouter);
router.use(likesRouter);
router.use(hashtagsRouter);
router.use(usersRouter);
router.use(commentsRouter);

export default router;
