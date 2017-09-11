import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchNews} from '../actions/index';

class App extends Component {
	componentDidMount(){
		this.props.fetchNews();
	}

renderNews(){
	return _.map(this.props.News, News =>{
		const ImgURL= News.urlToImage;
		//let str= News.publishedAt;
		//let date = str.substr(0, 10);
	return (
		<div key={News.publishedAt}>
		<li className="list-group-item" >
			<div className= "list-list media">
			<div className= "media-left">
			<img className= "media-object" src={ImgURL} alt="videos"/>
				
			</div>
			<div className= "media-body">
			<div className= "mt-0"><h4><b>{News.title}</b></h4></div>
			<div ><b>{News.author}</b></div>
			<div >{News.description}<a href={`${News.url}`}>Read More...</a></div>
			
</div></div>
		</li>
		</div>
		);
});
}
  render() {
  	const LOGO= 'http://timesofindia.indiatimes.com/photo/47529300.cms'
    return (
      <div >
			<div className= "media-left">
			<img className= "media-logo" src={LOGO} alt="videos"/>
			</div>

      	<h3 className="heading alert alert-info">Latest News from <mark>The Times of India</mark></h3>
      	<ul className="list-group">
      		{this.renderNews()}
      	</ul>
      	<footer className='footer'></footer>
      </div>
    );
  }
}

function mapStateToProps(state){
	return{
		News: state.News
		}
}

export default connect(mapStateToProps,{fetchNews})(App);