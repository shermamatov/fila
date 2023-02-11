import { Button, createTheme, Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homePageBlock3.css';

const shopsPhotoItems = [
    {
        name: 'Neon',
        img: 'https://i.shgcdn.com/eb64ab30-4070-4ae8-8ec1-a7fcaf894e1a/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
        name: 'Velour',
        img: 'https://i.shgcdn.com/a499c45a-92b4-4be3-922a-754da0383a52/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
        name: 'Basketball',
        img: 'https://i.shgcdn.com/ecc3e270-4aa3-463e-9c11-49eb7b8d3149/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
        name: 'Tie Dye',
        img: 'https://i.shgcdn.com/f5271cea-f06e-4e3f-a289-ca568318fec6/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
        name: 'Premium',
        img: 'https://i.shgcdn.com/6fbde259-52b7-4faa-a0a0-ee1e12832b64/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
        name: 'One World',
        img: 'https://i.shgcdn.com/91f6f44c-5594-497e-86f0-df470468dd2e/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
];

const HomePage = () => {
    const navigate = useNavigate();

    const theme = createTheme();
    return (
        //! BLOCK-1 ELIZA
        <ThemeProvider theme={theme}>
            <Grid>
                <Box sx={{ width: '100%', marginBottom: 5 }}>
                    <img
                        src="https://i.shgcdn.com/19ca41e4-02d3-49db-a070-3d2dceac92eb/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                        alt=""
                        width={'100%'}
                    />
                </Box>
                <Grid
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <Box
                        sx={{
                            display: {
                                lg: 'flex',
                                xs: 'none',
                            },
                        }}
                    >
                        <img
                            sx={{
                                width: {
                                    lg: '100%',
                                },
                            }}
                            className="image-one"
                            src="https://i.shgcdn.com/8e7a4ef3-eec9-475e-859a-3e05a60a83ce/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                            alt=""
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <h1 className="text-one">FILA Varsity Collection</h1>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0a203f',
                                color: 'white',
                                width: '260px',
                                height: '70px',
                                mb: '50px',
                            }}
                            onClick={() => navigate('/products')}
                        >
                            SHOP NOW
                        </Button>
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                },
                            }}
                        >
                            {' '}
                            <img
                                className="image-two"
                                src="https://i.shgcdn.com/62ec4c91-8e59-4994-b7d3-4b64e01f944c/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                                alt=""
                            />
                        </Box>
                    </Box>
                </Grid>
                {/* ADAHAN */}

                <div className="tranding__mainBlock">
                    <h3>Trending Shops</h3>
                    <div className="photosTranding">
                        {shopsPhotoItems.map((e, index) => (
                            <div key={index} className="photoDivs">
                                <img src={e.img} alt="" width="100%" />
                                <p>{e.name}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <img
                            className="mainPhoto"
                            src="https://i.shgcdn.com/559ad64b-379f-497f-aa5e-ab10a71d3d7e/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                            alt=""
                        />
                    </div>
                    <div className="headerMain">
                        <h3>FILA Atrani Collection</h3>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0a203f',
                                color: 'white',
                                width: '200px',
                                height: '50px',
                            }}
                            onClick={() => navigate('/products')}
                        >
                            SHOP NOW
                        </Button>
                    </div>
                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'block',
                            },
                        }}
                    >
                        <div className="center_div">
                            <div className="left_div">
                                <h3 className="text-3">Collabs in reveiw</h3>
                                <img
                                    src="https://i.pinimg.com/originals/1e/b8/eb/1eb8ebf951df90868dea9d36eb9eb31a.png"
                                    alt=""
                                />
                            </div>
                            <div className="right_div">
                                <img
                                    src="https://assets.gq.ru/photos/6156fbde484af2ce1241a3db/16:9/w_2560%2Cc_limit/FILA_1%2520%25D1%2584%25D0%25B0%25D0%25B9%25D0%25BD%25D0%25B0%25D0%25BB.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Box>
                </div>

                {/* //! BLOCK-3 SULTAN */}
                <Box>
                    <img
                        width="100%"
                        src="https://i.shgcdn.com/8fa648bd-3bf9-47b7-ab75-27ca341c8960/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                        alt=""
                    />

                    <h1 className="text">Hailey for FILA</h1>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0a203f',
                                color: 'white',
                                width: '200px',
                                height: '50px',
                            }}
                        >
                            DISCOVERE MORE
                        </Button>
                    </Box>
                    <Grid
                        className="btn2"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0a203f',
                                color: 'white',
                                width: '260px',
                                height: '70px',
                                mb: '50px',
                                mt: '50px',
                            }}
                            onClick={() => navigate('/products')}
                        >
                            SHOP NOW
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </ThemeProvider>
    );
};

export default HomePage;
