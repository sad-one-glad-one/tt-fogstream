import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { Box, Typography } from '@mui/material'

import { fetchArticle } from '../api/getNews'

import { ruDateFormat } from '../utils/ruDateFormat'

import { setArticleAction } from '../store/NewsReducer'

const ArticleView = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { title } = useParams()
  const article = useSelector((state) => state.news.article)

  useEffect(() => {
    return () => dispatch(setArticleAction({}))
  }, [location, dispatch])

  useEffect(() => {
    dispatch(fetchArticle(title))
  }, [title, dispatch])

  return (
    <>
      {article
        ? <Box>
          <Typography>{article.title}</Typography>
          <img
            style={{ maxWidth: '300px', cursor: 'pointer' }}
            src={article.urlToImage}
            alt={article.urlToImage ? `picture by ${article.author}` : 'picture not found'}
            draggable="false"
          />
          <Typography>Автор: {article.author}</Typography>
          <Typography>{article.description}</Typography>
          {ruDateFormat(article.publishedAt)}
        </Box>
        : <></>
      }
    </>
  )
}

export default ArticleView
