import React from 'react'

export default class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    }
    this.search = this.search.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fetchItems() {
    fetch('http://localhost:3004/related')
      .then(data => data.json())
      .then(json => {
        let newState = {};
        newState.items = json;
        this.setState(newState)
      })
      .catch(error => {
        console.log('error', error)
      })

  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  search() {
    fetch('http://localhost:3004/search', {
      method: 'POST',
      body: this.state.text
    })
      .then(data => data.json())
      .then(json => {
        let newState = {};
        newState.items = json;
        this.setState(newState);
      })
      .catch(error => {
        console.log('error searching', error);
      })
  }

  componentDidMount() {
    this.fetchItems();
  }

  render() {
    return (
      <div>
        {/* <input onChange={this.handleChange} type='text' />
        <button onClick={this.search}>Search</button> */}
        {this.state.items.map((item, i) => {
          if (i < 5) {
            return (
              <div key={i} className='item-name'>
                {item.name}
                <div>
                  <img src={item.fullimg} />
                </div>
                <div className='blurb'>
                  {item.blurb}
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
    )
  }
}



//ReactDOM.render(<Related />, document.getElementById('root'))


