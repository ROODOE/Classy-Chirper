import React from 'react';
import Timeline from './Components/Timeline';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            handle: '',
            message: '',
            chirps: [{handle: 'ljkhf', message: 'eljh'}, {handle: 'ljkhf', message: 'eljh'}, {handle: 'ljkhf', message: 'eljh'}]
        };

    }

    handleChirp() {
        let newChirp = { handle: this.state.handle, message: this.state.message }
        this.setState({chirps: [...chirps, newChirp]})
    }

    handleChirpBtn(e) {
        e.preventDefault();
        console.log(this.state);
        this.handleChirp(e);
        this.setState({ handle: '', message: '' });
    }

    render() {
        return (
            <main className="d-flex-wrap">
                <h1 className="row-12 text-center mt-5">
                    Chirpr
                </h1>
                <section className="col mt-5 d-flex justify-content-around">
                    <form className="col-3 rounded shadow-lg form-group text-center">
                        <input value={this.state.handle} onChange={(e) => this.setState({ handle: e.target.value })} className="mb-2 rounded mt-2" type="text" />
                        <br /><input value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} className="mb-2 rounded" type="text" />
                        <br /><button className="btn btn-primary mb-2 shadow" onClick={e => (
                            this.handleChirp(e),
                            this.handleChirpBtn(e)
                            )}>Chirp</button>
                    </form>
                    {/* {this.state.map(chirp => (
                        
                        ))} */}
                    <Timeline />
                </section>
            </main>
        )
    }

}

export default App;

// import React from 'react';
// import TodoItem from './Components/TodoItem';
// import { v4 as uuidv4 } from 'uuid';

// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             task: '',
//             Todos: []
//         };

//         // this.handleSubmit = this.handleSubmit.bind(this);  // One way
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         console.log(this.state.task);
//         this.setState({
//             task: '', Todos: [...this.state.Todos,
//             { id: uuidv4(), task: this.state.task }]
//         });
//     }

//     render() {
//         return (
//             <main>
//                 <section className="row justify-content-center mt-5">
//                     <div className="col-md-7">
//                         <form className="form-group">
//                             <label>Task: </label>
//                             <input value={this.state.task}
//                                 onChange={e => this.setState({ task: e.target.value })}
//                                 className='form-control' />
//                             <button onClick={e => this.handleSubmit(e)}
//                                 className="btn btn-primary rounded mt-3">
//                                 Add Todo Task</button>
//                         </form>
//                     </div>
//                 </section>
//                 <section className="row justify-content-center mt-3">
//                     <div className="col-6">
//                         <ul className="list-group">
//                             {this.state.Todos.map(todo => (
//                                 <TodoItem key={`todo-task-${todo.id}`} todo={todo}/>
//                             ))}
//                         </ul>
//                     </div>
//                 </section>
//             </main>
//         );
//     }
// }

// export default App;