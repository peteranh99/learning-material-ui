import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Book(props) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={props.book.picture}
                    title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" noWrap>
                        {props.book.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">This is where book description will be.</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Buy
                </Button>
                <Button size="small" color="primary">
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}
