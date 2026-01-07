# Le fonctionnent de la du coposant Card

## Les parametres
* le conteneur : est l'element html qui va receuillir la card
* le titre : est le titre de la card
* le contenue : est le cours et les question au format JSON
{cours : "`<h2>je suis du cours</h2><p>explication du cours</p>`",  
>quizz :[  
>    {question : "question 1",  
>    reponses : [  
>   >    "reponse 1",   
>        "reponse 2",   
>        "reponse 3"],  
>    type : "radio",  
>    valide : ["2"]},  
>    {question : "question 1",  
>     reponses : [  
>       "reponse 1",   
>        "reponse 2",   
>        "reponse 3"  
>        ],  
>    type : "checkbox",   
>    valide : [  
>        "2",   
>        "1"  
>        ]  
>    }  
>    ]  