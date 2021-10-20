import React from "react"

class App extends React.Component{
 constructor(props){
   super(props)

   this.state={
     newItem: "", 
     list: [], 
   }
 }

  updateInput(key, value){
    this.setState({
      [key]: value
    })
  }

  addItem(){
    const newItem = {
      id: 1 + Math.random(), 
      value: this.state.newItem.slice()
    }

    const list = [...this.state.list]
    list.push(newItem)

    this.setState({
      newItem: "", 
      list, 
    })
  }

  deleteItem(id){
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id)

    this.setState({
      list: updatedList
    })
  }
   render(){
     let update = this.state.list.length ? '' : 'Nothing to do yet. Add an item'
     return(
       <div className="container">
         <header>
           <h2>Ciocon's Todolist</h2>

           <div className="form">
             <input 
             type="text" 
             placeholder="Add Item"
             value={this.state.newItem}
             onChange={e => this.updateInput("newItem", e.target.value)}
             />
             <button onClick={() => this.addItem()}>
               +
             </button>
           </div>
         </header>
         <section>
           <ul>
             {this.state.list.map(item => {
               return(
                 <li key={item.id}>{item.value}
                 <button onClick={() => this.deleteItem(item.id)}>X</button>
                 </li>
               )
             })}
           </ul>
           <p>{update}</p>
         </section>
       </div>
     )
   }
 
}


//ReactDOM.render(<App />, document.getElementById('root'));

export default App;
