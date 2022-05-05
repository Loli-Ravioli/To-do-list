import React, {Component} from "react";

// Форма для добавления новых to-do
export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            placeholder:"Какие еще штуки надо сделать ?"
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueChange(event) {
        this.setState({
            text: event.target.value
        })

    }
//Вызывает функцию addItem которая обновляет state самого app

    onSubmit(event) {
        event.preventDefault();
        if(this.state.text.length===0){
            this.setState({
                placeholder:"Нечего добавить"
            })
            return;
        }
        this.props.addItem(this.state.text)
        this.setState({
            text: "",
            placeholder:"Какие еще штуки надо сделать ?"
        })
    }

    render() {
        return (
            <form className="bottom-panel d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       placeholder={this.state.placeholder}
                       className="form-control new-post-label"
                       onChange={this.onValueChange}
                       value={this.state.text}
                />
                <button type="submit" className="btn btn-outline-secondary">
                    Добавить
                </button>
            </form>
        )
    }

}




