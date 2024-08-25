import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="a" numOfPage ={200}/>
            <Book name="a" numOfPage ={200}/>
            <Book name="a" numOfPage ={200}/>
            <Book name="a" numOfPage ={200}/>
        </div>
    );
}

export default Library;