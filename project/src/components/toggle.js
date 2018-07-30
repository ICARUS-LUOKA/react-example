import React,{Component} from 'react';
class Toggle extends Component{
    constructor(props){
        super()
        this.state = {
            isToggleOn:true,
            value:'选项1'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(){
        this.setState({
            isToggleOn:!this.state.isToggleOn
        })
    }
    handleChange(eve){
        this.setState({value:eve.target.value})
    }
    render(){
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>{this.state.isToggleOn?'开':'关'}</button>
                <form>
                    <label>
                        下来选择
                        <select value = {this.state.value} onChange={this.handleChange}>
                            <option  value="选项1">选项1</option>
                            <option value="选项2">选项2</option>
                            <option value="选项3">选项3</option>
                            <option value="选项4">选项4</option>
                            <option value="选项5">选项5</option>
                        </select>
                    </label>

                </form>
            </React.Fragment>
        )
    }
}


export default Toggle