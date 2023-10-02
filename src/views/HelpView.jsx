import { Box, Typography } from '@mui/material'

const HelpView = () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Autem beatae distinctio facilis necessitatibus obcaecati quas rerum totam unde ' +
        'voluptas. A aliquam beatae cum, eligendi harum ipsa maxime minus, nesciunt officia ' +
        'officiis placeat repellat reprehenderit sit tenetur vitae! A adipisci aspernatur culpa ' +
        'cupiditate deleniti dolor doloremque eius error est exercitationem fugit laboriosam molestias ' +
        'mollitia nemo nostrum obcaecati odio omnis, optio pariatur, quae reprehenderit rerum sequi similique ' +
        'vel voluptates. A cum, cupiditate dignissimos dolor doloremque ex excepturi harum ipsum laudantium nemo ' +
        'numquam placeat suscipit, tempora vitae voluptate! Commodi doloribus earum esse non placeat recusandae ' +
        'sapiente voluptatibus! Consectetur dolor dolore facere ipsa iste!'

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography>
        {text}
      </Typography>
      <Typography>
        {text}
      </Typography>
      <Typography>
        {text}
      </Typography>
    </Box>
  )
}

export default HelpView
