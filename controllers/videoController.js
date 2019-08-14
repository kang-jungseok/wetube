import routes from '../routes';
export const home = (req, res) => {
  res.render('home', {pageTitle: 'Home', videos});
};

export const search = (req, res) => {
  const {
    query: {term: searchingBy},
  } = req;
  res.render('Search', {pageTitle: 'Search', searchingBy, videos});
};

export const getUpload = (req, res) =>
  res.render('Upload', {pageTitle: 'Upload'});
export const postUpload = (req, res) => {
  const {
    body: {file, title, description},
  } = req;
  res.redirect(routes.videoDetail(32493));
};

export const videoDetail = (req, res) =>
  res.render('VideoDetail', {pageTitle: 'Video Detail'});
export const editVideo = (req, res) =>
  res.render('EditVideo', {pageTitle: 'Edit Video'});
export const deleteVideo = (req, res) =>
  res.render('DeleteVideo', {pageTitle: 'Delete Video'});
