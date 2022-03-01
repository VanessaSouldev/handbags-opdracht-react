import React from 'react';


function Tile({tileName, tileText, tilePic, tilePicTitle }) {

    return (
        <section>
            <h2>{tileName}</h2>
            <p>{tileText}</p>
            <p>{tileText}</p>
            <img
                src={tilePic}
                alt={tilePicTitle} />
        </section>
    );
}

export default Tile