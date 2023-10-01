import { useEffect, useId } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import imageNotFound from '../../assets/image-not-found.jpg'
import { getNews } from '../../api/getNews'
import { ruDateFormat } from '../../utils/ruDateFormat'

const HeroView = () => {
  const dispatch = useDispatch()
  const newsList = useSelector((state) => state.news.news)

  const id = useId()

  useEffect(() => {
    !newsList.length && dispatch(getNews())
  }, [dispatch, newsList])

  return (
    <section className="hero">
      {newsList.map((item, index) =>
        <Card key={`${id}-${index}`}>
          <Link to={`/article/${item.title}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 240, objectFit: 'cover', marginBottom: 'auto' }}
                image={item.urlToImage ?? imageNotFound}
                alt={item.urlToImage ? `picture by ${item.author}` : 'picture not found'}
              />
            </CardActionArea>
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography sx={{ marginTop: 'auto' }} color="text.secondary">
              {ruDateFormat(item.publishedAt)}
            </Typography>
          </CardContent>
        </Card>
      )}
    </section>
  )
}

export default HeroView
