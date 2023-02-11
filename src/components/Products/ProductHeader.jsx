import React from 'react';
import { Box } from '@mui/system';
import { Typography, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductHeader = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1024,
                lg: 1150,
                xl: 1536,
            },
        },
    });

    return (
        <Box>
            <Box>
                <Typography
                    sx={{
                        fontSize: '10px',
                        marginLeft: '10%',
                        marginRight: '10%',
                        marginBottom: '10px',
                        marginTop: '10px',
                    }}
                >
                    <Link href="https://www.fila.com/search?cgid=root">
                        FILA /{'shoes '}
                    </Link>
                </Typography>
            </Box>

            <Box sx={{ position: 'relative' }}>
                <img
                    src="https://i.shgcdn.com/1e2ce2e7-63d8-4bc1-ae1d-4c910df9ce52/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
                    width="100%"
                    height="30%"
                    alt="banner"
                />

                <Typography
                    align="center"
                    sx={{
                        position: 'absolute',
                        fontSize: {
                            xs: 15,
                            sm: 22,
                            md: 25,
                            lg: 50,
                            xl: 75,
                        },
                        top: '0',
                        [theme.breakpoints.up('lg')]: {
                            top: '-10%',
                        },
                        [theme.breakpoints.up('xs')]: {
                            top: '-13%',
                        },
                        right: '0',
                        left: '0',
                        lineHeight: '3',
                        fontWeight: '800',
                    }}
                >
                    Shoes + Sneakers
                </Typography>
                <Typography
                    align="center"
                    sx={{
                        position: 'absolute',
                        fontSize: {
                            xs: 5,
                            sm: 15,
                            md: 18,
                            lg: 22,
                            xl: 30,
                        },
                        right: '0',
                        left: '0',
                        bottom: '0',
                        top: '50%',
                        [theme.breakpoints.up('xs')]: {
                            top: '50%',
                        },
                        [theme.breakpoints.up('sm')]: {
                            top: '65%',
                        },
                        [theme.breakpoints.up('md')]: {
                            top: '60%',
                        },
                        [theme.breakpoints.up('lg')]: {
                            top: '70%',
                        },
                        [theme.breakpoints.up('xl')]: {
                            top: '60%',
                        },
                    }}
                >
                    The Latest Styles for Men + Women
                </Typography>
            </Box>
        </Box>
    );
};

export default ProductHeader;
