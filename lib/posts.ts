import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import CustomImage from '@/app/components/CustomImage'
import Video from '@/app/components/Video'

export async function getPostByName(filePath:string){
    const res = await fetch(`https://raw.githubusercontent.com/antman999/portfolio-data/main/${filePath}`, {
        headers:{
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        }
    })
    if(!res.ok){
        return undefined
    }

    const rawMDX = await res.text()
    if(rawMDX === '404: Not Found') return undefined

    const { frontmatter, content}  = await compileMDX<{title: string, date: string, tags: string[]}>({
        source: rawMDX,
        components: {
            Video,
            CustomImage
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                ],
            },
        }
    })

    const id = filePath.replace(/\.mdx$/, '')
    const blogPostObj: BlogPost = { meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags }, content }
    return blogPostObj
}

export async function getBlogPostMeta(): Promise<MetaBlog[] | undefined> {
  const res = await fetch('https://api.github.com/repos/antman999/portfolio-data/git/trees/main?recursive=1', {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!res.ok) return undefined;

  const repoFileTree = await res.json();

const blogpostsContents = repoFileTree.tree
  .map((item) => {
    if (item.path.startsWith('blogposts/') && item.type === 'blob' && item.path.endsWith('.mdx')) {
      return item;
    }
    return null;
  })
  .filter((item) => item !== null);
  const posts: Meta[] = []

  for( const file of blogpostsContents){
    const post = await getPostByName(file.path)
    if(post){
        const {meta} = post 
        posts.push(meta)
    } 
  }
  return posts.sort((a,b)=> a.date < b.date ? 1 : -1)
}