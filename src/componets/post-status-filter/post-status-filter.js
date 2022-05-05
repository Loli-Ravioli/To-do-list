import React, {Component} from "react";

// Фильтующие кнопки и сама фильтрация, передает через пропсы на уровень выше, какая кнопка активна в данный момент
export default class PostStatusFilter extends Component{
    constructor(props) {
        super(props);
        this.buttons=[
            {name:"all",label:"все"},
            {name:"completed",label:"Сделаные"}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name,label})=>{
            const active=this.props.filter === name;

            const clazz = active ? "btn-info":"btn-outline-secondary"
            return(
                <button
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                   onClick={()=>this.props.onFilterSelect(name)}
                >{label}</button>
            )
        });
        return(
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
