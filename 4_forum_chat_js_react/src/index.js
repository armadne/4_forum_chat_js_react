import React, {useState} from 'react';

import ReactDOM from 'react-dom';
import './style.css'

const Forum = () => {

    const[ViewComment, setViewComment] = useState([]);
    

    const[inputName, setinputvalue1] = useState('');
    const[inputComment, setinputvalue2] = useState('');



    const addComment = () => {

        if(inputComment.trim() !== '') {

            
            setViewComment([...ViewComment, { name: inputName, comment: inputComment}])
            setinputvalue1('');
            setinputvalue2('');

        
        };
    };

    const RemoveComment = (index) => {

        const newComment = [...ViewComment];
        newComment.splice(index, 1);
        setViewComment(newComment);

    };

    return(

        <div>
            <h1>Forum Chat</h1>

            <input
            type='text'
            placeholder='Paul'
            value={inputName}
            onChange={(e) => setinputvalue1(e.target.value)}
            />

            <br/>
            <br/>

            <textarea
            cols={24}
            rows={8}
            type='text'
            placeholder='Ecrivez Votre Commentaire'
            value={inputComment}
            onChange={(e) => setinputvalue2(e.target.value)}
            />

            <br/>
            <br/>
            <button onClick={addComment}>Publier</button>


            <ul>

                {ViewComment.map((ViewComment, index) => (

                    <li key={index}>

                        <div>
                        {ViewComment.name}: 
                        </div>
                        
                        
                        
                        <div>
                        {ViewComment.comment}
                        </div>
                        


                        <br/>
                        <br/>
                        <button onClick={() => RemoveComment(ViewComment.name , ViewComment.comment)}>Supprimer</button>

                        <br/>
                        <br/>
                        <br/>
                    </li>

                    

                ))}

                

            </ul>
        </div>
    );
};


ReactDOM.render(

    <React.StrictMode>
        <Forum />
    </React.StrictMode>,

    document.getElementById('root')

)
