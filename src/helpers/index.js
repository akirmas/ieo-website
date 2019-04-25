export const resolvePath = (
  filePath, 
  prefix = process.env.PUBLIC_URL.concat('/')
) =>
  filePath.startsWith('http')
    ? filePath
    : prefix.concat(filePath);