export const fetchRandomImages = (count, callback) => {
  const myHeaders = new Headers()
  myHeaders.append(
    'Authorization',
    'Client-ID 2BM5CHzGLCRpO61C4eCqVIM_6apCdXXzg1moxlIYAEU'
  )

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }

  return fetch(
    'https://api.unsplash.com/photos/random?count=25',
    requestOptions
  )
    .then((response) => response.json())
    .then((result) =>
      result.map((photo) => [
        photo.id,
        photo.alt_description,
        photo.urls.small,
        photo.user.name
      ])
    )
    .catch((error) => {
      throw error
    })
}
