let toSnakeCase = key => key.replace(/\.?([A-Z]+)/g, (x, y) => { return "_" + y.toLowerCase() }).replace(/^_/, "")


let post = {
  caption: 'test caption',
  potato: 'cool',
  imageFiles: ['a', 'b']
}

const parsePost = (
  permittedKeys = ['caption', 'image_files'],
  data
) => {

  let post = {};

  for (const camelKey in data) {
    let value = data[camelKey];
    let snake_key = toSnakeCase(camelKey);
    if (permittedKeys.includes(snake_key)) {
      post[snake_key] = value;
    }
  }

  return post;

}

parsePost(undefined, post)