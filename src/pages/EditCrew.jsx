import React from 'react';
import { useParams } from 'react-router-dom';
import './EditCrew.css'
import { supabase } from '../client'
import logos from "../images/logos.png";

// This component is used to edit a crew member
const EditCrew = () => {

    // Get the id from the url
    const {id} = useParams();

    // Set up state variables
    const [post, setPost] = React.useState(null);

    // Fetch the crew member from the database
    React.useEffect(() => {
        const fetchPost = async () => {

            // data is an array of objects
            const {data} = await supabase

            // from table called members
            .from('members')

            // select all columns
            .select()

            // where the id is equal to the id in the url
            .eq('id', id)
        
            // order by created_at in ascending order
            if(data.length > 0) {
                setPost(data[0]);
            }
        }
        fetchPost().catch(console.error);
        
    }, [id]);

    const updatePost = async (e) => {
        e.preventDefault();

        // Update the crew member in the database
        await supabase.from('members').update({
            name: post.name,
            codename: post.codename,
            color: post.color,
            gender: post.gender,
            main_ability: post.main_ability,
            main_weapon: post.main_weapon,
            age: post.age,
        }).eq('id', id);

        // Redirect to the gallery page
        window.location = '/gallery';
    }

    const deletePost = async (e) => {
        e.preventDefault();

        // Delete the crew member from the database
        await supabase.from('members').delete().eq('id', id);

        // Redirect to the gallery page
        window.location = '/gallery';
    }

    // If the post is null, show a loading message
    if (!post) {
        return <div>Loading...</div>;
    }

    return (
    
            <div className='CreateCrewDiv' >
            <img className="Logo" src={logos} alt="Vigilante Crew Logo" />

            <br></br>
            <h2>Character Information</h2>
            <div className='charInfoDiv' style={{ '--card-shadow-color': post.color }}>
            <h3>
                Name: <span className='colorSpan'>{post.name}</span>
                <br></br>
                Code Name: <span className='colorSpan'>{post.codename}</span>
                <div className='genderAgeDiv'>
                Gender: <span className='colorSpan'>{post.gender} </span>
                Age: <span className='colorSpan'>{post.age}</span>
                </div>
                Main Ability: <span className='colorSpan'>{post.main_ability}</span>
                <br></br>
                Main Weapon: <span className='colorSpan'>{post.main_weapon}</span>
            </h3>
            </div>
            <br></br>
            <form >

            <div className='cardNames'>
            <div className='cardName'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={post.name} onChange={(e) => setPost({...post, name: e.target.value})} />
            </div>

            <div className='cardCodeName'>
            <label htmlFor="codeName">Code Name</label>
            <input type="text" id="codeName" name="codeName" value={post.codename} onChange={(e) => setPost({...post, codename: e.target.value})} />
            </div>
            </div>

            <div className='cardInfo'>
            <div className='cardGender'>
            <label>Gender:</label>
            <div className='choicesGender'>
            <input type="radio" id="genderM" name="gender" value="male" checked={post.gender === 'male'} onChange={(e) => setPost({...post, gender:e.target.value})}/>
            <label htmlFor="genderM">male</label>
            <input type="radio" id="genderF" name="gender" value="female" checked={post.gender === 'female'} onChange={(e) => setPost({...post, gender:e.target.value})} />
            <label htmlFor="genderF">female</label>
            </div>
            </div>

            <div className='cardAge'>   
            <input type="text" id="age" name="age" value={post.age} onChange={(e) => setPost({...post, age: e.target.value})} />
            </div>
            </div>

            <div className='cardColor'>
            <label>Color:</label>
            <input type="radio" id="black" name="color" value="black" checked={post.color === 'black'} onChange={(e) => setPost({...post, color: e.target.value})} />
            <label htmlFor="black">black</label>
            <input type="radio" id="blue" name="color" value="blue" checked={post.color === 'blue'} onChange={(e) => setPost({...post, color: e.target.value})} />
            <label htmlFor="blue">blue</label>
            <input type="radio" id="red" name="color" value="red" checked={post.color === 'red'} onChange={(e) => setPost({...post, color: e.target.value})} />
            <label htmlFor="red">red</label>
            <input type="radio" id="green" name="color" value="green" checked={post.color === 'green'} onChange={(e) => setPost({...post, color: e.target.value})} />
            <label htmlFor="green">green</label>
            <input type="radio" id="orange" name="color" value="orange" checked={post.color === 'orange'} onChange={(e) => setPost({...post, color: e.target.value})} />
            <label htmlFor="orange">orange</label>
            <input type="radio" id="purple" name="color" value="purple" checked={post.color === 'purple'} onChange={(e) => setPost({...post, color: e.target.value})} />
            <label htmlFor="purple">purple</label>
            <input type="radio" id="yellow" name="color" value="yellow" checked={post.color === 'yellow'} onChange={(e) => setPost({...post, color: e.target.value})} />
            <label htmlFor="yellow">yellow</label>
            </div>

            <div className='cardMains'>
            <div className='cardAbility'>
            <label htmlFor="mainAbility">Main Ability</label>
            <input type="text" id="mainAbility" name="mainAbility" value={post.main_ability} onChange={(e) => setPost({...post, main_ability: e.target.value})} />
            </div>
            <div className='cardWeapon'>
            <label htmlFor="mainWeapon">Main Weapon</label>
            <input type="text" id="mainWeapon" name="mainWeapon" value={post.main_weapon} onChange={(e) => setPost({...post, main_weapon: e.target.value})} />
            </div>
            </div>

                <br/>
                <button className='updateBtn' onClick={updatePost}>Update Post</button>
                <button className='deleteBtn' onClick={deletePost}>Delete Post</button>  
            </form>
</div>
    )
}

export default EditCrew;