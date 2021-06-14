import React, { Component } from 'react';
import './Information.css';
import previewImage from '../../assets/images/image_preview.png';

export class Information extends Component {
    render() {
        return (
            <div className='information-container'>
                <h1>ABOUT</h1>
                <p>Valorant Text Colouriser is a simple app that allows you to change the colour of your text in Valorant's chat client. 
                    This is the ideal tool for creating messages that stands out.
                </p>

                <h1>HOW TO USE</h1>
                <ol>
                    <li>Enter a text in the inputbox. </li>
                    <li>Choose a colour by clicking one of the buttons underneath the inputbox.</li>
                    <li>Paste the newly copied text on Valorant's chat client.</li>
                </ol>

                <h1>PREVIEW OF TEXT COLOURS</h1>
                <img src={previewImage} className='preview-image' alt='preview'/>
            </div>
        )
    }
}

export default Information
