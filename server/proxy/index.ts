import DB from '../db';
import { IPost, IComment } from '~/types/schema';
const { Post, Category, Setting, Profile } = DB.Models;

export async function getCategories () {
  const categories = await Category.find(
    {},
    {},
    { sort: 'sequence cateName' }
  ).exec();
  return categories;
}

export async function getPosts (params) {
  let page = 1;
  const pageSize = parseInt(params.pageSize);
  page = parseInt(params.pageIndex) || 1;
  page = page > 0 ? page : 1;
  const conditions: any = {
    isDraft: false,
    isActive: true
  };
  if (params.category) {
    conditions.category = params.category;
  }
  const keyword = params.keyword;
  if (keyword) {
    switch (params.filterType) {
      case 'title':
        conditions.title = { $regex: keyword, $options: 'gi' };
        break;
      case 'tag':
        conditions.labels = { $regex: keyword, $options: 'gi' };
        break;
      case 'date':
        if (
          Array.isArray(keyword) &&
                    keyword.length === 2 &&
                    keyword[0] &&
                    keyword[1]
        ) {
          const start = new Date(keyword[0]);
          const end = new Date(keyword[1]);
          conditions.publishTime = { $gte: start, $lt: end };
        }
        break;
      default:
        conditions.$or = [
          {
            title: {
              $regex: keyword,
              $options: 'gi'
            }
          },
          {
            labels: {
              $regex: keyword,
              $options: 'gi'
            }
          },
          {
            content: {
              $regex: keyword,
              $options: 'gi'
            }
          }
        ];
    }
  }
  const data = await Promise.all([
    Post.find(
      conditions,
      {},
      {
        skip: (page - 1) * pageSize,
        limit: pageSize,
        sort: '-publishTime'
      }
    )
      .populate('category')
      .populate('comments', '_id')
      .exec(),
    Post.countDocuments(conditions).exec()
  ]);
  const postList = data[0];
  const count = data[1];
  const pageCount = Math.ceil(count / pageSize);

  return {
    postList,
    count,
    hasNext: pageCount > page
  };
}

export async function getPopArticles () {
  const conditions: any = {
    isDraft: false,
    isActive: true
  };
  const articles = await Post.find(conditions, '-content', {
    sort: '-viewCount',
    limit: 7
  })
    .populate('category')
    .exec();
  return {
    articles
  };
}
export async function getPopLabels () {
  const labels = await Post.aggregate([
    {
      $unwind: '$labels'
    },
    {
      $group: {
        _id: '$labels',
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1, _id: 1 }
    },
    {
      $limit: 10
    }
  ]).exec();
  return {
    labels
  };
}

export async function getPostsCountByCate (category) {
  const test: any = {
    category,
    isDraft: false,
    isActive: true
  } as IPost
  const count = await Post.countDocuments(test).exec();
  return count;
}

export async function getArticle (params, user) {
  const alias = params.alias;
  const conditions: any = {
    alias
  } as IPost;
  if (!user) {
    // 未登录，即不是管理员账号，则限制只展示已发布和未删除的文章
    conditions.isDraft = false;
    conditions.isActive = true;
  }
  const article = await Post.findOne(conditions)
    .populate('category')
    .exec();
  return article;
}


export async function getSettings () {
  const settings = await Setting.findOne().exec();
  return {
    settings
  };
}

export async function getProfile () {
  const profile = await Profile.findOne().exec();
  return {
    profile
  };
}
