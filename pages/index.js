import postStyle from '../styles/Posts.module.css'

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    let teste = await res.json()

    return { props: { teste } }
}


export default function HomePage({ teste }) {
    return (<>
        {teste.map(e => {
            return (<div key={e.id} className={postStyle.post}>
                <h1>{e.title}</h1>
                <p>{e.body}</p>
            </div>)
        })}
    </>)
}

