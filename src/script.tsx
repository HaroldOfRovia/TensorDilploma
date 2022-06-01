import { UserPost } from './userPost';

/**
 * @returns ссылку на изображение в виде строки полученную с сервера
 */
async function getImage() {
    let img: string = 'https://www.pinclipart.com/picdir/middle/192-1923229_explosion-clipart-bubble-oops-png-transparent-png.png';
    try{
        const memeFetch = await fetch("https://meme-api.herokuapp.com/gimme/wholesomememes/2");
        if (memeFetch.status === 200) {
            const meme = await memeFetch.json();
            img = meme.memes[0].url;
        } else {
            throw new Error('The image was not received. ' + memeFetch.status);
        }
    }
    catch(err){
        console.error(err);
    }

    return img;
}

/**
 * @returns строку с шуткой полученную с сервера
 */
async function getJoke() {
    let joke: string = "";
    try{
        const jokeFetch = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");            
        if (jokeFetch.status === 200) {
            const text = await jokeFetch.json();
            joke = text.joke;
        } else {
            throw new Error('The joke was not received. ' + jokeFetch.status);
        }
    }
    catch(err){
        console.error(err);
    }

    return joke;
}

/**
 * @returns 5 новых постов со случайным изображением и шуткой в классе поста
*/
export async function getNewPosts(){
    const listPosts: UserPost[] = [];
    for(let i = 0; i < 5; i++){
        const post = new UserPost();

        post.setText(await getJoke());
        post.setImg(await getImage());
        
        listPosts.push(post);   
    }
    return listPosts;
}
