import React from 'react';
import { useParams } from 'react-router-dom';
import './EditCrew.css'
import { supabase } from '../client'

const EditCrew = () => {

    const {id} = useParams();
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .eq('id', id)
        
            if(data.length > 0) {
                setPost(data[0]);
            }
        }
        fetchPost().catch(console.error);
    }, [id]);

    const updatePost = async (e) => {
        e.preventDefault();

        await supabase.from('Posts').update({
            title: post.title,
            author: post.author,
            description: post.description
        }).eq('id', id);

        window.location = '/edit/' + id;
    }

    const deletePost = async (e) => {
        e.preventDefault();

        await supabase.from('Posts').delete().eq('id', id);

        window.location = '/gallery';
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <form onSubmit={updatePost}>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}/> <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={(e) => setPost({...post, author: e.target.value})} /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" value={post.description} onChange={(e) => setPost({...post, description: e.target.value})}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrew;