import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { Box } from '@material-ui/core';

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
                    <Box mx={1}>
                        <FavoriteBorderOutlined></FavoriteBorderOutlined>
                    </Box>
                     Buy
                </Button>
                <Button size="small" color="primary">
                    <Box mx={1}>
                        <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Box>
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}
