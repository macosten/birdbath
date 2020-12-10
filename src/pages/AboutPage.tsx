import React from "react";

import styles from "../styles.module.css";

import { GiWaterSplash } from "react-icons/gi";
// This is a static page, so:

interface IProps { }
interface IState { }

export default class AboutPage extends React.Component<IProps, IState> {

    render() {
        return <div style={{margin: "32px"}} className={styles.white}>
            <GiWaterSplash size={128} style={{color: "aqua"}} />
            <h1 className={styles.whitegaramond}>Birdbath</h1>
            <br/>
            <p>
                As I've been working on a number of retro game projects, 
                I've found sharing them to be annoying. People often don't 
                want to download a file I just send them, or they don't have
                or want to download an emulator.
            </p>
            <br/>
            <p>
                Birdbath is meant to be a simple website on which I can to host 
                these games along with the emulators on which to play them.
            </p>
            <br/>
            <p>
                <a href="https://game-icons.net/1x1/lorc/water-splash.html">GiWaterSplash</a> originally by Lorc via <a href="https://game-icons.net">game-icons.net</a>.
            </p>
        </div>
    }
}