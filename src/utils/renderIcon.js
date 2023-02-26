import React from 'react'
import * as Icon  from 'react-bootstrap-icons'

export function RenderIcon(props) {
    switch(props.iconType) {
        case "facebook":
            return(
                <Icon.Facebook color="#4267B2" size="2em" />
            )
        case "youtube":
            return(
                <Icon.Youtube color="#FF0000" size="2em" />
            )
        case "map":
            return(
                <Icon.Map color="Black" size="2em" />
            )       
        default : 
                return <></>
    }
}