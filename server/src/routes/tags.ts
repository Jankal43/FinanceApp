import express from 'express';
import {createTagController} from '../controllers/createTag';
import {getTagsController} from '../controllers/getTags';

const tagsRouter = express.Router();

console.log('tags route');

tagsRouter.post('/', createTagController);
tagsRouter.get('/', getTagsController);

export default tagsRouter;
