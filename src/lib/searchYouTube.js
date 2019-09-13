var searchYouTube = ({key, query, max = 5, autoplay = 0}, callback) => {
  // debugger;
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true',
    autoplay: autoplay
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

// // sample API which populates the provided example data in the callback (I ran into youtube API daily quotas)
// import exampleVideoData from './../data/exampleVideoData.js';
// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://jsonplaceholder.typicode.com/todos/1')
//     .done(({items}) => {
//       if (callback) {
//         callback(exampleVideoData);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };

export default searchYouTube;
