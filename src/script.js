const burger = $('.navbar-burger');
const menu = $('.navbar-menu');
const storiesContainer = $('#stories-container');

const stories = [
  {
    writerName: 'Writer Name',
    imageSource: 'https://via.placeholder.com/320x240.png',
    story: 'lorem ipsum and more and more stuff',
  },
  {
    writerName: 'Writer Name',
    imageSource: 'https://via.placeholder.com/320x240.png',
    story: 'lorem ipsum and more and more stuff',
  },
  {
    writerName: 'Writer Name',
    imageSource: 'https://via.placeholder.com/320x240.png',
    story: 'lorem ipsum and more and more stuff',
  },
];

function toggleNavbarState() {
  burger.toggleClass('is-active');
  menu.toggleClass('is-active');
}

function initNavbar() {
  burger.click(toggleNavbarState);
}

function createStory(data) {
  const image = $('<img/>').attr('src', data.imageSource);
  const figure = $('<figure/>').addClass('image is-4by3').append(image);
  const cardImage = $('<div/>').addClass('card-image').append(figure);
  const writerName = $('<p/>').addClass('title is-4').text(data.writerName);
  const mediaContent = $('<div/>').addClass('media-content').append(writerName);
  const media = $('<div/>').addClass('media').append(mediaContent);
  const story = $('<div/>').addClass('content has-text-grey-darker is-size-7').text(data.story);
  const cardContent = $('<div/>').addClass('card-content').append(media).append(story);
  const card = $('<div/>').addClass('card').append(cardImage).append(cardContent);
  const column = $('<div/>').addClass('column is-one-third').append(card);
  storiesContainer.append(column);
}

function createStories() {
  stories.map(x => createStory(x));
}

function callFunctions() {
  initNavbar();
  createStories();
}

$(document).ready(callFunctions);
