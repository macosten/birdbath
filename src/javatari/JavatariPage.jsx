import React from "react";

//import Script from 'react-load-script';
import loadjs from "loadjs";

export default class JavatariPage extends React.Component {

    componentDidMount() {
        loadjs("/javatari.js", () => {
            if (this.props.match.params.romname) {
                window.Javatari.CARTRIDGE_URL = "/roms/a2600/" + this.props.match.params.romname + ".bin";
            }
        })
    }

    componentWillUnmount() {

    }

    render() {

        const javatariStyle = {
            textAlign: "center",
            margin: "20px auto 0",
            padding: "0 10px"
        };

        const javatariScreenStyle = {
            boxShadow: "2px 2px 10px rgba(0, 0, 0, .7)"
        };

        return <>
            <div 
                id="javatari"
                style={javatariStyle}
            >
                <div 
                    id="javatari-screen"
                    style={javatariScreenStyle}
                >   
                </div>
            </div>
            
            </>
    }
}

/*
<Script 
                url="/javatari.js"
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}
            />
*/