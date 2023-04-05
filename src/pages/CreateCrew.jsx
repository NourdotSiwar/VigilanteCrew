import React from 'react';
import './CreateCrew.css'
import { supabase } from '../client'
import logos from "../images/logos.png";

const CreateCrew = () => {

    const createPost = async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const codeName = document.getElementById('codeName').value;
        const color = document.querySelector('input[name="color"]:checked')?.value;
        const gender= document.querySelector('input[name="gender"]:checked').value;
        const age = parseInt(document.getElementById('age').value);
        const mainAbility = document.getElementById('mainAbility').value;
        const mainWeapon = document.getElementById('mainWeapon').value;

        const post = {
            name: name,
            codename: codeName,
            color: color,
            gender: gender,
            main_ability: mainAbility,
            main_weapon: mainWeapon,
            age: age
        }

        console.log(post); 

        try {
        const { data, error } = await supabase
        .from('members')
        .insert(post)
        .select();

        if (error) {
        console.log('Error inserting data:', error);
        } else {
        console.log('Data inserted successfully:', data);
        }
        } catch (error) {
        console.log('Error inserting data:', error);
        }

        //window.location = "/gallery";
    }
 
    return (
        <div className='CreateCrewDiv'>
            <img className="Logo" src={logos} alt="Vigilante Crew Logo" />
            <form>

            <div className='cardNames'>
            <div className='cardName'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            </div>

            <div className='cardCodeName'>
            <label htmlFor="codeName">Code Name</label>
            <input type="text" id="codeName" name="codeName" />
            </div>
            </div>

            <div className='cardInfo'>
            <div className='cardGender'>
            <label>Gender:</label>
            <div className='choicesGender'>
            <input type="radio" id="genderM" name="gender" value="male"/>
            <label htmlFor="genderM">Male</label>
            <input type="radio" id="genderF" name="gender" value="female"/>
            <label htmlFor="genderF">Female</label>
            </div>
            </div>

            <div className='cardAge'>   
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" />
            </div>
            </div>

        <div className='cardColor'>

        <label>Color:</label>
        <input type="radio" id="black" name="color" value="black" />
        <label htmlFor="black">Black</label>
        <input type="radio" id="blue" name="color" value="blue"/>
        <label htmlFor="blue">Blue</label>
        <input type="radio" id="red" name="color" value="red"/>
        <label htmlFor="red">Red</label>
        <input type="radio" id="green" name="color" value="green"/>
        <label htmlFor="green">Green</label>
        <input type="radio" id="orange" name="color" value="orange"/>
        <label htmlFor="orange">Orange</label>
        <input type="radio" id="purple" name="color" value="purple"/>
        <label htmlFor="purple">Purple</label>
        <input type="radio" id="yellow" name="color" value="yellow"/>
        <label htmlFor="yellow">Yellow</label>

        </div>


            <div className='cardMains'>

            <div className='cardAbility'>
            <label htmlFor="mainAbility">Main Ability</label>
            <input type="text" id="mainAbility" name="mainAbility" />
            </div>

            <div className='cardWeapon'>
            <label htmlFor="mainWeapon">Main Weapon</label>
            <input type="text" id="mainWeapon" name="mainWeapon" />
            </div>
            </div>
        
                <br/>
                <input className="submitBtn" type="submit" value="Create Vigilante" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreateCrew;