import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <div>
                <footer className='text-center p-2 bg-dark'>
                    <span className='text-white'>
                        enigmacamp 2022<a className='text-white text-decoration-none ms-1' href="https://www.enigmacamp.com/">
                            Enigma Camp
                        </a>
                    </span>
                </footer>
            </div>
        )
    }
}

export default Footer;