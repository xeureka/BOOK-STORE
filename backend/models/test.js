function playGame(){

    return new Promise((resolve,reject) =>{

        setTimeout(() => {
            const success = true;

            if (success){
                console.log('Finishsed Playing Game.')
                resolve()
            }else{
                reject('Failed for Gaming.')
            }
            
        }, 1500);

    })

}

function cleanRoom(){
    return new Promise((resolve,reject) => {
        const success = true;

        setTimeout(() => {

            if (success){
                console.log('Finished cleaning Room.');
                resolve()
            }else{
                reject('Failed to clean Room')
            }

            
        }, 1000);
    })
}


function takeTrash(){
    return new Promise((resolve,reject) =>{
        const success = true;

        setTimeout(() => {

            if (success){
                console.log('Finished taking out trash')
                resolve()
            }else{
                reject('Failed to take out the trash.')
            }
            
            
        }, 500);
    })
}

// using async/await



async function startChores(){
    await playGame();
    await cleanRoom();
    await takeTrash()
}

startChores()