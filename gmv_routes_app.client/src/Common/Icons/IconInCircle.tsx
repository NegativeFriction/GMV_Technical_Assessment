import React from 'react';
import Train from './../../assets/Train.svg'
import Bus from './../../assets/Bus.svg'


interface propsType {
    iconName: string;
    size?: number;
    backgroundColor ?: string;
}

const IconInCircle: React.FC<propsType> = ({ iconName, size=75, backgroundColor = '#9e2f0A' }) => {

    const caseCorrectedIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase()
    let iconSource

    switch (caseCorrectedIconName) {
        case "Train":
            iconSource = Train;
            break;
        case "Bus":
            iconSource = Bus;
            break;
        default:
            throw new Error("Unsupported method of transportation.")
    }

    return (
        <div style={{ backgroundColor, width: size, height: size, borderRadius: '50%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
            <img src={iconSource} alt={`An image of a ${iconName}.svg`} />
        </div>
    )
}


export default IconInCircle