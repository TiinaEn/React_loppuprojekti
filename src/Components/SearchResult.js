// import React, {Component} from 'react';
//
//
// class SearchResult extends Component {
//     state = {find: []}
//
//     componentDidMount() {
//         fetch('/travelapp/find')
//             .then(function (response) {
//                 return response.json();
//
//             })
//             .then(function (json) {
//                 this.setState({find: json});
//
//             }.bind(this));
//     }
//
//     render() {
//         const uniquedestinations = [...new Set(this.state.destinations.map(dest => dest.id))];
//         const results = uniquedestinations.map(function(name, index){
//             return
//
//         }
//
//
//         return (
//             <div className="searchResult">
//                 <div className="searchList">
//
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default SearchResult;
//
// //searchword parametriksi