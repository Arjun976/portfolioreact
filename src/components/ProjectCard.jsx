
import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'


export default function ProjectCard({ title, image, tech = [], demo, repo }) {
return (
<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
{image && <CardMedia component="img" height="160" image={image} alt={title} />}
<CardContent sx={{ flex: 1 }}>
<Typography variant="h6" gutterBottom>{title}</Typography>
<Stack direction="row" spacing={1} flexWrap="wrap">
{tech.map((t) => <Chip key={t} label={t} size="small" sx={{ mt: 1 }} />)}
</Stack>
</CardContent>
<CardActions>
{demo && <Button size="small" href={demo} target="_blank" rel="noreferrer">Live</Button>}
{repo && <Button size="small" href={repo} target="_blank" rel="noreferrer">Code</Button>}
</CardActions>
</Card>
)
}