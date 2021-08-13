import React from "react"
import { LockBody , ReleaseBody , Picture , Spinner } from './styles/loading'

function Loading({ src , ...restProps}){
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}

export default Loading