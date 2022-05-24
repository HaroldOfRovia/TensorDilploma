import { UserPost } from './userPost';

/**
 * @returns 5 новых постов со случайным изображением и шуткой в классе поста
*/
export async function addPosts(){
    let array: UserPost[] = [];
    for(let i = 0; i < 5; i++){
        let joke, meme;
        const post = new UserPost();
        try{
            const jokeFetch = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
                        
            if (jokeFetch.status === 200) {
                joke = await jokeFetch.json();
                post.setText(joke.joke);
            } else {
                throw new Error('The joke was not received. ' + jokeFetch.status);
            }
        }
        catch(err){
            console.error(err);
            post.setText(err+"");
        }

        try{
            const memeFetch = await fetch("https://meme-api.herokuapp.com/gimme/wholesomememes/2");
            if (memeFetch.status === 200) {
                meme = await memeFetch.json();
                post.setImg(meme.memes[0].url);
            } else {
                throw new Error('The image was not received. ' + memeFetch.status);
            }
        }
        catch(err){
            console.error(err);
            post.setImg('https://www.pinclipart.com/picdir/middle/192-1923229_explosion-clipart-bubble-oops-png-transparent-png.png');
        }
        
        array.push(post);   
    }
    return array;
}

export function setList(array: UserPost[], set: Function){
    addPosts().then((userPosts) => {
        set(array.concat(userPosts))
      })
}