function createCollection(name, description){
  collection = {
    name: name,
    description: description,
    tracks: [],
  }
  return collection
}

function createTrack(title,artist,duration){
  track = {
    title: title || 'unknown',
    artist: artist || 'unknown',
    duration: duration || 0,
  }
  return track
}

function reviewTrack(track){
  if (track.artist === 'Red Hot Chili Peppers'){
    return `The song ${track.title} rules!`
  }
  return 'I wish this was a Red Hot Chili Peppers song.'
}

function addTrack(collection, track){
collection.tracks.push(track)
return collection
}

function getTotalDuration(collection){
  console.log(collection.tracks)
 var total = 0
 for (var i = 0; i<collection.tracks.length; i++){
   total += collection.tracks[i].duration
 }
  return total
}

function findTracksByArtist(collection, artist){
  var tracksByArtist = []
  for (var i = 0; i < collection.tracks.length; i++){
  if(collection.tracks[i].artist === artist){
     tracksByArtist.push(collection.tracks[i])
  }
}
return tracksByArtist
}

  module.exports = { 
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
   }