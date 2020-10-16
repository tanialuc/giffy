import React from 'react';

export default function Gif ({ title, id, url }) {
    return (
    <a href={`#${id}`} className = 'Gif'> 
        <h4>{title}</h4>
        <img scr={url} /> 
      </a>
    )
}