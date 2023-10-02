import { useCallback, useEffect, useId, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

import imageNotFound from '../assets/image-not-found.jpg'
import { getNews } from '../api/getNews'
import { ruDateFormat } from '../utils/ruDateFormat'
import { sortNewsAction } from '../store/NewsReducer'

const HeroView = () => {
  const dispatch = useDispatch()
  const newsList = useSelector((state) => state.news.news)
  const [sortDirection, setSortDirection] = useState('asc')
  const isPageLoading = useSelector((state) => state.page.isLoading)

  const id = useId()

  const fetchData = useCallback(() => {
    dispatch(getNews())
  }, [dispatch])

  // TOOD: в хуки вынести :^)
  const handleSort = (array, key) => {
    const sortedArray = [...array].sort((a, b) =>
      sortDirection === 'asc' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
    )

    dispatch(sortNewsAction(sortedArray))
    setSortDirection((prevDirection) => prevDirection === 'asc' ? 'desc' : 'asc')
  }
  const handleFilter = (array, key, extraValue) => {
    const filteredArray = array.filter((item) => item[key] !== extraValue)
    dispatch(sortNewsAction(filteredArray))
  }

  useEffect(() => {
    !newsList.length && fetchData()
  }, [fetchData, newsList])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '8px', width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginLeft: 'auto' }}>
        <Button onClick={() => handleSort(newsList, 'title')}>
          сортировать по заголовку
        </Button>
        <Button onClick={() => handleSort(newsList, 'publishedAt')}>
          сортировать по дате
        </Button>
      </Box>
      <Button
        sx={{ marginLeft: 'auto' }}
        onClick={() => handleFilter(newsList, 'publishedAt', '1970-01-01T00:00:00Z')}
      >
        фильтр по дате
      </Button>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: '20px',
        width: '100%',
        paddingTop: '16px',
      }}>
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
              <Typography color="text.secondary">
                {ruDateFormat(item.publishedAt)}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
      {newsList.length > 1 &&
        <FetchContentTrigger fetchData={fetchData} />
      }
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isPageLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}

const FetchContentTrigger = ({ fetchData }) => {
  const loaderRef = useRef(null)

  const handleObserver = useCallback((entries) => {
    const target = entries[0]
    if (target.isIntersecting) {
      fetchData()
    }
  }, [fetchData])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }
    const observer = new IntersectionObserver(handleObserver, options)
    if (loaderRef && loaderRef.current) {
      observer.observe(loaderRef.current)
    }
    return () => observer.disconnect()
  }, [fetchData, handleObserver])

  return (
    <Box ref={loaderRef} sx={{ height: '10px' }}></Box>
  )
}

export default HeroView
