import React from 'react'

export default class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] }
  }

  componentDidMount() {
    fetch('http://localhost:3000/related')
      .then(data => data.json())
      .then(json => {
        let newState = {};
        newState.items = json;
        this.setState(newState)
      })
      .catch(error => {
        console.log('error fetching data', error)
      })
  }

  render() {
    return (
      <div>
        {this.state.items.map((item, i) => {
          if (i < 5) {
            return (
              <div key={i} className='item'>
                <div className='image'>
                  <img src={item.fullimg} width='20%' align='top' />
                  <span className='name'>{item.name}</span>
                  <br />
                  <span className='blurb'>{item.blurb}></span>
                  <br />
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
