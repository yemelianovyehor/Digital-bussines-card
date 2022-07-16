import * as React from 'react';
import './buttons.css';

interface BigButtonProps {
    src?: string;
    alt?: string;
    children?: string;
}

interface BigButtonState {

}

class BigButton extends React.Component<BigButtonProps, BigButtonState> {
    //state = { :  }
    render() {
        return (
            <a className="email-button" href='mailto:yemelianovyehor@gmail.com'>
                <img src={this.props.src} alt={this.props.alt} />
                {this.props.children}
            </a>
        );
    }
}

export default BigButton;