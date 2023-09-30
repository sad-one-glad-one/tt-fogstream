import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getNews } from '../../api/getNews'

const HeroView = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
    }, [])

    return (
        <div>
            HeroView
        </div>
    )
}

export default HeroView
