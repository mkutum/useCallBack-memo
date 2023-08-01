import React, { memo } from 'react'

const Title = () => {
    console.log('rendering title');
    return (
        <div>This is usecallback practice</div>
    )
}

export default memo(Title)