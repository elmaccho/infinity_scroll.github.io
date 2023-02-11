const pCounters = document.querySelectorAll('.count')
const imgs = document.querySelectorAll('img')
const search = document.querySelector('.search')
const main = document.querySelector('.main')
const loadingBox = document.querySelector('.loadingBox')



const createPost = () => {
    const postBox = document.createElement('div')
    const postImg = document.createElement('img')
    const postInfo = document.createElement('div')
    const postCounter = document.createElement('div')
    const postPCount = document.createElement('p')
    const postComment = document.createElement('div')
    
    postBox.append(postImg)
    postBox.append(postInfo)
    postCounter.append(postPCount)
    postBox.append(postCounter)
    postBox.append(postComment)
    
    postCounter.classList.add('counter')
    postBox.classList.add('postBox')
    postPCount.classList.add('count')
    postComment.classList.add('commentBox')
    postInfo.classList.add('postInfo')
    
    postPCount.textContent =  Math.floor(Math.random() * 10000) + " polubień"
    postInfo.innerHTML = `                
    <button>
    <i class="fa-regular fa-heart"></i>
    </button>
    <button>
    <i class="fa-regular fa-comment"></i>
    </button>
    <button>
    <i class="fa-regular fa-paper-plane"></i>
    </button>`
    postComment.innerHTML = `<i class="fa-regular fa-user"></i> <input type="text" name="" id="" placeholder="Dodaj komentarz...">`
    


    let randId = Math.floor(Math.random()*1000+1)
    postImg.setAttribute('src', `https://picsum.photos/680/500?random=${randId}`)

    main.append(postBox)
}

for(let i=0; i<pCounters.length; i++){
    for(const counter of pCounters){
        let likes = Math.floor(Math.random() * 10000)
        counter.textContent = `${likes} polubień`
    }
}

const loadingDots = () => {
    document.body.style.overflow = "hidden"
    loadingBox.classList.add("show")
}

window.addEventListener('scroll', () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
	console.log( { scrollTop, scrollHeight, clientHeight });
	
	if(clientHeight + scrollTop >= scrollHeight - 5) {
		// show the loading animation


        loadingDots()
        main.style.filter = "grayscale(90%) blur(3px)"

            setTimeout(() => {
                createPost()
                createPost()

                document.body.style.overflowY = "scroll"
                loadingBox.classList.remove("show")
                main.style.filter = "grayscale(0) blur(0)"
            }, 1000);

	}
})
