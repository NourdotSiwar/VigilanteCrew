import React from 'react';
import { useParams } from 'react-router-dom';
import './EditCrew.css'
import { supabase } from '../client'
import logos from "../images/logos.png";

const EditCrew = () => {

    const {id} = useParams();
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
            .from('members')
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

        await supabase.from('members').update({
            name: post.name,
            codename: post.codename,
            color: post.color,
            gender: post.gender,
            main_ability: post.main_ability,
            main_weapon: post.main_weapon,
            age: post.age,
        }).eq('id', id);

        window.location = '/edit/' + id;
    }

    const deletePost = async (e) => {
        e.preventDefault();

        await supabase.from('members').delete().eq('id', id);

        window.location = '/gallery';
    }

    if (!post) {
        return <div>Loading...</div>;
    }
    
    return (
            
            <div className='CreateCrewDiv'>
            <img className="Logo" src={logos} alt="Vigilante Crew Logo" />

            <br></br>
            <div className='CharacterInformation'>
            <h2>Character Information</h2>
            <h3>
                Name: <span className='colorSpan'>{post.name}</span>
                <br></br>
                Code Name: <span className='colorSpan'>{post.codename}</span>
                <br></br>
                Color: <span className='colorSpan'>{post.color}
                </span>
                <br></br>
                Gender: <span className='colorSpan'>{post.gender}</span>
                <br></br>
                Age: <span className='colorSpan'>{post.age}</span>
                <br></br>
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
            <input type="radio" id="genderM" name="gender" value="Male" checked={post.gender === 'male'} onChange={(e) => setPost({...post, gender:e.target.value})}/>
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
            </form>

            <button className='deleteBtn' onClick={deletePost}>Delete Post</button>   
</div>
    )
}

export default EditCrew;