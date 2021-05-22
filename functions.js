/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = require("./channels.json");
// console.log(channels[0]);

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  // Your code here
  return channel.name;
}
// console.log(getChannelName(channels[0]));

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  // Your code here
  return channel.videos.length;
}
// console.log(numberOfVideos(channels[0]));

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  // Your code here
  const title = channel.videos.filter((video) => video.title == videoTitle);
  if (title.length >= 1) {
    return true;
  } else return false;
}
// console.log(channelHasVideo("The Universal S", channels[0]));
// console.log(channelHasVideo("Cicada 3301: An Internet Mystery", channels[1]));
// console.log(channelHasVideo("The Universal S", channels[2]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  // Your code here
  const search = channels.find((channel) => channel.name == channelName);
  return search;
}
// console.log(getChannelByName("PowerfulJRE", channels));

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  // Your code here
  for (var i = 0; i < channels.length; i++) {
    // if (videoTitle == channels[i].name) return channels[i];
    for (var j = 0; j < channels[i].videos.length; j++) {
      console.log(channels[i].videos[j]);
    }
  }
}
console.log(getChannelByVideoTitle("The Universal S", channels));
console.log(getChannelByVideoTitle("PowerfulJRE", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  // Your code here
  const string = channels.filter(
    (channel) =>
      channel.name.includes(query) || channel.description.includes(query)
  );
  return string;
}
// console.log(searchChannels("the", channels));

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
