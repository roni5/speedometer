import React from 'react'
// class="arrow"
const SVG = ({
    style = {},
    fill = '#000',
    width = '100%',
    className = '',
    viewBox = '0 0 100 115',
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        viewBox={viewBox}
        xmlns='http://www.w3.org/2000/svg'
        className={`svg-icon ${className || ''}`}
        xmlnsXlink='http://www.w3.org/1999/xlink'>
        enable-background="new 0 0 90 90" xml:space="preserve"
        <g>
            <path d='M46.924,62.068c-2.358,0.585-3.799,2.975-3.213,5.335c0.585,2.36,2.976,3.798,5.334,3.213   c1.74-0.432,2.976-1.849,3.271-3.506l18.828-6.779l-19.76,3.231C50.339,62.289,48.631,61.645,46.924,62.068z' />
            <path d='M48,25.253c-22.056,0-40,17.945-40,40.002h0.047v2.201h3.849v-2.201h-1.694c0-2.632,0.273-5.197,0.787-7.677l1.85,0.495   l0.57-2.125l-1.871-0.503c0.683-2.537,1.614-4.967,2.784-7.263l1.86,1.073l1.101-1.907l-1.903-1.1   c1.327-2.269,2.885-4.38,4.639-6.316l1.672,1.67l1.557-1.557l-1.725-1.725c1.878-1.847,3.958-3.48,6.188-4.906l1.283,2.224   l1.907-1.102l-1.309-2.266c2.297-1.288,4.733-2.353,7.292-3.145l0.707,2.639l2.126-0.569l-0.7-2.617   c2.538-0.623,5.171-0.989,7.88-1.068v2.739h2.202v-2.739c2.709,0.079,5.344,0.445,7.883,1.068l-0.703,2.617l2.129,0.569   l0.707-2.639c2.561,0.79,4.995,1.856,7.291,3.145l-1.307,2.266l1.904,1.102l1.284-2.226c2.229,1.425,4.309,3.062,6.188,4.908   l-1.727,1.725l1.557,1.557l1.675-1.673c1.755,1.938,3.312,4.049,4.64,6.319l-1.904,1.1l1.101,1.907l1.862-1.073   c1.169,2.296,2.101,4.726,2.784,7.263l-1.873,0.501l0.568,2.127l1.854-0.497c0.514,2.479,0.786,5.047,0.786,7.679h-1.694v2.201   h3.85v-2.201H88C88,43.199,70.057,25.253,48,25.253z' />
            <path d='M18,67.643h24.333V53.02H18V67.643z M20,55.02h20.333v10.623H20V55.02z' />
        </g>
        <text
            x='0'
            y='111'
            fill='#000000'
            fontSize='22px'
            fontWeight='bold'
            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
            Speed
        </text>
    </svg>
)
export default SVG
