import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONs, MYAPI } from "./APIcontant";

export const UseLang = () => {
const selector = useSelector((store) => store.movies.bannerdisplay);

const {title} = selector;

useEffect (() => {
    fetchtitledata ();
},[])

const fetchtitledata = async () => {

    const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '5dadcfa3d7msh936ab7fd41d36a0p1a0bb4jsn234faaa8f997',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: new URLSearchParams({
		source_language: 'en',
		target_language: 'hi',
		text: title
	})
};

    
    const data = await fetch(url ,options);

    const response = await data.json();

    console.log(response)

    console.log(title)
}

}