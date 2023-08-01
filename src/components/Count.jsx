import React, { memo } from 'react'

// eslint-disable-next-line react/prop-types
const Count = ({ text, count }) => {
    console.log("rendering count", text);
    return (
        <div>
            {text} is {count}
        </div>
    )
}

export default memo(Count)