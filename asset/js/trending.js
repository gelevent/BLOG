function showTrending() {
    navbar()
    // futer()
}
showTrending()
function navbar() {
    const nav = document.querySelector('nav')
    nav.classList.add('navbar', 'navbar-expand-lg', 'shadow')


    const divNav = document.createElement('div')
    divNav.classList.add('container', 'py-2')
    nav.appendChild(divNav)

    divNav.innerHTML = '<a class="navbar-brand fw-bold" href="index.html"> <img src="../asset/img/Blogzm.png" style= "width:50px"></a>'


    const btnNav = document.createElement('button')
    btnNav.classList.add('navbar-toggler')
    btnNav.setAttribute('type', 'button')
    btnNav.setAttribute('data-bs-toogle', 'collapse')
    btnNav.setAttribute('data-bs-target', '#navbarSupportedContent')
    btnNav.setAttribute('aria-controls', 'navbarSupportedContent')
    btnNav.setAttribute('aria-expanded', 'false')
    btnNav.setAttribute('ariza-label', 'Toggle navigation')
    divNav.appendChild(btnNav)

    const spn = document.createElement('span')
    spn.classList.add('navbar-toggler-icon')
    btnNav.appendChild(spn)

    const divC = document.createElement('div')
    divC.setAttribute('id', 'navbarSupportedContent')
    divC.classList.add('collapse', 'navbar-collapse')
    divNav.appendChild(divC)

    const ulNav = document.createElement('ul')
    ulNav.classList.add('navbar-nav', 'mx-auto', 'mb-2', 'mb-lg-0')
    divC.appendChild(ulNav)

    const liNav = document.createElement('li')
    liNav.classList.add('nav-item')
    ulNav.appendChild(liNav)

    const aNav = document.createElement('a')
    aNav.classList.add('nav-link', 'active', 'text-light')
    aNav.setAttribute('aria-current', 'page')
    aNav.setAttribute('href', 'index.html')
    aNav.textContent = 'Beranda'
    liNav.appendChild(aNav)

    const ltNav = document.createElement('li')
    ltNav.classList.add('nav-item')
    ulNav.appendChild(ltNav)

    const atNav = document.createElement('a')
    atNav.classList.add('nav-link', 'text-light', 'text-decoration-underline')
    atNav.setAttribute('href', 'blog3.html')
    atNav.textContent = 'Blog'
    ltNav.appendChild(atNav)

    const lltNav = document.createElement('li')
    lltNav.classList.add('nav-item')
    ulNav.appendChild(lltNav)

    const aatNav = document.createElement('a')
    aatNav.classList.add('nav-link', 'text-light')
    aatNav.setAttribute('href', 'about.html')
    aatNav.textContent = 'About us'
    lltNav.appendChild(aatNav)

    const ddNav = document.createElement('li')
    ddNav.classList.add('nav-item', 'dropdown')
    ulNav.appendChild(ddNav)

    const adNav = document.createElement('a')
    adNav.classList.add('nav-link', 'dropdown-toggle', 'text-light')
    adNav.setAttribute('href', '#')
    adNav.setAttribute('role', 'button')
    adNav.setAttribute('data-bs-toggle', 'dropdown')
    adNav.setAttribute('aria-expanded', 'false')
    adNav.textContent = 'Terkini'
    ddNav.appendChild(adNav)

    const dd = document.createElement('ul')
    dd.classList.add('dropdown-menu')
    ddNav.appendChild(dd)

    const ll = document.createElement('li')
    dd.appendChild(ll)

    const aa = document.createElement('a')
    aa.classList.add('dropdown-item')
    aa.setAttribute('href', '#')
    aa.textContent = 'Palestine'
    ll.appendChild(aa)

    const lll = document.createElement('li')
    dd.appendChild(lll)

    const aaa = document.createElement('a')
    aaa.classList.add('dropdown-item')
    aaa.setAttribute('href', '#')
    aaa.textContent = 'Rohingya'
    lll.appendChild(aaa)

    const llll = document.createElement('li')
    dd.appendChild(llll)

    const aaaa = document.createElement('a')
    aaaa.classList.add('dropdown-item')
    aaaa.setAttribute('href', '#')
    aaaa.textContent = 'Ukraina'
    llll.appendChild(aaaa)

    const lgn = document.createElement('button')
    lgn.classList.add('class', 'btn', 'btn-outline-light', 'px-3', 'fw-medium', 'me-2')
    lgn.setAttribute('data-bs-toggle', 'modal')
    lgn.setAttribute('data-bs-target', '#exampleModal')
    lgn.textContent = 'Login'
    divC.appendChild(lgn)


}

