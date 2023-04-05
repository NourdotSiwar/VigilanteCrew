import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import './CrewGallery.css';

const CrewGallery = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchPosts = async () => {
            const { data } = await supabase
            .from('members')
            .select()
            .order('created_at', { ascending: true });

            setPosts(data);
        }
        fetchPosts().catch(console.error);
    }, []);
    
    return (
        <div className="CrewGallery">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                <div className="CrewGalleryCard" key={index} style={{ '--card-shadow-color': post.color }}>
                <h1>Name: <span className='colorSpan'>{post.name}</span></h1>
                <h3>Code Name: <span className='colorSpan'>{post.codename}</span></h3>
                <h3>Gender: <span className='colorSpan'>{post.gender} </span> Age: <span className='colorSpan'>{post.age}</span></h3>
                <h3>Main Ability: <span className='colorSpan'>{post.main_ability}</span></h3>
                <h3>Main Weapon: <span className='colorSpan'>{post.main_weapon}</span></h3>

                    <Link to={`/edit/${post.id}`}><button className='CrewGalleryCardButtons'>Edit</button></Link>
                </div>


                ) : 
                (
                  <div>
                      <h1>Your Crew is Empty!</h1>
                      <h2><Link style={{color: 'white', textShadow: '0 0 2px white'}}
                       to="/create">Create a Vigilante Here</Link></h2>
                  </div>
              )}
            
        </div>  
    );
}

export default CrewGallery;
