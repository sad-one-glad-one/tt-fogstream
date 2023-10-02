import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { Box, CircularProgress, Typography } from '@mui/material'

import { PhotoProvider, PhotoView } from 'react-photo-view'

import { getArticle } from '../api/getNews'

import { ruDateFormat } from '../utils/ruDateFormat'

import { setArticleAction } from '../store/NewsReducer'
import 'react-photo-view/dist/react-photo-view.css'

const ArticleView = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { title } = useParams()
  const article = useSelector((state) => state.news.article)

  useEffect(() => {
    return () => dispatch(setArticleAction({}))
  }, [location, dispatch])

  useEffect(() => {
    dispatch(getArticle(title))
  }, [title, dispatch])

  return (
    <>
      {article
        ? <Box>
          <Typography>{article.title}</Typography>
          <PhotoProvider>
            <PhotoView src={article.urlToImage}>
              <img
                style={{ maxWidth: '300px', cursor: 'pointer' }}
                src={article.urlToImage}
                alt={article.urlToImage ? `picture by ${article.author}` : 'picture not found'}
                draggable="false"
              />
            </PhotoView>
          </PhotoProvider>
          <Typography>Автор: {article.author}</Typography>
          <Typography>{article.description}</Typography>
          {ruDateFormat(article.publishedAt)}
        </Box>
        : <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
          <CircularProgress color="inherit" />
        </Box>
      }
    </>
  )
}

export default ArticleView
