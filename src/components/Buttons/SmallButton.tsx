import * as React from 'react';
import './buttons.css';

interface SmallButtonProps {
    src?: string;
    alt?: string;
    href?: string;
}

interface SmallButtonState {

}

class SmallButton extends React.Component<SmallButtonProps, SmallButtonState> {
    //state = { :  }
    render() {
        return (
            <div className="small-button">
                <a href={this.props.href}>
                    <img src={this.props.src} alt={this.props.alt} />
                </a>
            </div>
        );
    }
}

export default SmallButton;