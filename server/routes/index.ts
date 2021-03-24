import { Router } from 'express';
import * as proxy from '../proxy/index';
import { IResp } from '../../types';

const router = Router();

router.get('/categories', async (_req, res) => {
  let resp: IResp;
  try {
    const categories = await proxy.getCategories();
    resp = {
      code: 1,
      data: categories
    };
  } catch (err) {
    console.error(111, err);
    resp = {
      code: -1,
      message: err.message
    };
  }
  res.json(resp);
});

router.get('/posts', async (req, res) => {
  let resp: IResp;
  try {
    const data = await proxy.getPosts(req.query);
    resp = {
      code: 1,
      data
    };
  } catch (err) {
    console.error(err);
    resp = {
      code: -1
    };
  }
  res.json(resp);
});

router.get('/postsCountByCate', async (req, res) => {
  let resp: IResp;
  try {
    const data = await proxy.getPostsCountByCate(req.query.category);
    resp = {
      code: 1,
      data
    };
  } catch (err) {
    console.error(err);
    resp = {
      code: -1
    };
  }
  res.json(resp);
});

router.get('/popArticles', async (_req, res) => {
  let resp: IResp;
  try {
    const data = await proxy.getPopArticles();
    resp = {
      code: 1,
      data
    };
  } catch (err) {
    console.error(err);
    resp = {
      code: -1
    };
  }
  res.json(resp);
});

router.get('/popLabels', async (_req, res) => {
  let resp: IResp;
  try {
    const data = await proxy.getPopLabels();
    resp = {
      code: 1,
      data
    };
  } catch (err) {
    console.error(err);
    resp = {
      code: -1
    };
  }
  res.json(resp);
});

router.get('/article', async (req, res) => {
  let resp: IResp;
  try {
    const data = await proxy.getArticle(req.query, (req as any).user);
    resp = {
      code: 1,
      data
    };
  } catch (err) {
    console.error(err);
    resp = {
      code: -1
    };
  }
  res.json(resp);
});


router.get('/settings', async (_req, res) => {
  let resp: IResp;
  try {
    const settings = await proxy.getSettings();
    resp = {
      code: 1,
      data: settings
    };
  } catch (err) {
    console.error(err);
    resp = {
      code: -1
    };
  }
  res.json(resp);
});

router.get('/profile', async (_req, res) => {
  let resp: IResp;
  try {
    const profile = await proxy.getProfile();
    resp = {
      code: 1,
      data: profile
    };
  } catch (err) {
    console.error(err);
    resp = {
      code: -1
    };
  }
  res.json(resp);
});

export default router;
