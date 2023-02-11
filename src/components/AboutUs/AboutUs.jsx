import { Image } from '@mui/icons-material';
import { Box, createTheme, Typography } from '@mui/material';
import { width } from '@mui/system';
import React from 'react';

const AboutUs = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1024,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <div>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '50px ',
                    }}
                >
                    <Typography
                        sx={{
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '12px',
                            },
                            maxWidth: '30%',
                            marginTop: '10%',
                        }}
                    >
                        Для многих, кто вырос в 90-е, марка FILA наверняка
                        всегда будет ассоциироваться с этим временем. Именно на
                        90-е пришелся пик популярности этой корейской марки с
                        итальянскими корнями.
                    </Typography>

                    <img
                        style={{
                            maxWidth: '27%',
                            [theme.breakpoints.down('sm')]: {
                                width: '25%',
                            },
                        }}
                        src="https://static.street-beat.ru/upload/iblock/ba4/ba48ed2d15772c2aefde9419f1ba63be.jpg"
                        alt="his photo"
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '5%',
                        [theme.breakpoints.down('sm')]: {
                            height: '250px',
                        },
                    }}
                >
                    <img
                        style={{
                            maxWidth: '30%',
                            marginRight: '20px',
                        }}
                        src="https://static.street-beat.ru/upload/iblock/60f/60f03140081b9a1a27fb0d88dc16a128.jpg"
                        alt="his photo"
                    />
                    <Typography
                        sx={{
                            maxWidth: '20%',
                            marginTop: '5%',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '12px',
                            },
                        }}
                    >
                        Компания FILA была основана в 1911 году братьями Фила в
                        итальянской провинции Бьелла. Изначально FILA занимались
                        производством нижнего белья и....одежды для скалолазов.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            maxWidth: '55%',
                            textAlign: 'center',
                            marginTop: '8%',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '12px',
                            },
                        }}
                    >
                        До начала 1970-х вообще мало кто знал о существовании
                        марки. Но уже в 1973-м FILA заключают контракт с
                        17-летним Бьорном Боргом — молодым шведским теннисистом.
                        В этом же году появляется лого марки — буква «F» в
                        прямоугольнике.
                    </Typography>
                </Box>

                {/* второй бокс */}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '8%',
                    }}
                >
                    <Box sx={{ ml: '22%' }}>
                        <img
                            style={{ maxWidth: '60%' }}
                            src="https://static.street-beat.ru/upload/iblock/d41/d41e41a4a8413015bb6b785b086d4724.jpg"
                            alt="err"
                        />
                    </Box>

                    <Box>
                        <img
                            style={{ maxWidth: '50%' }}
                            src="https://static.street-beat.ru/upload/iblock/246/246d9925000e97f646111220a982c76e.jpg"
                            alt="err"
                        />
                        <Typography
                            sx={{
                                maxWidth: '50%',
                                textAlign: 'center',
                                marginTop: '10%',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '12px',
                                },
                            }}
                        >
                            Уже в 1977-м Борг становится первой ракеткой мира, а
                            в 1978-м выигрывает Уимблдон и Открытые чемпионаты
                            США и Франции.
                        </Typography>
                    </Box>
                </Box>

                {/* 3 box */}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '9%',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '10px',
                            display: 'none',
                        },
                    }}
                >
                    <Typography
                        sx={{
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '12px',
                            },
                            maxWidth: '20%',
                            textAlign: 'center',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '80%',
                            },
                        }}
                    >
                        В общем, благодаря Бьорну Боргу FILA очень уверенно
                        закрепились в теннисе по сей день. Впоследствии компания
                        будет сотрудничать с такими легендами, как Борис Беккер,
                        Дженнифер Каприати, Ким Клейстерс и другие.
                    </Typography>
                    <Typography
                        sx={{
                            maxWidth: '20%',
                            textAlign: 'center',
                            mt: '15%',
                            [theme.breakpoints.down('sm')]: {
                                display: 'none',
                            },
                        }}
                    >
                        В России FILA сотрудничали с Анной Чакветадзе, Светланой
                        Кузнецовой, Верой Звонарёвой, а также с Дмитрием
                        Турсуновым.
                    </Typography>

                    <img
                        style={{
                            maxWidth: '20%',
                            [theme.breakpoints.down('md')]: {
                                width: '15%',
                            },
                        }}
                        src="https://static.street-beat.ru/upload/iblock/22e/22ec9d5fcaba7ac3ecde28c4456b34aa.jpg"
                        alt=""
                    />
                </Box>

                <Box
                    sx={{ display: 'flex', justifyContent: 'center', mt: '6%' }}
                >
                    <img
                        style={{ maxWidth: '50%' }}
                        src="https://static.street-beat.ru/upload/iblock/3c9/3c93ac2374ee30565f4dda37f35c0dab.jpg"
                        alt=""
                    />
                </Box>

                <Box
                    sx={{ display: 'flex', justifyContent: 'center', mt: '9%' }}
                >
                    <Typography sx={{ maxWidth: '70%', textAlign: 'center' }}>
                        В 1986-м FILA снова заявили о себе, когда знаменитый
                        альпинист Райнхольд Месснер покорил Эверест без
                        кислородного баллона. Райнхольд был практически
                        полностью экипирован в FILA.
                    </Typography>
                </Box>

                <Box
                    sx={{ display: 'flex', justifyContent: 'center', mt: '6%' }}
                >
                    <img
                        style={{ maxWidth: '50%' }}
                        src="https://static.street-beat.ru/upload/iblock/5f2/5f2841cdef7bd45b6c3b2374a771849a.jpg"
                        alt=""
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10%',
                    }}
                >
                    <Box
                        sx={{
                            width: '30%',
                            display: 'flex',
                            flexDirection: 'column',
                            mr: '4%',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '80%',
                            },
                        }}
                    >
                        <Typography sx={{ width: '100%' }}>
                            Но компания не остановилась на теннисе и альпинизме
                            и в 90-е пробилась в бейсбол, футбол и, конечно же,
                            в баскетбол. Настоящим прорывом стали именные модели
                            для Джерри Стэкхауза и Гранта Хилла
                        </Typography>
                        <img
                            style={{
                                width: '100%',
                            }}
                            src="https://static.street-beat.ru/upload/iblock/48b/48bdd0299030d675faec84f56721d948.jpg"
                            alt=""
                        />
                    </Box>
                    <Box
                        sx={{
                            width: '30%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <img
                            style={{ width: '100%' }}
                            src="https://static.street-beat.ru/upload/iblock/cf8/cf8c7e0a45f5ca488fbebfd90a1a0b06.jpg"
                            alt=""
                        />
                        <Typography sx={{ width: '100%' }}>
                            Со временем обе линейки вырвались за пределы
                            баскетбольного корта, блистая на ногах известных
                            актёров и рэперов. Например, модель FILA Grant Hill
                            очень любил Тупак Шакур.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        marginTop: '10%',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        style={{ maxWidth: '60%' }}
                        src="https://static.street-beat.ru/upload/iblock/b23/b239ce1952fcb807b699a6ec0ff2ab52.jpg"
                        alt=""
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '5%',
                    }}
                >
                    <Typography sx={{ maxWidth: '55%', textAlign: 'center' }}>
                        В начале 00-х FILA, вспомнив о своих итальянских корнях,
                        заключают контракты с конюшней Формулы-1 «Феррари»
                        (также в отдельности — с Михаэлем Шумахером) и с
                        командой чемпионата мира по супербайку «Дукати».
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '5%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: '40%',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            marginLeft: '50px',
                        }}
                    >
                        <img
                            style={{
                                width: '65%',
                                height: '60%',
                            }}
                            src="https://static.street-beat.ru/upload/iblock/44b/44b348d2c6acc5b865802f8ffc00fd48.jpg"
                            alt="his photo"
                        />
                        <Typography
                            sx={{
                                width: '100%',
                                marginTop: '5%',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '12px',
                                },
                            }}
                        >
                            Спортивные успехи были впечатляющими, а вот
                            выпущенные в результате сотрудничества модели
                            кроссовок не получили коммерческого успеха.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            mb: '5%',

                            display: 'flex',
                            justifyContent: 'center',
                            mt: '5%',
                            ml: '30px',
                            [theme.breakpoints.down('md')]: {
                                width: '40%',
                                mb: '10%',
                            },
                        }}
                    >
                        <img
                            style={{
                                width: '60%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            src="https://static.street-beat.ru/upload/iblock/28a/28a86d0c653df3d2302682d76b1d008f.jpg"
                            alt="err"
                        />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default AboutUs;
