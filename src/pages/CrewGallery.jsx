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
    
    console.log(posts);
    return (
        <div className="CrewGallery">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                <div className="CrewGalleryCard" key={index} style={{ boxShadow: `0 0 5px ${post.color}` }}>
                    <h1>Name: {post.name}</h1>
                    <h2>Code Name: {post.codename}</h2>
                    <h3>Gender: {post.gender} | Age: {post.age}</h3>
                    <h3>Main Ability: {post.main_ability}</h3>
                    <h3>Main Weapon: {post.main_weapon}</h3>
                    
                </div>

                ) : 
                (
                  <div>
                      <h1>Your Crew is Empty!</h1>
                      <h2><Link to="/create">Create a Vigilante Here</Link></h2>
                  </div>
              )}
            
        </div>  
    );
}

export default CrewGallery;
