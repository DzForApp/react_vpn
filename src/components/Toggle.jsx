    import React from "react"

    class Toggle extends React.Component{

        constructor(props) {
            super(props);
            this.state =  {isToggleOn: true};

            this.handelClick = this.handelClick.bind(this);
        }

        handelClick() {
            this.setState(prevStat => ({
                isToggleOn: !prevStat.isToggleOn
            }));
        }

        render() {
            return (
                <button onClick={this.handelClick}>
                    {this.state.isToggleOn? 'PowerON': 'PowerOFF'}
                </button>
            )
        }
    }

    export default Toggle;