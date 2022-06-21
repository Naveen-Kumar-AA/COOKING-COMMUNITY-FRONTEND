import { useState, useEffect } from "react"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



const Post = ({ post }) => {
    const [expanded, setExpanded] = useState(false);
    const data = sessionStorage.getItem('Username')
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [likesCount, setLikesCount] = useState(post.likes);
    const [likeStatus, setLikeStatus] = useState(0)

    const likePost = (postID, userID) => {
        const body = {
            postID: postID,
            userID: userID
        }
        axios.post(`http://localhost:3001/like-post`, body).then((response) => {
            setLikesCount(likesCount + 1)

        }).catch((err) => {
            console.log(err)
        })
    }

    const disLikePost = (postID, userID) => {
        const body = {
            postID: postID,
            userID: userID
        }
        axios.post(`http://localhost:3001/dislike-post`, body).then((response) => {
            console.log(response)
            setLikesCount(likesCount - 1)

        }).catch((err) => {
            console.log(err)
        })
    }


    useEffect(() => {

        const req_body = {
            postID: post.postID,
            userID: data
        }
        const response = axios.post('http://localhost:3001/is-liked', req_body).then((res) => {
            setLikeStatus(res.data.status);
        }).catch((err) => {
            console.log(err);
        });

    }, [])

    return (
        <Card sx={{ maxWidth: '100%' }} style={{ 'width': '60%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[800] }} aria-label="recipe">
                        {post.username[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.username}
                subheader={post.date}
            />
            <CardMedia
                component="img"
                height="194"
                image="/"
                alt="Sorry! Image not found."
            />
            <CardContent>
                <Typography variant="button" fontSize={'23px'} color="text.primary">
                    {post.title}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    {post.meal}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    {post.cuisine}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* {console.log(likeStatus)}   */}
                {
                    <Tooltip title="like">
                        <Checkbox checked={likeStatus ? true : false} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={(e) => {
                            if (e.target.checked) {
                                setLikeStatus(1);
                                console.log("IF: ", likeStatus)
                                likePost(post.postID, data)
                            }
                            else {
                                setLikeStatus(0);
                                console.log("ELSE: ", likeStatus)
                                disLikePost(post.postID, data)
                            }
                        }} />
                    </Tooltip>
                    // :
                    // <Tooltip title="like">
                    //     {/* {console.log(likeStatus)} */}
                    //     <Checkbox checked="true" icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={(e) => {
                    //         if (e.target.checked) {
                    //             likePost(post.postID, post.username)
                    //         }
                    //         else {
                    //             disLikePost(post.postID, post.username)
                    //         }
                    //     }} />
                    // </Tooltip>
                }
                <Typography>{likesCount}</Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>

                    <Typography paragraph>
                        {post.recipe_content}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    )
}



export default Post;