import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import './styles/Card.css'



export default function MultiActionAreaCard({
image,
category,
title
})
{
    
   
    
    return (
       
        <Card className="card-container" sx={{height:'100%',boxShadow:"1px 5px 8px 2px gray"}} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {category}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: title === 'jwellery' ? '102px':'14px', }}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="card-container">
                <Button size="small" color="primary">
                    See More
                </Button>
            </CardActions>
        </Card>
    );
}
