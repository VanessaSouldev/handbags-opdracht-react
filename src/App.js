import React from 'react';
import './App.css';
import Button from './Components/Button';
import Product from './Components/Product';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import Tile from './Components/Tile';
import brand from'./assets/brand.png';
import our_story from './assets/our_story.png';


function App() {
    return (
        <>
        <nav>
            <h1>Handbags & purses</h1>
            <Button
                typeOfButton="button"
                buttonName="to the collection"
            />
            <Button
                typeOfButton="button"
                buttonName="shop all bags"
            />
            <Button
                typeOfButton="button"
                toggleDisabled={true}
                buttonName="pre-orders"
            />
        </nav>
        <main>
            <Product
                productType="Best seller"
                productPic={bag1}
                productName="The handy bag"
                productPrice="400"
            />
            <Product
                productType="Best seller"
                productPic={bag2}
                productName="The stylish bag"
                productPrice="250"
            />
            <Product
                productType="New collection"
                productPic={bag3}
                productName="The simple bag"
                productPrice="300"
            />
            <Product
                productType="Best seller"
                productPic={bag4}
                productName="The trendy bag"
                productPrice="150"
            />
        </main>
        <footer>
            <Tile
                tileName="brand"
                tileText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut commodi dolore in iste laborum neque nisi, quibusdam suscipit tempora unde ut, veritatis. Ab consequatur ducimus pariatur repellendus sint!"
            />
            <Tile
                tilePic={brand}
                tilePicTitle="brand"
            />
            <Tile
                tilePic={our_story}
                tilePicTitle="our story"
            />
            <Tile
                tileName="our story"
                tileText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut commodi dolore in iste laborum neque nisi, quibusdam suscipit tempora unde ut, veritatis. Ab consequatur ducimus pariatur repellendus sint!"
            />
            </footer>
        </>
    );
}
export default App;


