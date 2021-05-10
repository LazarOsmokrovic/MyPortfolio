import React from 'react'
import { Progress, ProgressDone} from './SkillElements'

function ProgressBar({ done }) {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 1000);
    return (
        <Progress>
            <ProgressDone  style={style}></ProgressDone>
        </Progress>
    )
}

export default ProgressBar;
