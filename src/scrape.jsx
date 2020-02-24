/*global chrome*/

import React from 'react'
import axios from 'axios'
import Prohibition from './prohibition'

class Scrape extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      prohibition: '',
      proList: [],
      signup: false,
      signin: true,
    }
  }

  componentDidMount = () => {
    const list = this.state.proList.slice()
    chrome.storage.local.get(["prohibition"], function(items) {
      const storage = items.prohibition
      storage.map((item) => {
        list.push(item)
      })
    });
    this.setState({
      proList: list
    })
  }

  handleChange = (e) => {
    this.setState({
      url: e.target.value
    })
  }

  handleProChange = (e) => {
    this.setState({
      prohibition: e.target.value
    })
  }

  handleSubmit = () => {
  }

  handleCreate = () => {
    const prohibitUrl = this.state.prohibition
    const list = this.state.proList.slice()
    list.push(prohibitUrl)
    chrome.storage.local.set({'prohibition': list});
    this.setState({
      prohibition: '',
      proList: list
    })
  }

  render() {
    return(
      <div>
        <p>URLを入力</p>
        <input value={this.state.url} onChange={this.handleChange} type="text" />
        <input type="submit" onClick={this.handleSubmit} value="保存" />
        <p>禁止URLを入力</p>
        <input value={this.state.prohibition} onChange={this.handleProChange} type="text" />
        <input type="submit" onClick={this.handleCreate} value="登録" />
        <Prohibition proList={this.state.proList} />
      </div>
    )
  }
}

export default Scrape