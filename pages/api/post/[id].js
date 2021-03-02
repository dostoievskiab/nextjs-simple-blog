export const getServerSideProps = async ({ params }) => {
    console.log(params)

    return {
        props: {
            id: params.id
        }
    }
}

export default function Handler(req, res) {
    res.status(200).json({ helloworld: 'Hello World' })
}