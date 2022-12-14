import React from "react"
import { PropTypes } from "prop-types";

export const Profile = ( {name, bio, profession, handleName, children}) => {
    return <div style ={styles.container}>
        <h1 style={styles.name}> My name is {name}</h1>
        <h1 style={styles.bio}>Bio: {bio}</h1>
        <h1 style={styles.profession}>Profession: {profession}</h1>
        <a style={styles.click} href="#" onClickCapture={(handleName)}>
                click here 
                </a>
        
        <div style={styles.image}>
            {children}
            
            
            
        </div>
    </div>
}

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '50px',
      margin: '250px'
      
    },
    image: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      marginLeft: '1px',
      marginRight: '1400px'
      
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    bio: {
      fontSize: '16px',
    },
    click: {
        fontSize: '18px',
        fontStyle: 'italic',
      },
    profession: {
      fontSize: '18px',
      fontStyle: 'italic',
    },
  };


 
  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.element
  }

  Profile.defaultProps = {
    name: 'Marwan',
    bio: 'bio',
    profession: 'engineer'
  };


