import React, {Component} from "react";

export default class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state={
            SearchTerm:""
        }
        this.onUpdateSearch=this.onUpdateSearch.bind(this)
    }
    onUpdateSearch(e){
        const SearchTerm=e.target.value.toLowerCase()
        this.setState({SearchTerm})
        this.props.onUpdateSearch(SearchTerm);
    }
    render() {
        return(
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поискать"
                onChange={this.onUpdateSearch}
            />
        )
    }
}
