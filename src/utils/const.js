const tokenType = {
  USER_SIGN_IN: 'USER_SIGN_IN',
  ADMIN_SIGN_IN: 'ADMIN_SIGN_IN',
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
  RESET_PASSWORD: 'RESET_PASSWORD',
  CHANGE_EMAIL: 'CHANGE_EMAIL'
}

const ROLE = {
  // GOD FATHER
  ROOT: 'ROOT',
  // ADMIN  ACCOUNT PERMISSION
  GET_ADMIN_ACCOUNT: 'GET_ADMIN_ACCOUNT',
  CREATE_ADMIN_ACCOUNT: 'CREATE_ADMIN_ACCOUNT',
  DELETE_ADMIN_ACCOUNT: 'DELETE_ADMIN_ACCOUNT',
  EDIT_ADMIN_ACCOUNT: 'EDIT_ADMIN_ACCOUNT',
  // CODE PERMISSION
  QUERY_CODE: 'QUERY_CODE',
  DELETE_CODE: 'DELETE_CODE',
  EXPORT_CODE: 'EXPORT_CODE',
  GENERATE_CODE: 'GENERATE_CODE',
  // USER PERMISSION
  QUERY_USER: 'QUERY_USER',
  EXPORT_USER: 'EXPORT_USER',
  EDIT_USER: 'EDIT_USER',
  DELETE_USER: 'DELETE_USER',
  // CLIENT PERMISSION
  CREATE_CLIENT: 'CREATE_CLIENT',
  EDIT_CLIENT: 'EDIT_CLIENT',
  QUERY_CLIENT: 'QUERY_CLIENT',
  DELETE_CLIENT: 'DELETE_CLIENT',
  EXPORT_CLIENT: 'EXPORT_CLIENT',
  // PLAYLIST PERMISSION
  CREATE_PLAYLIST: 'CREATE_PLAYLIST',
  EDIT_PLAYLIST: 'EDIT_PLAYLIST',
  DELETE_PLAYLIST: 'DELETE_PLAYLIST',
  // STATIC CONTENT PERMISSION
  CREATE_CONTENT: 'CREATE_NEW_CONTENT',
  EDIT_CONTENT: 'EDIT_CONTENT',
  DELETE_CONTENT: 'DELETE_CONTENT',
  // VIDEO COMMENT PERMISION
  GET_VIDEO_COMMENT: 'GET_VIDEO_COMMENT',
  HIDE_VIDEO_COMMENT: 'HIDE_VIDEO_COMMENT',
  UPDATE_REPORTED_COMMENT: 'REMOVE_REPORTED_COMMENT_STATUS',
  DELETE_COMMENT: 'DELETE_COMMENT',
  EDIT_MANY_COMMENT: 'EDIT_MANY_COMMENT',
  DELETE_MANY_COMMENT: 'DELETE_MANY_COMMENT',
  HIDE_MANY_COMMENT: 'HIDE_MANY_COMMENT'
}

const REACTION = {
  ENUM: ['LIKE', 'DISLIKE', 'LOVE', 'NONE', 'ANGRY'],
  CONSTANT: {
    LIKE: 'LIKE',
    DISLIKE: 'DISLIKE',
    LOVE: 'LOVE',
    NONE: 'NONE',
    ANGRY: 'ANGERY'
  }
}

const premiumTicket = {
  '[Startups] 3-Day Conference Pass [Regular Rate]': true,
  '[ASEAN, INDIA, MAINLAND CHINA] 3-Day Conference Pass [Regular Rate]': true,
  '[SINGAPORE] 3-Day Conference Pass [Regular Rate]': true,
  '[Rest of World] 3-Day Conference Pass [Regular Rate]': true,
  'Bulk Purchase': true,
  'Speaker Pass': true
}

const systemTags = {
  reels: true,
  summary: true,
  free: true,
  premium: true,
  yesshare: true,
  noshare: true,
  corp: true,
  ops: true,
  sm: true,
  nsm: true,
  '[': true,
  ']': true,
  '"': true
}

const eventTags = {
  sff2018: true,
  switch2018: true,
  sffxswitch2019: true
}

const dateRegex = /\d{1,2}\s.{1,3}\s\d{4}/i //21 Jun 2020

module.exports = {
  tokenType,
  premiumTicket,
  REACTION,
  systemTags,
  eventTags,
  dateRegex,
  ROLE
}
