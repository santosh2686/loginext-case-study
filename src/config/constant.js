const constants = {
  REGEX_EMPTY: /\S+/,
  // eslint-disable-next-line no-useless-escape
  REGEX_EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  REGEX_URL: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g,
  REGEX_NUMBER: /^[0-9]+$/,
  REQUIRED: 'Required.',
  INVALID_EMAIL: 'Invalid email Id.',
  INVALID_URL: 'Invalid website URL.',
}

export default constants
