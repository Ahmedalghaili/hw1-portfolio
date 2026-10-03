// Prefix public/ asset paths with the deploy base path (GitHub Pages serves the site under /<repo>/).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const asset = (path: string) => `${basePath}${path}`
