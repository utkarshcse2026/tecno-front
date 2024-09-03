import React from 'react';
import axios from 'axios';

const Techinput = () => {
    const [techname, setName] = React.useState('');
    const [cropname, setCrop] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [coordinates, setCoordinates] = React.useState([]); // Array to store [latitude, longitude]
    
   
    
    const addtech = async () => {
        console.warn('Adding tech with data:', {
            techname,
            cropname,
            location: coordinates, // Check this log
        });
    
       
        if (coordinates.length !== 2) {
            console.error('Coordinates are not set correctly:', coordinates);
            return;
        }
    
        try {
            
            const response = await axios.post('https://techno-back.onrender.com/techinput', {
                techname,
                crop: cropname,
                location: coordinates, // Send coordinates array
            });
    
            console.log('Tech added successfully:', response.data);
        } catch (error) {
            console.error('Failed to add tech:', error);
        }
    };
    

    // Function to convert location to coordinates
    const convertLocationToCoordinates = async () => {
        const apiKey = '5d157c620d9c4089b66b6d74a66d4beb';
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`;

        try {
            const response = await axios.get(url);
            const results = response.data.results;

            if (results.length > 0) {
                const { lat, lng } = results[0].geometry;
                const newCoordinates = [lat, lng];

                setCoordinates(newCoordinates); 
                console.log('New Coordinates:', newCoordinates);
                
            } else {
                console.error('No results found for the location');
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
    };

    return (
        <div className="techcomp">
            <h1>Input Technology</h1>
            <input
                className="inputbox"
                type="text"
                placeholder="Enter Technology Name"
                value={techname}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="inputbox"
                type="text"
                placeholder="Enter Crop Name"
                value={cropname}
                onChange={(e) => setCrop(e.target.value)}
            />
            <input
                className="inputbox"
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onBlur={convertLocationToCoordinates} // Convert location to coordinates on blur
            />
            <button onClick={addtech} className="appbutton" type="button">
                Send
            </button>

            {coordinates.length === 2 && (
                <p>Coordinates: {coordinates[0]}, {coordinates[1]}</p>
            )}
        </div>
    );
};

export default Techinput;
