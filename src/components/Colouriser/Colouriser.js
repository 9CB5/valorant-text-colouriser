import React, { Component } from 'react';
import './Colouriser.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap';

export class Colouriser extends Component {

    state = {
        text: ''
    }

    colouriseSingleHandler = (tag) => {
        
        const htmlTag = tag;
        let textToColour = this.state.text;

        textToColour = htmlTag + textToColour + '</>'
        this.copyToClipboardHandler(textToColour);
    }

    colouriseMultipleHandler = () => {
        // if (this.state.text !== '') {
        //     const textToSplit = this.state.text;
        //     const arrayWords = textToSplit.split(' ');
            
        //     const mappedWords = arrayWords.map(
        //         (word) => {
        //             return this.getRandomTag() + word + '</>';
        //         }
        //     );

        //     this.copyToClipboardHandler(mappedWords.join(' '));
        // }

        if (this.state.text !== '') {
            const textToSplit = this.state.text;
            const arrayWords = textToSplit.split(' ');
        
            arrayWords.forEach(
                (word, index) => {
                    const chars = word.split('');
                    chars.forEach(
                        (char, index) => {
                            chars[index] = this.getRandomTag() + char + '</>';
                        }
                    );
                    arrayWords[index] = chars.join('');
                }
            );

            this.copyToClipboardHandler(arrayWords.join(' '));
        }
    }

    getRandomTag = () => {
        const tags = ['<enemy>', '<team>', '<notification>', '<system>', '<warning>'];

        return tags[Math.floor(Math.random() * tags.length)];
    }

    copyToClipboardHandler = (colouredText) => {
        
        const el = document.createElement('textarea');
        el.value = colouredText;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        //show and hide notification element
        document.getElementById('test').style.display = 'block';

        setTimeout(() => {
            document.getElementById('test').classList.add('hidden');
        },3000);

        document.getElementById('test').classList.remove('hidden');

      };

    render() {
        return (
            <div className="colouriser-container">
                <div className="input">
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-lg">Text</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            aria-label="Large" 
                            aria-describedby="inputGroup-sizing-sm" 
                            onChange={(event) => {this.setState({text: event.target.value})}}
                        />
                    </InputGroup>
                </div>
                <div className="buttons">
                    <Button className='button' style={{backgroundColor: '#B2443F'}} 
                        onClick={() => this.colouriseSingleHandler('<enemy>')}>Red</Button>
                    <Button className='button' style={{backgroundColor: '#93BBCD'}}
                        onClick={() => this.colouriseSingleHandler('<team>')}>Blue</Button>
                    <Button className='button' style={{backgroundColor: '#60D082'}} 
                        onClick={() => this.colouriseSingleHandler('<notification>')}>Green</Button>
                    <Button className='button' style={{backgroundColor: '#F6D880'}} 
                        onClick={() => this.colouriseSingleHandler('<system>')}>Yellow</Button>
                    <Button className='button' style={{backgroundColor: '#FE9EF7'}}
                        onClick={() => this.colouriseSingleHandler('<warning>')}>Pink</Button>
                    <Button className='button' style={{background: 'linear-gradient(to right, #B2443F , #93BBCD, #60D082, #F6D880, #FE9EF7)'}}
                        onClick={() => this.colouriseMultipleHandler()}>Rainbow</Button>
                </div>
                <div className='notification-container' id='test'> 
                    <p>Copied to clipboard!</p>
                </div> 
            </div>
        )
    }
}

export default Colouriser
