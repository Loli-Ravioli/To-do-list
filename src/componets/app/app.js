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
            //массив обьектов который может(и должен) приходит с сервера
            dataFromSomeWere : [
                {content:"Скорей бы погода нормальная", isCompleted:false, id:1},
                {content:"Тестовые посты", isCompleted:false,id:2},
                {content:"Доделать тестовое", isCompleted:false,id:3},
                {content:"Тестовые заглушки", isCompleted:false,id:4}
            ],
            SearchTerm:"",
            filter:"all"
        };
        this.DeleteItem=this.DeleteItem.bind(this);
        this.addItem=this.addItem.bind(this);
        this.completed=this.completed.bind(this);
        this.onUpdateSearch=this.onUpdateSearch.bind(this);
        this.onFilterSelect=this.onFilterSelect.bind(this);
        this.maxId=5;
    }
    //Удаляет пост из списка и меняет state целиком
    DeleteItem(id){
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
    //метод кторый добовлдяет новые посты и так же меняет state
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
    //Меняет статус isCompleted и так же меняет state но в отоличии от прошлого метода полностью меняет весь стейт
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
    //поик поста
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
    // Фильтр для постов
    filerPost(items,filter){

        if(filter==="completed"){
           return items.filter(item=>item.isCompleted)
        }else {
            return items
        }
    }
    //Меняет state filter на тот что выбратн в приложении в данный момент
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
             onDelete={this.DeleteItem}
             completed={this.completed}
         />
         <PostAddForm
         addItem={this.addItem}/>
     </AppBlock>
    )
}
}

