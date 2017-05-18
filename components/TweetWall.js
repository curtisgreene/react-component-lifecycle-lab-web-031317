// We can fix that easily using `shouldComponentUpdate()`. Use this lifecycle method in
// `<TweetWall />` to only rerender the component if there are more than 0 new tweets.


import React from 'react';
import Tweet from './Tweet';

export default class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    })
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(newProps){
    return newProps.newTweets.length > 0
  }

  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    this.setState( function(state) {
      return {tweets: [...nextProps.newTweets, ...state.tweets]}
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}