function futer() {
    const bdy = document.querySelector('body')

    const ftr = document.createElement('div')
    ftr.classList.add('text-light', 'p-3', 'mrg')
    ftr.style.background = '#0f0c29'
    ftr.style.background = 'linear-gradient(to right, #24243e, #302b63)'

    bdy.appendChild(ftr)

    const frDiv = document.createElement('div')
    frDiv.classList.add('row', 'justify-content-around', 'text-center', 'text-md-start')
    ftr.appendChild(frDiv)

    const tp = document.createElement('div')
    tp.classList.add('col-md-2', 'text-center')
    frDiv.appendChild(tp)

    const h1 = document.createElement('h1')
    h1.classList.add('fw-bold', 'mt-3')
    h1.textContent = 'TP'
    tp.appendChild(h1)

    const h4 = document.createElement('h4')
    h4.textContent = 'The Providers'
    tp.appendChild(h4)

    const cntn = document.createElement('div')
    cntn.classList.add('col-md-2')
    frDiv.appendChild(cntn)

    const ulCntn = document.createElement('ul')
    ulCntn.classList.add('list-unstyled')
    cntn.appendChild(ulCntn)

    const liCntn = document.createElement('li')
    liCntn.classList.add('fw-bold', 'my-2')
    liCntn.textContent = 'Partnership'
    ulCntn.appendChild(liCntn)

    const liA = document.createElement('li')
    ulCntn.appendChild(liA)

    const aul = document.createElement('a')
    aul.setAttribute('href', '#')
    aul.classList.add('text-decoration-none', 'text-white')
    aul.textContent = 'Website'
    liA.appendChild(aul)

    const liAa = document.createElement('li')
    ulCntn.appendChild(liAa)

    const aull = document.createElement('a')
    aull.setAttribute('href', '#')
    aull.classList.add('text-decoration-none', 'text-white')
    aull.textContent = 'Sosial Media'
    liAa.appendChild(aull)

    const liAaa = document.createElement('li')
    ulCntn.appendChild(liAaa)

    const aulll = document.createElement('a')
    aulll.setAttribute('href', '#')
    aulll.classList.add('text-decoration-none', 'text-white')
    aulll.textContent = 'Branding'
    liAaa.appendChild(aulll)

    const abtFtr = document.createElement('div')
    abtFtr.classList.add('col-md-2')
    frDiv.appendChild(abtFtr)

    const abtUl = document.createElement('ul')
    abtUl.classList.add('list-unstyled')
    abtFtr.appendChild(abtUl)

    const abtLi = document.createElement('li')
    abtLi.classList.add('fw-bold', 'my-2')
    abtLi.textContent = 'About'
    abtUl.appendChild(abtLi)

    const abtLia = document.createElement('li')
    abtUl.appendChild(abtLia)

    const abtA = document.createElement('a')
    abtA.setAttribute('href', '#')
    abtA.classList.add('text-decoration-none', 'text-white')
    abtA.textContent = 'Our Project'
    abtLia.appendChild(abtA)

    const abtLiaa = document.createElement('li')
    abtUl.appendChild(abtLiaa)

    const abtAa = document.createElement('a')
    abtAa.setAttribute('href', '#')
    abtAa.classList.add('text-decoration-none', 'text-white')
    abtAa.textContent = 'Careers'
    abtLiaa.appendChild(abtAa)

    const sprtFtr = document.createElement('div')
    sprtFtr.classList.add('col-md-2')
    frDiv.appendChild(sprtFtr)

    const sprtUl = document.createElement('ul')
    sprtUl.classList.add('list-unstyled')
    sprtFtr.appendChild(sprtUl)

    const sprtLi = document.createElement('li')
    sprtLi.classList.add('fw-bold', 'my-2')
    sprtLi.textContent = 'Support'
    sprtUl.appendChild(sprtLi)

    const sprtLia = document.createElement('li')
    sprtUl.appendChild(sprtLia)

    const sprtA = document.createElement('a')
    sprtA.setAttribute('href', '#')
    sprtA.classList.add('text-decoration-none', 'text-white')
    sprtA.textContent = 'Contact'
    sprtLia.appendChild(sprtA)

    const sprtLiaa = document.createElement('li')
    sprtUl.appendChild(sprtLiaa)

    const sprtAa = document.createElement('a')
    sprtAa.setAttribute('href', '#')
    sprtAa.classList.add('text-decoration-none', 'text-white')
    sprtAa.textContent = 'Support Request'
    sprtLiaa.appendChild(sprtAa)

    const hr = document.createElement('hr')
    frDiv.appendChild(hr)

    const drc = document.createElement('div')
    drc.classList.add('row')
    frDiv.appendChild(drc)

    const dc = document.createElement('div')
    dc.classList.add('col-md-12', 'text-center', 'pt-2')
    drc.appendChild(dc)

    const dp = document.createElement('p')
    dp.textContent = '2023 CopyRight by (Fg)'
    dc.appendChild(dp)
}
