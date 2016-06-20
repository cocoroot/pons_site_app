
let core_contents_base_url = ''

if (process.env.NODE_ENV === 'production') {
  console.log("it runs in production mode! %o", process.env.NODE_ENV)
} else {
  console.log("it runs in development mode! %o", process.env.NODE_ENV)
  core_contents_base_url = 'http://localhost:3000/uploads/dev'
}

export const CORE_CONTENTS_BASE_URL = core_contents_base_url
