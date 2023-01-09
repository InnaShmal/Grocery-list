import {Component} from 'react';
import check from './icon.png'

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
        
    }

    addItem(input) {
        if (input === '') {
            alert('Please enter an item!')
        } 
        else {
        let listArray = this.state.groceryList;
        listArray.push(input)
        this.setState({groceryList: listArray, userInput: ''})
        
    }}

    deleteItem(input) {
        let listArray = this.state.groceryList;
        listArray = []
        this.setState({groceryList: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed')
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <input type='text'
                    placeholder='What do you want to buy?'
                    onChange={(e)=>(this.onChangeEvent(e.target.value))}
                    value = {this.state.userInput}/>
                </div>
                <div className='container'>
                    <button className='add btn' onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                            <img src={check} width='30px' alt='icon'/>
                            {item}</li>
                    ))}
                </ul>
                <div className='container'>
                    <button className='delete btn' onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>
                </div>
            </div>
        )
    }
}