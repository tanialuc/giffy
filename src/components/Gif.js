import React from 'react';

export default function Gif ({ title, id, url }) {
    return (
    <div>
        <h4>{title}</h4>
        <small>{id}</small>
        <img scr={url} />
      </div>
    )
}