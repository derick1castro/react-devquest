import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

async function getPost(id) {
    const response = await fetch(`http://localhost:3001/json/post-${id}.json`)
    return await response.json()
}

const PostDetails = () => {
    const [post, setPost] = useState({})

    const {id} = useParams()

    useEffect(() => {
        async function fetchData() {
            const post = await getPost(id)
            setPost(post.data)
        }

        fetchData()
    }, [])

    return (
        <Section>
            <Link to='/'>Voltar para os posts</Link>
            <div>
                <Img src={post.image} alt={post.title} />
                <h2>{post.title}</h2>
                <p>{post.text}</p>
             </div>
        </Section>
    )
}

const Section = styled.section`
    padding: 50px;
`

const Img = styled.img`
    width: 100%
`

export { PostDetails }