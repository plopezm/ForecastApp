import React from 'react';
import Lodash from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
    return Lodash.round(Lodash.sum(data)/data.length);
}

const Chart = (props) => {
    return (
        <div>
            <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}

export default Chart;