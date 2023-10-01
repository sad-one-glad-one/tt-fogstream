import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import { Box } from '@mui/material'

import { fetchArticle } from '../../api/getNews'

import imageNotFound from '../../assets/image-not-found.jpg'

import { ruDateFormat } from '../../utils/ruDateFormat'
import { setArticleAction } from '../../store/NewsReducer'

const Article = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { title } = useParams()
  const article = useSelector((state) => state.news.article)

  useEffect(() => {
    return () => dispatch(setArticleAction({}))
  }, [location])

  useEffect(() => {
    dispatch(fetchArticle(title))
  }, [title, dispatch])

  return (
    <>
      {article
        ? <Box>
          {article.title}
          {article.author}
          {article.description}
          {ruDateFormat(article.publishedAt)}
          <img
            src={article.urlToImage ?? imageNotFound}
            alt={article.urlToImage ? `picture by ${article.author}` : 'picture not found'}
          />
        </Box>
        : <></>
      }
    </>
  )
}

export default Article
