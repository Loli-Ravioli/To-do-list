import React,{Component} from "react";

import AppHeader from "../app-header/"
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css"

import styled from "styled-components";

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;



export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataFromSomeWere : [
                {content:"Скорей бы на скейт, а не вот это вот всё ", isCompleted:false, id:1},
                {content:"Тестовые не шлют на собесы не зовут", isCompleted:false,id:2},
                {content:"Заставляют играть в доку 2", isCompleted:false,id:3},
                {content:"Шея после йоги болит", isCompleted:false,id:4}
            ],
            SearchTerm:"",
            filter:"all"
        };
        this.Deleteitem=this.Deleteitem.bind(this);
        this.addItem=this.addItem.bind(this);
        this.completed=this.completed.bind(this);
        this.onUpdateSearch=this.onUpdateSearch.bind(this);
        this.onFilterSelect=this.onFilterSelect.bind(this);
        this.maxId=5;
    }
    Deleteitem(id){
    this.setState(({dataFromSomeWere})=>{
        const index= dataFromSomeWere.findIndex(el=>el.id===id);

        const before =dataFromSomeWere.slice(0,index);
        const after = dataFromSomeWere.slice(index+1);

        const newArr=[...before,...after];
        return{
            dataFromSomeWere:newArr
        }
    })
    }

    addItem(content){
        const newItem={
            content,
            id: this.maxId++
        }
        this.setState(({dataFromSomeWere})=>{
            const newArr=[...dataFromSomeWere,newItem];
            return {
                dataFromSomeWere:newArr
            }
        })
    }

    completed(id){
        this.setState(({dataFromSomeWere})=>{

            const index= dataFromSomeWere.findIndex(el=>el.id===id)

            const old = dataFromSomeWere[index];

            const newItem={...old,isCompleted: !old.isCompleted}

            const newArr= [...dataFromSomeWere.slice(0,index),newItem,...dataFromSomeWere.slice(index+1)];
            return{
                dataFromSomeWere:newArr
            }
        })
    }

    searchPost(items,SearchTerm){
        if(SearchTerm.length === 0){
            return items
        }
       return  items.filter((item)=>{
            return item.content.toLowerCase().indexOf(SearchTerm) > -1;
        })
    }
    onUpdateSearch(SearchTerm){
        this.setState({SearchTerm})
    }

    filerPost(items,filter){

        if(filter==="completed"){
           return items.filter(item=>item.isCompleted)
        }else {
            return items
        }
    }
    onFilterSelect(filter){
    this.setState({filter})
    }


render() {
        const  {dataFromSomeWere,SearchTerm,filter}=this.state



        const completed2 = this.state.dataFromSomeWere.filter(el=> el.isCompleted).length
        const allPost = this.state.dataFromSomeWere.length;
        const visiblePost = this.filerPost(this.searchPost(dataFromSomeWere,SearchTerm),filter);
    return(
     <AppBlock>
         <AppHeader
             completed={completed2}
             allPost={allPost}/>
         <div className="search-panel d-flex">
             <SearchPanel
                 onUpdateSearch={this.onUpdateSearch}/>
             <PostStatusFilter
             filter={filter}
             onFilterSelect={this.onFilterSelect}/>
         </div>
         <PostList
             posts={visiblePost}
             onDelete={this.Deleteitem}
             completed={this.completed}
         />
         <PostAddForm
         addItem={this.addItem}/>
     </AppBlock>
    )
}
}

