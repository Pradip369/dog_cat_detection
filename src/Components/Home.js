import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Link } from "react-router-dom"
import { ADMIN_PANEL, MIN_IO_DASHBOARD } from '../App';

const defaultTheme = createTheme();

const Home = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://media.istockphoto.com/id/1324099927/photo/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-drops-of-warm-rain.jpg?s=612x612&w=0&k=20&c=ZQiqn4SPj_7WhjhbahGJ1UwaJMrwuuSkJRjYAi9YYx0=)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid style={{ background: '#737573' }} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div class="alert alert-primary" role="alert">
                            Welcome to Dog and Cat Image Detection Console
                        </div>

                        <Box component="box" noValidate sx={{ mt: 5 }}>
                            <Link to="/cat_dog_images">
                                <Button color="info" variant='contained' size='large'>
                                    View Cat & Dog Images
                                </Button>
                            </Link>
                        </Box>

                        <Box component="box" noValidate sx={{ mt: 5 }}>
                            <Link to={ADMIN_PANEL} target="_blank">
                                <Button color="secondary" variant='contained' size='large'>
                                    View Admin Panel
                                </Button>
                            </Link>
                        </Box>

                        <Box component="box" noValidate sx={{ mt: 5 }}>
                            <Link to={MIN_IO_DASHBOARD} target="_blank">
                                <Button color="error" variant='contained' size='large'>
                                    View MinIO Dashboard
                                </Button>
                            </Link>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Home;