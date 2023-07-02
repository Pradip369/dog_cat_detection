import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';

export default function LazyLoad() {
    const n = 8
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '1px', justifyContent: 'space-around' }}>
                {
                    [...Array(n)].map((e, i) => (
                        <Box key={i} className="my-2">
                            <Skeleton sx={{ bgcolor: 'grey.700' }} variant="rounded" width={280} height={220} />
                            <Skeleton sx={{ bgcolor: 'grey.700' }} width={160} />
                            <Skeleton sx={{ bgcolor: 'grey.700' }} width={200} />
                            <div className='d-flex flex-row-reverse'>
                                <Skeleton sx={{ bgcolor: 'grey.700' }} width={130} height={50} />
                            </div>
                        </Box>
                    ))
                }
            </div>
        </>
    )
}
