import postStyle from '../styles/Posts.module.css'

export async function getStaticProps() {
    let res = await fetch(`${process.env.SERVER_URL}api/posts`)
    let posts = await res.json()

    return { props: { posts } }
}


export default function HomePage({ posts }) {
    return (<>
        {posts.map(e => {
            return (<div key={e.id} className={postStyle.post}>
                <h1>{e.title}</h1>
                <p>{e.text}</p>
            </div>)
        })}
    </>)
}

