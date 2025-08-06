const api_url = 'https://flynn.boolean.careers/exercises/api/random/mail'

const ulEl = document.querySelector('ul')



for (let i=0; i<10;i++) {
    
}
axios.get(api_url)
.then(res => {
    console.log(res);
    const thisMail = res.data.response 

    if (res.data.success) {
       const liEl = document.createElement('li')
       ulEl.insertAdjacentElement('beforeend', liEl)
       liEl.innerText = thisMail
    }
    
})