import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import ResponsiveAppBar from './ResponsiveAppBar';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import InfiniteScroll from "react-infinite-scroll-component";
import { getCatOrDog } from './AxiosCall';
import LazyLoad from './LazyLoad';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : 'orange',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

const CatDog = () => {

    const [images, setImages] = useState([])
    const [checked, setChecked] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [loader, setLoader] = useState(false);

    const fetchMoreData = () => {
        getCatOrDog(setLoader, images, setImages, checked, setHasMore, pageNumber, setPageNumber)
    }

    const onDataChange = (e) => {
        setChecked(e.target.checked)
        setPageNumber(1)
        setImages([])
        getCatOrDog(setLoader, [], setImages, e.target.checked, setHasMore, 1, setPageNumber)
    }

    const reload = () => {
        setImages([])
        getCatOrDog(setLoader, [], setImages, checked, setHasMore, 1, setPageNumber)
    }

    useEffect(() => {
        reload()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <ResponsiveAppBar />
            <center className='mt-3'>
                <h4><b> {checked ? 'Cat' : 'Dog'} Images</b></h4>
            </center>

            <div className='d-flex flex-row-reverse mx-5 mt-4'>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>DOG</Typography>
                    <MaterialUISwitch onChange={onDataChange} />
                    <Typography>CAT</Typography>
                </Stack>
                <Button color='warning' size='small' variant='contained' onClick={reload} className='mx-5'>Reload</Button>
            </div >

            <InfiniteScroll
                dataLength={images.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<LazyLoad />}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        {!loader && <b>No more data!!</b>}
                    </p>
                }
            >
                <div className='mb-5'>
                    <div className='mt-2'>
                        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '5px', justifyContent: 'space-around' }}>
                            {images.map((item) => {
                                return (
                                    <Card sx={{ maxWidth: 290, sx: 2 }} className='my-4' key={item.id}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={item.image}
                                            alt="web image"
                                            style={{ objectFit: 'fill' }}
                                        />
                                        <CardContent>
                                            <Typography>
                                                Accuracy : <b>{Math.round(item.accuracy)} %</b>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.created_date}
                                            </Typography>
                                        </CardContent>
                                        <CardActions className='d-flex flex-row-reverse'>
                                            <Link to={item.image} target='_blank' className='text-decoration-none'>
                                                <Button variant='contained' color='info' size='small'>View Full Image</Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </InfiniteScroll>
            {loader && <LazyLoad />}
        </>

    )
}

export default CatDog;