import React from 'react';

{
    /*
    Props:
        -> title
        -> desc

    */
}

class MenuItem extends React.Component{
    render(){
        
    console.log(this.props.imgsrc.pizza);
        return (
            <div className="menu-item">
                <img src={this.props.imgsrc.pizza} alt={this.props.imgalt} />
                <p className="title">{this.props.title}</p>
                <p className="desc">{this.props.desc}</p>
                <div className="">
                </div>
            </div>
        );
    }
}

export default MenuItem;