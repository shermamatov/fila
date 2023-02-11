import { Box } from '@mui/system';
import React from 'react';
import '../NotFound/Error404.css';

const Error404 = () => {
    return (
        <>
            <Box
                className="error-four"
                title="404"
                sx={{
                    width: { xs: '300px', md: '500px' },
                    mt: { xs: 5, md: 0 },
                }}
            >
                404 Page Not Found
            </Box>
        </>
    );
};

export default Error404;
