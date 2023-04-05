import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import './CrewGallery.css';
import logos from "../images/logos.png";

// This component is used to display the gallery of crew members
const CrewGallery = () => {

    // Set up state variables
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        // Fetch the crew members from the database
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
        <div className='galleryDiv'>
             <img className="Logo" src={logos} alt="Vigilante Crew Logo" />
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

                    <Link style={{color: 'white', textShadow: '0 0 2px white', textDecoration: 'none'}} to={`/edit/${post.id}`}><button className='CrewGalleryCardButtons'>Edit</button></Link>
                </div>
                ) : 
                (
                  <div className='emptyCrew'>
                       {window.location = '/emptyCrew'}
                  </div>
              )}
            
        </div> 
        </div> 
    );
}

export default CrewGallery;
