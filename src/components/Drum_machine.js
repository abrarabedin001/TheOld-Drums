import React, {Component} from 'react'
import '../App.css';
class Drum_machine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            powerOn: true,
            bankOn: true,
            volume: 10,
            display: '',
            letterPressed:''
        }
    }
    pressedPower = () => {
        this.setState({
            ...this.state,
            powerOn: !this.state.powerOn
        })
    }

    pressedBank = () => {
        this.setState({
            ...this.state,
            bankOn: !this.state.bankOn
        })
    }
    movedSlide = (e) => {
        this.setState({
            ...this.state,

            display: e.target.value,
            volume: e.target.value
        })

        window.setTimeout(() => {
            this.setState({
                ...this.state,
                display: ''
            })
        }, 900);
    }

    play = (e) => {

        // let x = new Audio(url) x.play()

        console.log(e.target.firstChild.nodeValue)
        if (this.state.powerOn) {
            switch (e.target.firstChild.nodeValue) {
                case 'Q':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")
                        console.log(this.state.volume / 100)
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-1'
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Chord-1'
                            })
                        }

                    }
                    break;
                case 'W':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-2'
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Chord-2'
                            })
                        }
                    }
                    break;
                case 'E':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-3'
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Chord-3'
                            })
                        }
                    }
                    break;
                case 'A':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-4-1'
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Give-us-a-light'
                            })
                        }
                    }
                    break;
                case 'S':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-6'
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Dry-Ohh'
                            })
                        }
                    }
                    break;
                case 'D':
                    {
                        console.log("kaj kore")
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Disc_Oh.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Disc-Oh'
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Bld-H1'
                            })
                        }
                    }
                    break;
                case 'Z':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Kick-n-Hat'
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'punchy-kick-1'
                            })
                        }
                    }
                    break;
                case 'X':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'RP4-KICK-1'
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'side-stick-1'
                            })
                        }
                    }
                    break;
                case 'C':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Cev-H2'
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Brk-Snr'
                            })
                        }
                    }
                    break;

            }

        }

    }
    playKey = (e) => {

        // let x = new Audio(url) x.play()
        console.log(e.key)

        //console.log(e.target.firstChild.nodeValue)
        if (this.state.powerOn) {
            switch (e.key) {
                case 'q':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-1',
                                letterPressed:e.key
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Chord-1',
                                letterPressed:e.key
                            })
                        }

                    }
                    break;
                case 'w':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-2',
                                letterPressed:e.key
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Chord-2',
                                letterPressed:e.key
                            })
                        }
                    }
                    break;
                case 'e':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-3',
                                letterPressed:e.key
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Chord-3',
                                letterPressed:e.key
                            })
                        }
                    }
                    break;
                case 'a':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-4-1',
                                letterPressed:e.key
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Give-us-a-light',
                                letterPressed:e.key
                            })
                        }
                    }
                    break;
                case 's':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Heater-6',
                                letterPressed:e.key
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Dry-Ohh',
                                letterPressed:e.key
                            })
                        }
                    }
                    break;
                case 'd':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Disc-Oh',
                                letterPressed:e.key
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Bld-H1',
                                letterPressed:e.key
                            })
                        }
                    }
                    break;
                    //<audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                case 'z':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Kick-n-Hat',
                                letterPressed:e.key
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'punchy-kick-1',
                                letterPressed:e.key
                            })
                        }
                    }
                    break;
                case 'x':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'RP4-KICK-1',
                                letterPressed:e.key
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'side-stick-1',
                                letterPressed:e.key
                            })
                        }
                    }
                    break;
                case 'c':
                    {
                        let x = ''
                        this.state.bankOn
                            ? x = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                            : x = new
                        Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")
                        x.volume = this.state.volume / 100
                        x.play()
                        if (this.state.bankOn) {
                            this.setState({
                                ...this.state,
                                display: 'Cev-H2',
                                letterPressed:e.key
                            })
                        } else {
                            this.setState({
                                ...this.state,
                                display: 'Brk-Snr',
                                letterPressed:e.key
                            })
                        }
                    }
                    break;

            }

        }

    }
    click=()=>{
        console.log("q")
    }
    putOnBody=(e)=>{
        e.target.parentNode.parentNode.parentNode.onkeypress = this.playKey
        
    }
    render() {

        return (

            <div id='drum_machine' class='drum_machine' onKeyPress={this.putOnBody.bind(this)} tabIndex={0}>

                <h4 class="drum_name">Abrar</h4>
                <div class='panels_n_btns'>
                    <div class="key_pads">
                        <row class='row'>
                            <button class={this.state.letterPressed=="q"?'key_button_pressed':"key_button"} onClick={this.play}>
                                Q</button>
                            <button class={this.state.letterPressed=="w"?'key_button_pressed':"key_button"} onClick={this.play}>W</button>
                            <button class={this.state.letterPressed=="e"?'key_button_pressed':"key_button"} onClick={this.play}>E</button>
                        </row>
                        <row class='row'>
                            <button class={this.state.letterPressed=="a"?'key_button_pressed':"key_button"} onClick={this.play}>A</button>
                            <button class={this.state.letterPressed=="s"?'key_button_pressed':"key_button"} onClick={this.play}>S</button>
                            <button class={this.state.letterPressed=="d"?'key_button_pressed':"key_button"} onClick={this.play}>D</button>
                        </row>
                        <row class='row'>
                            <button class={this.state.letterPressed=="z"?'key_button_pressed':"key_button"} onClick={this.play}>Z</button>
                            <button class={this.state.letterPressed=="x"?'key_button_pressed':"key_button"} onClick={this.play}>X</button>
                            <button class={this.state.letterPressed=="c"?'key_button_pressed':"key_button"} onClick={this.play}>C</button>
                        </row>

                    </div>

                    <div class="controls">
                        <row>
                            <div
                                class="power"
                                onClick={this
                                .pressedPower
                                .bind(this)}>
                                <div class='power_Control'>
                                    <p>Power</p>
                                    <div class='power_button_outer'>
                                        <div
                                            class={this.state.powerOn
                                            ? 'power_button_inner_right'
                                            : 'power_button_inner_left'}></div>
                                    </div>
                                </div>
                            </div>

                        </row>
                        <row>
                            <div onKeyPressCapture={this.click} tabIndex={0}>
                                <p>dsfsdfsdf</p>
                            </div>
                        </row>
                        <row>
                            <p class='the_lonely_p'>{this.state.display}</p>
                        </row>
                        <row>
                            <input
                                type='range'
                                min="1"
                                max="100"
                                onChange={this
                                .movedSlide
                                .bind(this)}/>

                        </row>
                        <row>
                            <div
                                class="bank"
                                onClick={this
                                .pressedBank
                                .bind(this)}>
                                <div class='bank_Control'>
                                    <p>Bank</p>
                                    <div class='bank_button_outer'>
                                        <div
                                            class={this.state.bankOn
                                            ? 'bank_button_inner_left'
                                            : 'bank_button_inner_right'}></div>
                                    </div>
                                </div>
                            </div>
                        </row>

                    </div>

                </div>

            </div>
        )
    }
}

export default Drum_machine;