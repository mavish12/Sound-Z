const productsData = [
    {
        id: 1,
        tag: "hero-product",
        tagline: "Keep the noise out, or in. You choose.",
        heroImage: "./images/jbl660nc-1.png",
        images: [
            "./images/jbl660nc-1.png",
            "./images/jbl660nc-2.png",
            "./images/jbl660nc-3.png",
            "./images/jbl660nc-4.png",
        ],
        brand: "JBL",
        title: "JBL Live 660NC",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 9999,
        originalPrice: 14999,
        quantity: 1,
        ratings: "1234 Ratings",
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 2,
        tag: "featured-product",
        images: [
            "./images/boat518-1.png",
            "./images/boat518-2.png",
            "./images/boat518-3.png",
            "./images/boat518-4.png",
        ],
        brand: "boAt",
        title: "boAt Rockerz 518",
        info: "On-Ear Wireless Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 1299,
        originalPrice: 3990,
        quantity: 1,
        ratings: "1321 Ratings",
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 3,
        tag: "hero-product",
        tagline: "Featherweight for comfort all-day.",
        heroImage: "./images/boat131-3.png",
        images: [
            "./images/boat131-1.png",
            "./images/boat131-2.png",
            "./images/boat131-3.png",
            "./images/boat131-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 131",
        info: "Wireless In-Ear Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: "1244 Ratings",
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 4,
        images: [
            "./images/boat110-1.png",
            "./images/boat110-2.png",
            "./images/boat110-3.png",
            "./images/boat110-4.png",
        ],
        brand: "boAt",
        title: "boAt BassHeads 110",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 449,
        originalPrice: 999,
        quantity: 1,
        ratings: "556 Ratings",
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 5,
        images: [
            "./images/boat410-1.png",
            "./images/boat410-2.png",
            "./images/boat410-3.png",
            "./images/boat410-4.png",
        ],
        brand: "boAt",
        title: "boAt Rockerz 410",
        info: "Bluetooth & Wired On-Ear Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Bluetooth & Wired",
        finalPrice: 1599,
        originalPrice: 2990,
        quantity: 1,
        ratings: "1563 Ratings",
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 6,
        images: [
            "./images/jbl200bt-1.png",
            "./images/jbl200bt-2.png",
            "./images/jbl200bt-3.png",
            "./images/jbl200bt-4.png",
        ],
        brand: "JBL",
        title: "JBL Live 200BT",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 3699,
        originalPrice: 5299,
        quantity: 1,
        ratings: "836 Ratings",
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 7,
        tag: "hero-product",
        tagline: "Give your favourite music a boost.",
        heroImage: "./images/sonyxb910n-1.png",
        images: [
            "./images/sonyxb910n-1.png",
            "./images/sonyxb910n-2.png",
            "./images/sonyxb910n-3.png",
            "./images/sonyxb910n-4.png",
        ],
        brand: "Sony",
        title: "Sony WH-XB910N",
        info: "Wireless Over-Ear Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 13489,
        originalPrice: 19990,
        quantity: 1,
        ratings: "679 Ratings",
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 8,
        tag: "featured-product",
        images: [
            "./images/jbl760nc-1.png",
            "./images/jbl760nc-2.png",
            "./images/jbl760nc-3.png",
            "./images/jbl760nc-4.png",
        ],
        brand: "JBL",
        title: "JBL Tune 760NC",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 5999,
        originalPrice: 7999,
        quantity: 1,
        ratings: "755 Ratings",
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 9,
        tag: "featured-product",
        images: [
            "./images/boat255r-1.png",
            "./images/boat255r-2.png",
            "./images/boat255r-3.png",
            "./images/boat255r-4.png",
        ],
        brand: "boAt",
        title: "boAt Rockerz 255",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 899,
        originalPrice: 2990,
        quantity: 1,
        ratings: "1464 Ratings",
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 10,
        images: [
            "./images/jbl100-1.png",
            "./images/jbl100-2.png",
            "./images/jbl100-3.png",
            "./images/jbl100-4.png",
        ],
        brand: "JBL",
        title: "JBL Wave 100",
        info: "In-Ear Truly Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2999,
        originalPrice: 6999,
        quantity: 1,
        ratings: "801 Ratings",
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 11,
        images: [
            "./images/sony1000xm4-1.png",
            "./images/sony1000xm4-2.png",
            "./images/sony1000xm4-3.png",
            "./images/sony1000xm4-4.png"
        ],
        brand: "Sony",
        title: "Sony WF-1000XM4",
        info: "Wireless In-Ear NC Headphones",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 19990,
        originalPrice: 24990,
        quantity: 1,
        ratings: "382 Ratings",
        rateCount: 3,
        path: "/product-details/",
    },
    {
        id: 12,
        images: [
            "./images/boat228-1.png",
            "./images/boat228-2.png",
            "./images/boat228-3.png",
            "./images/boat228-4.png",
        ],
        brand: "boAt",
        title: "boAt BassHeads 228",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 649,
        originalPrice: 1190,
        quantity: 1,
        ratings: "1178 Ratings",
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 13,
        tag: "featured-product",
        images: [
            "./images/jbl-endu-1.png",
            "./images/jbl-endu-2.png",
            "./images/jbl-endu-3.png",
            "./images/jbl-endu-4.png",
        ],
        brand: "JBL",
        title: "JBL Endurance Run Sports",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 999,
        originalPrice: 1599,
        quantity: 1,
        ratings: "1144 Ratings",
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 14,
        tag: "featured-product",
        images: [
            "./images/boat203-1.png",
            "./images/boat203-2.png",
            "./images/boat203-3.png",
            "./images/boat203-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 203",
        info: "In-Ear Truly Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1074,
        originalPrice: 3999,
        quantity: 1,
        ratings: "1340 Ratings",
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 15,
        images: [
            "./images/sonych710n-1.png",
            "./images/sonych710n-2.png",
            "./images/sonych710n-3.png",
            "./images/sonych710n-4.png",
        ],
        brand: "Sony",
        title: "Sony WH-CH710N",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 8520,
        originalPrice: 14990,
        quantity: 1,
        ratings: "853 Ratings",
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 16,
        images: [
            "./images/jbl500bt-1.png",
            "./images/jbl500bt-2.png",
            "./images/jbl500bt-3.png",
            "./images/jbl500bt-4.png",
        ],
        brand: "JBL",
        title: "JBL Tune 500BT",
        info: "On-Ear Wireless Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 3282,
        originalPrice: 3999,
        quantity: 1,
        ratings: "364 Ratings",
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 17,
        images: [
            "./images/boat381-1.png",
            "./images/boat381-2.png",
            "./images/boat381-3.png",
            "./images/boat381-4.png",
        ],
        brand: "boAt",
        title: "boAt Airdopes 381",
        info: "In-Ear Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1699,
        originalPrice: 4990,
        quantity: 1,
        ratings: "1011 Ratings",
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 18,
        images: [
            "./images/sony-ex14ap-1.png",
            "./images/sony-ex14ap-2.png",
            "./images/sony-ex14ap-3.png",
            "./images/sony-ex14ap-4.png"
        ],
        brand: "Sony",
        title: "Sony MDR-EX14AP",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 549,
        originalPrice: 1290,
        quantity: 1,
        ratings: "530 Ratings",
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 19,
        images: [
            "./images/sonyxb400-1.png",
            "./images/sonyxb400-2.png",
            "./images/sonyxb400-3.png",
            "./images/sonyxb400-4.png",
        ],
        brand: "Sony",
        title: "Sony WI-XB400",
        info: "Wireless Extra Bass In-Ear Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2690,
        originalPrice: 4990,
        quantity: 1,
        ratings: "474 Ratings",
        rateCount: 4,
        path: "/product-details/",
    },
];

const reviewsData = [
    {
        id: 1,
        name: "Atharva Kumar",
        date: "4 Aug 2022",
        review: "Sound is awesome and as I expected, love it.",
        rateCount: 5,
    },
    {
        id: 2,
        name: "Ritika Sen",
        date: "15 July 2022",
        review: "Very good and awesome product",
        rateCount: 5,
    },
    {
        id: 3,
        name: "Bhavesh Joshi",
        date: "10 June 2022",
        review: "Super amazing product !!!",
        rateCount: 4,
    },
    {
        id: 4,
        name: "Anandi Gupta",
        date: "6 May 2022",
        review: "Great NC, sound is a bit flat",
        rateCount: 4,
    },
    {
        id: 5,
        name: "Arif Khan",
        date: "27 April 2022",
        review: "Very good but still has flaws!",
        rateCount: 3,
    },
]
let cart = [];
let browseAllProduct = true;
let totalLength = 11;
let totalCount = 0;
filterfn("All", "all");
loadDataFromLocalStorage();

function loadDataFromLocalStorage() {
    let data = localStorage.getItem('cart');
    let cartData = JSON.parse(data);
    if (cartData) {
        for (let i = 0; i < cartData.length; i++) {
            cart.push(cartData[i]);
        }
        document.getElementById('countCart').innerHTML = "" + cart.length
    }
}

function filterfn(category, id) {
    removeStyle('all');
    removeStyle('headphone');
    removeStyle('earbud');
    removeStyle('earphone');
    removeStyle('neckband');

    if (category == 'All') {
        browseAllProduct = true;
        totalLength = 11;
        display(productsData);
        document.getElementById(id).style.border = '1px solid red';
        document.getElementById(id).style.borderRadius = '6px';
        document.getElementById(id).style.padding = '3px';
        document.getElementById(id).style.backgroundColor = 'red';
    } else {
        let item = productsData.filter(arr => arr.category == category);
        document.getElementById(id).style.border = '1px solid red';
        document.getElementById(id).style.borderRadius = '6px';
        document.getElementById(id).style.padding = '3px';
        document.getElementById(id).style.backgroundColor = 'red';
        totalLength = item.length - 1;
        display(item);
    }
}

function removeStyle(id) {
    document.getElementById(id).style.border = '';
    document.getElementById(id).style.borderRadius = '';
    document.getElementById(id).style.padding = '';
    document.getElementById(id).style.backgroundColor = '';
}

// function for homepage all items
function display(item) {

    let parent = document.getElementById('unOrdered');
    while (parent.children.length > 0) {
        parent.removeChild(parent.lastChild);
    }

    for (let j = 0; j <= totalLength; j++) {
        if (j == 11 && browseAllProduct) {
            let list = document.getElementById('unOrdered');
            let listItem = document.createElement('li');
            listItem.setAttribute('onClick', 'listfn()')
            listItem.setAttribute('style', 'color:white;list-style-type:none;color: white;list-style-type: none;font-size: 22px;font-size: 20px;border:1px solid white;height:96%;padding:250px 35px;cursor:pointer')
            let listItemdata = document.createTextNode('Browse All Products -->')
            listItem.appendChild(listItemdata);
            list.appendChild(listItem);
        }
        else {
            createListItem(item[j], parent);
        }
    }
}

function createListItem(data, parent) {

    let listItem = document.createElement('li');
    listItem.setAttribute('id', data.id);
    listItem.setAttribute('style', 'list-style-type: none;display:grid;justify-content:space-around;padding-bottom:40px;border:1px solid lightgray;margin-bottom:20px;')
    let img = document.createElement('img');
    img.setAttribute('onclick', 'detail("' + data.id + '")');
    img.setAttribute('src', data.images[0]);
    img.setAttribute('style', 'height:260px;width:297px;background-color:#353333;cursor:pointer')
    let head = document.createElement('h2');
    let heading = document.createTextNode(data.title);
    head.setAttribute('style', 'color:white;padding-left:15px')
    head.appendChild(heading);
    let p = document.createElement('p');
    p.setAttribute('style', 'color:gray;padding-left:15px')
    let para = document.createTextNode(data.info);
    p.appendChild(para);
    let hr = document.createElement('hr');
    hr.setAttribute('style', 'border:1px solid white;width:280px;')
    let div = document.createElement('div');
    div.setAttribute('style', 'padding-left:15px');
    let i = document.createElement('i');
    i.setAttribute('style', 'color:white')
    i.setAttribute('class', 'fa-solid fa-indian-rupee-sign');
    let space = document.createElement('span');
    let space1 = document.createTextNode('&nbsp');
    space.setAttribute('style', 'color:rgb(34, 33, 33)')
    space.appendChild(space1);
    let i1 = document.createElement('i');
    i1.setAttribute('style', 'color:gray;text-decoration: line-through;')
    i1.setAttribute('class', 'fa-solid fa-indian-rupee-sign');
    div.appendChild(i);
    div.appendChild(space);
    div.appendChild(i1);
    let price1 = document.createTextNode(data.originalPrice);
    let price = document.createTextNode(data.finalPrice);
    let br = document.createElement('br');
    let br1 = document.createElement('br');
    let btn = document.createElement('button');
    btn.setAttribute('onclick', 'createobject("' + data.id + '")');
    btn.setAttribute('style', 'background-color:red;color:white;width:250px;font-size:21px;display:grid;justify-self:center;border-color:red;border-radius:10px')
    let btndata = document.createTextNode('Add to cart');
    btn.appendChild(btndata);
    i1.appendChild(price1);
    i.appendChild(price);
    listItem.appendChild(img);

    let stardiv = document.createElement('div');
    stardiv.setAttribute('style', 'padding-left:15px');
    //for loop used for count number of star 
    for (let k = 0; k < data.rateCount; k++) {
        let star = document.createElement('i');
        star.setAttribute('class', "fa-solid fa-star fa-sm");
        star.setAttribute('style', 'color:red');
        stardiv.appendChild(star);
    };

    listItem.appendChild(stardiv);
    listItem.appendChild(head);
    listItem.appendChild(p);
    listItem.appendChild(hr);
    listItem.appendChild(div);
    listItem.appendChild(br);
    listItem.appendChild(br1);
    listItem.appendChild(btn);
    parent.appendChild(listItem);
}
// createseconlist();
function createsecondlist() {
    let carousel = document.getElementsByClassName('carousel slide');
    carousel[0].style.display = 'none';
    carousel[1].style.display = 'none';
    document.getElementById('top-product-h2').style.display = 'none';
    document.getElementById('top-product-div1').style.display = 'none';
    document.getElementById('unOrderedsecondlist').style.display = 'grid';

    let mainParent = document.getElementById('unOrderedsecondlist');
    mainParent.style.display = 'grid';
    if (mainParent.children.length > 1) {
        mainParent.removeChild(mainParent.lastChild);
    }
    let parent = document.createElement('span');
    parent.setAttribute('id', '3listitem');
    parent.setAttribute('class', 'listitem3');
    // parent.setAttribute('style', 'display:grid;grid-template-columns:31% 31% 31%;justify-content:space-evenly');
    for (let k = 0; k < productsData.length; k++) {
        createListItem(productsData[k], parent);
    }
    mainParent.appendChild(parent);
}
function listfn() {
    let myNode = document.getElementById('unOrdered');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    // totalLength = productsData.length - 1;
    // display(productsData);
    createsecondlist();
}

// MAIN PRODUCT DETAIL PART
function detail(id) {
    let carousel = document.getElementsByClassName('carousel slide');
    carousel[0].style.display = 'none';
    carousel[1].style.display = 'none';
    document.getElementById('top-product').style.display = 'none';
    document.getElementById('div-sec').style.display = 'block';

    let parent = document.getElementById('div-sec');
    while (parent.children.length > 0) {
        parent.removeChild(parent.lastChild);
    }

    for (let j = 0; j < productsData.length; j++) {
        if (productsData[j].id == id) {
            let mainparentdiv = document.getElementById('div-sec');
            let firstsecondthirdP = document.createElement('div');
            firstsecondthirdP.setAttribute('class', 'detail')
            firstsecondthirdP.setAttribute('id', 'detailpart1');
            // firstsecondthirdP.setAttribute('style', 'display:grid;grid-template-columns:15% 40% 38%;justify-content:space-evenly;margin-top:25px');
            let firstdivchild = document.createElement('div');
            firstdivchild.setAttribute('id', 'firstimgpart');

            for (let k = 0; k < productsData[j].images.length; k++) {
                let imgs = document.createElement('img');
                imgs.setAttribute('src', productsData[j].images[k]);
                imgs.setAttribute('onclick', 'imgfunc("' + productsData[j].images[k] + '", "' + "img" + k + '" ,"' + productsData[j].images.length + '")');
                imgs.setAttribute('id', "img" + k);
                imgs.setAttribute('style', 'heigth:100px;width:150px;margin-top:30px;border:1px solid gray')
                firstdivchild.appendChild(imgs);
            }

            let seconddivchild = document.createElement('div');
            let mainimg = document.createElement('img');
            mainimg.setAttribute('id', 'centerMainImg');
            mainimg.setAttribute('src', productsData[j].images[0]);
            mainimg.setAttribute('style', 'width:100%;margin-top:10px');
            mainimg.setAttribute('height', '700px');
            seconddivchild.appendChild(mainimg);

            let thirddivchild = document.createElement('div');
            thirddivchild.setAttribute('style', 'margin-top:25px;padding:0px 10px')
            let head = document.createElement('h1');
            head.setAttribute('style', 'color:white');
            let head1 = document.createTextNode(productsData[j].title);
            let p = document.createElement('p');
            p.setAttribute('style', 'color:white');
            let pheading = document.createTextNode(productsData[j].info);

            head.appendChild(head1);
            thirddivchild.appendChild(head);
            p.appendChild(pheading);
            thirddivchild.appendChild(p);

            let parentrating = document.createElement('div');
            parentrating.setAttribute('style', 'display:flex');

            for (let i = 0; i < productsData[j].rateCount; i++) {
                let i = document.createElement('i');
                i.setAttribute('class', "fa-solid fa-star fa-sm");
                i.setAttribute('style', 'color:red;display:grid;align-items:center');
                parentrating.appendChild(i);
            }
            let space = document.createElement('p');
            space.setAttribute('style', 'padding:0px 10px')
            parentrating.appendChild(space);
            let h = document.createElement('h2');
            h.setAttribute('style', 'color:white');
            let line = document.createTextNode('|');
            h.appendChild(line);
            parentrating.appendChild(h);

            let space1 = document.createElement('p');
            space1.setAttribute('style', 'padding:0px 10px')
            parentrating.appendChild(space1);

            let hh = document.createElement('h2');
            hh.setAttribute('style', 'color:white');
            let rating = document.createTextNode(productsData[j].ratings);
            hh.appendChild(rating);
            parentrating.appendChild(hh);

            thirddivchild.appendChild(parentrating);

            let horizontalline = document.createElement('hr');
            horizontalline.setAttribute('style', 'border:1px solid gray;margin:30px 0px');
            thirddivchild.appendChild(horizontalline);

            let mainParent = document.createElement('section');
            mainParent.setAttribute('style', 'display:grid;grid-template-columns:60% 30%')
            let mainParentFirstChild = document.createElement('div');
            mainParentFirstChild.setAttribute('class', 'text');
            let Fruppeesicon = document.createElement('i');
            let amount = document.createTextNode(productsData[j].finalPrice);
            Fruppeesicon.setAttribute('class', "fa-solid fa-indian-rupee-sign");
            Fruppeesicon.setAttribute('style', 'color:white;font-size:40px');
            Fruppeesicon.appendChild(amount);

            let Oruppeesicon = document.createElement('i');
            let amount1 = document.createTextNode(productsData[j].originalPrice);
            Oruppeesicon.setAttribute('class', "fa-solid fa-indian-rupee-sign");
            Oruppeesicon.setAttribute('style', 'color:gray;text-decoration: line-through;font-size:24px');
            Oruppeesicon.appendChild(amount1);

            let space2 = document.createElement('span');
            space2.setAttribute('style', 'padding:0px 10px')

            mainParentFirstChild.appendChild(Fruppeesicon);
            mainParentFirstChild.appendChild(space2);
            mainParentFirstChild.appendChild(Oruppeesicon);

            let parentSave = document.createElement('div');
            parentSave.setAttribute('style', 'display:flex;margin-top:15px');
            let youSave = document.createElement('p');
            youSave.setAttribute('style', 'color:green;display:grid;align-items:center;margin-bottom:5px');
            let textSave = document.createTextNode('You Save :');
            youSave.appendChild(textSave);
            let youSaveAmount = document.createElement('p');
            youSaveAmount.setAttribute('style', 'color:green;display:grid;align-items:center;margin-bottom:5px');
            let rup = document.createElement('i');
            rup.setAttribute('style', 'padding-left:5px');
            rup.setAttribute('class', "fa-solid fa-indian-rupee-sign");
            let youSaveValue = (productsData[j].originalPrice) - (productsData[j].finalPrice)
            let value = document.createTextNode(youSaveValue);
            console.log(value);
            rup.appendChild(value);
            youSaveAmount.appendChild(rup);

            let percent = document.createElement('p');
            percent.setAttribute('style', 'color:green;margin-bottom:0%;margin-left:5px');
            let percentSave = Math.floor(((youSaveValue)) / (productsData[j].originalPrice) * 100);
            let result = document.createTextNode(`(${percentSave}%)`);
            console.log(result);
            percent.appendChild(result);

            parentSave.appendChild(youSave);
            parentSave.appendChild(youSaveAmount);
            parentSave.appendChild(percent);
            mainParentFirstChild.appendChild(parentSave);
            let description = document.createElement('p');
            description.setAttribute('style', 'color:gray');
            let descriptiontext = document.createTextNode('(Inclusive of all taxes)');
            description.appendChild(descriptiontext);
            mainParentFirstChild.appendChild(description);
            mainParent.appendChild(mainParentFirstChild);
            thirddivchild.appendChild(mainParent);

            let mainParentSecondChild = document.createElement('div');
            mainParentSecondChild.setAttribute('style', 'display:grid;align-items:center')
            let button = document.createElement('button');
            button.setAttribute('style', 'background-color:green;color:white;border-color:green;border-radius:10px');
            let btnText = document.createTextNode('In Stock');
            button.appendChild(btnText);
            mainParentSecondChild.appendChild(button);
            mainParent.appendChild(mainParentSecondChild);

            let secondLine = document.createElement('hr');
            secondLine.setAttribute('style', 'border:1px solid gray');
            thirddivchild.appendChild(secondLine);

            let head3 = document.createElement('h4');
            head3.setAttribute('style', 'color:white;margin-top:40px');
            let head3Text = document.createTextNode('Offers and Discounts');
            head3.appendChild(head3Text);
            thirddivchild.appendChild(head3);

            let mainSec = document.createElement('section');
            mainSec.setAttribute('style', 'display:grid;grid-template-columns:48% 48%;justify-content:space-between;margin-top:35px');
            let mainSecfirst = document.createElement('div');
            let mainSecfirstp = document.createElement('p');
            mainSecfirstp.setAttribute('style', 'font-size:22px;color:gray;border:1px solid gray;border-radius:7px');
            let mainSecfirstptext = document.createTextNode('No Cost EMI on Credit Card');
            mainSecfirstp.appendChild(mainSecfirstptext);
            mainSecfirst.appendChild(mainSecfirstp);
            mainSec.appendChild(mainSecfirst);
            thirddivchild.appendChild(mainSec);

            let mainSecsecond = document.createElement('div');
            let mainSecsecondp = document.createElement('p');
            mainSecsecondp.setAttribute('style', 'font-size:22px;color:gray;border:1px solid gray;border-radius:7px');
            let mainSecsecondptext = document.createTextNode('Pay Later & Avail Cashback');
            mainSecsecondp.appendChild(mainSecsecondptext);
            mainSecsecond.appendChild(mainSecsecondp);
            mainSec.appendChild(mainSecsecond);
            thirddivchild.appendChild(mainSec);

            let addtocart = document.createElement('button');
            addtocart.setAttribute('onclick', 'createobject("' + id + '")')
            addtocart.setAttribute('style', 'width:250px;font-size:22px;color:white;background-color:red;margin-top:40px;border-color:red;border-radius:10px');
            let addtocarttext = document.createTextNode('Add to cart');
            addtocart.appendChild(addtocarttext);
            thirddivchild.appendChild(addtocart);

            firstsecondthirdP.appendChild(firstdivchild);
            firstsecondthirdP.appendChild(seconddivchild);
            firstsecondthirdP.appendChild(thirddivchild);
            mainparentdiv.appendChild(firstsecondthirdP);

            // SPECIFICATION OVERVIEW REVIEW PART
            let mainDiv = document.createElement('div');
            mainDiv.setAttribute('class', 'option');
            // mainDiv.setAttribute('style', 'color:white;margin-top:50px;color:white;display:flex;justify-content:space-evenly')
            let mainDivfirst = document.createElement('h2');
            mainDivfirst.setAttribute('class', 'h2speci')
            mainDivfirst.setAttribute('id', 'h2specification');
            mainDivfirst.setAttribute('onclick', 'specification()');
            let firsttext = document.createTextNode('Specification');
            mainDivfirst.appendChild(firsttext);
            mainDiv.appendChild(mainDivfirst);

            let mainDivsecond = document.createElement('h2');
            mainDivsecond.setAttribute('class', 'h2view')
            mainDivsecond.setAttribute('id', 'h2overview');
            mainDivsecond.setAttribute('onclick', 'onOverviewClick()');
            let secondtext = document.createTextNode('Overview');
            mainDivsecond.appendChild(secondtext);
            mainDiv.appendChild(mainDivsecond);

            let mainDivthird = document.createElement('h2');
            mainDivthird.setAttribute('class', 'h2rev')
            mainDivthird.setAttribute('id', 'h2reviews');
            mainDivthird.setAttribute('onclick', 'onReviewClick()');
            let thirdtext = document.createTextNode('Reviews');
            mainDivthird.appendChild(thirdtext);
            mainDiv.appendChild(mainDivthird);

            let sec = document.getElementById('div-sec');
            sec.appendChild(mainDiv);

            // specification detail part
            let Specificationdetail = document.createElement('div');
            Specificationdetail.setAttribute('style', 'display:grid;grid-template-columns:30% 40%');
            Specificationdetail.setAttribute('id', 'productspecification');
            let list = document.createElement('ul');
            list.setAttribute('style', 'list-style-type:none;color:white;padding-left:10px;margin-top:15px');
            let listitem1 = document.createElement('li');
            listitem1.setAttribute('style', 'margin-top:20px');
            let listitem1p = document.createTextNode('Brand')
            listitem1.appendChild(listitem1p)
            list.appendChild(listitem1)
            let listitem2 = document.createElement('li');
            listitem2.setAttribute('style', 'margin-top:20px');
            let listitem2p = document.createTextNode('Model')
            listitem2.appendChild(listitem2p)
            list.appendChild(listitem2)
            let listitem3 = document.createElement('li');
            listitem3.setAttribute('style', 'margin-top:20px');
            let listitem3p = document.createTextNode('Generic Name')
            listitem3.appendChild(listitem3p)
            list.appendChild(listitem3)
            let listitem4 = document.createElement('li');
            listitem4.setAttribute('style', 'margin-top:20px');
            let listitem4p = document.createTextNode('Headphone Type')
            listitem4.appendChild(listitem4p)
            list.appendChild(listitem4)
            let listitem5 = document.createElement('li');
            listitem5.setAttribute('style', 'margin-top:20px');
            let listitem5p = document.createTextNode('Connnectivity')
            listitem5.appendChild(listitem5p)
            list.appendChild(listitem5)
            let listitem6 = document.createElement('li');
            listitem6.setAttribute('style', 'margin-top:20px');
            let listitem6p = document.createTextNode('Microphone');
            listitem6.appendChild(listitem6p)
            list.appendChild(listitem6)



            Specificationdetail.appendChild(list);

            let list1 = document.createElement('ul');
            list1.setAttribute('style', 'list-style-type:none;color:white;padding-left:10px;margin-top:15px');
            let listitem12 = document.createElement('li');
            listitem12.setAttribute('style', 'margin-top:20px');
            let listitem12p = document.createTextNode(productsData[j].brand);
            listitem12.appendChild(listitem12p)
            list1.appendChild(listitem12)
            let listitem22 = document.createElement('li');
            listitem22.setAttribute('style', 'margin-top:20px');
            let listitem22p = document.createTextNode(productsData[j].title);
            listitem22.appendChild(listitem22p)
            list1.appendChild(listitem22)
            let listitem32 = document.createElement('li');
            listitem32.setAttribute('style', 'margin-top:20px');
            let listitem32p = document.createTextNode(productsData[j].category);
            listitem32.appendChild(listitem32p)
            list1.appendChild(listitem32)
            let listitem42 = document.createElement('li');
            listitem42.setAttribute('style', 'margin-top:20px');
            let listitem42p = document.createTextNode(productsData[j].type);
            listitem42.appendChild(listitem42p)
            list1.appendChild(listitem42)
            let listitem52 = document.createElement('li');
            listitem52.setAttribute('style', 'margin-top:20px');
            let listitem52p = document.createTextNode(productsData[j].connectivity);
            listitem52.appendChild(listitem52p)
            list1.appendChild(listitem52)
            let listitem62 = document.createElement('li');
            listitem62.setAttribute('style', 'margin-top:20px');
            let listitem62p = document.createTextNode('Yes');
            listitem62.appendChild(listitem62p)
            list1.appendChild(listitem62)

            Specificationdetail.appendChild(list1);
            sec.appendChild(Specificationdetail);

            overview(productsData[j]);
            reviews();
            let item = productsData.filter(arr => arr.category == productsData[j].category);
            relatedProducts(item);
            break;
        }
    }
}

function imgfunc(path, id, totalImage) {
    document.getElementById('centerMainImg').src = path;
    for (let i = 0; i < totalImage; i++) {
        document.getElementById("img" + i).style.border = '';
    }
    document.getElementById(id).style.border = '4px solid white';
}

// create function for put selected data in object and push into a new array 
function createobject(id) {
    if (cart.find(item => item.product.id == id) == undefined) {
        let data = productsData.find(arr => arr.id == id)
        if (data) {
            let mainobject = new Object;
            mainobject.count = 1;
            mainobject.product = data
            cart.push(mainobject);
            addToLocalStorage();
        }
        document.getElementById("countCart").innerHTML = cart.length;
    }
}

fullbody = 0;
function cartClick() {
    let addCart = document.getElementById('cartItems');

    while (addCart.children.length > 0) {
        addCart.removeChild(addCart.lastChild)
    }
    for (let j = 0; j < cart.length; j++) {
        let product = cart[j].product
        const itemdiv1 = document.createElement('div');
        itemdiv1.setAttribute('id', 'item' + fullbody);
        const itemdiv = document.createElement('div');
        itemdiv.setAttribute('class', 'summarydatas');
        // itemdiv.setAttribute('style', 'display:grid;grid-template-columns:17% 73% 5%;justify-content:center');
        const itemdivfirst = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src', product.images[0]);
        img.setAttribute('style', 'width:110px;height:150px;margin-bottom:20px');
        itemdivfirst.appendChild(img);
        const itemdivsecond = document.createElement('div');
        itemdivsecond.setAttribute('style', 'display:grid;margin-bottom:20px');
        let span = document.createElement('span');
        span.setAttribute('class', 'textpart');
        // span.setAttribute('style', 'display:flex;color:white;column-gap:10px');
        const heading1 = document.createElement('h5');
        heading1.innerHTML = (product.title);
        const heading2 = document.createElement('h5');
        heading2.innerHTML = (product.info);
        span.appendChild(heading1);
        span.appendChild(heading2);
        let icon = document.createElement('div');
        let i = document.createElement('i');
        i.innerHTML = (product.finalPrice)
        i.setAttribute('style', 'color:white')
        i.setAttribute('class', 'fa-solid fa-indian-rupee-sign');
        let space = document.createElement('span');
        let space1 = document.createTextNode('&nbsp');
        space.setAttribute('style', 'color:rgb(34, 33, 33)')
        space.appendChild(space1);
        let i1 = document.createElement('i');
        i1.innerHTML = (product.originalPrice);
        i1.setAttribute('style', 'color:gray;text-decoration: line-through;')
        i1.setAttribute('class', 'fa-solid fa-indian-rupee-sign');

        itemdivsecond.appendChild(span);
        icon.appendChild(i);
        icon.appendChild(space);
        icon.appendChild(i1);

        // counterPart
        const itemCount = document.createElement('div');
        itemCount.setAttribute('class', 'countparts');
        // itemCount.setAttribute('style', 'display:grid;grid-template-columns:33% 33% 34%;border:1px solid white;width:160px;height:43px;align-items:center;margin-bottom:20px');
        let span1 = document.createElement('span');
        span1.setAttribute('style', 'color:white;display:grid;justify-content:center;border:1px solid white;height:44px;font-size:23px;background-color:#524f4f;cursor:pointer');
        span1.setAttribute('onclick', 'minus("' + product.id + '", "' + 'countnum' + product.id + '")')
        span1.setAttribute('id', 'minus' + product.id)
        span1.innerHTML = '-'
        let span2 = document.createElement('span');
        let span2head = document.createElement('h3');
        span2head.setAttribute('id', 'countnum' + product.id);
        span2.setAttribute('style', 'display:grid;justify-content:center;color:red');
        span2head.innerHTML = cart[j].count;
        span2.appendChild(span2head);
        let span3 = document.createElement('span');
        span3.setAttribute('style', 'color:white;display:grid;justify-content:center;border:1px solid white;height:44px;font-size:22px;background-color:#524f4f;cursor:pointer');
        span3.setAttribute('onclick', 'plus("' + product.id + '", "' + 'countnum' + product.id + '")')
        span3.setAttribute('id', 'plus' + product.id)
        span3.innerHTML = "+";
        itemCount.appendChild(span1);
        itemCount.appendChild(span2);
        itemCount.appendChild(span3);

        itemdivsecond.appendChild(icon);
        itemdivsecond.appendChild(itemCount);

        const itemdivthird = document.createElement('div');
        let dustbin = document.createElement('i');
        dustbin.setAttribute('class', 'fa-regular fa-trash-can fa-xl');
        dustbin.setAttribute('style', 'color: #a1a3a5;cursor:pointer');
        dustbin.setAttribute('onclick', 'removefn("' + 'item' + fullbody + '","' + product.id + '")')
        itemdivthird.appendChild(dustbin);

        itemdiv.appendChild(itemdivfirst)
        itemdiv.appendChild(itemdivsecond)
        itemdiv.appendChild(itemdivthird)
        let line = document.createElement('hr');
        line.setAttribute('style', 'border:1px solid gray;width:90%')
        itemdiv1.appendChild(itemdiv);
        itemdiv1.appendChild(line);
        addCart.appendChild(itemdiv1);

        fullbody++;
    }
    summarypart();

}

function addToLocalStorage() {
    let data = JSON.stringify(cart);
    localStorage.setItem('cart', data);
}

function summarypart() {

    //remove all child of summary if present
    let summary = document.getElementById('ordersummary');
    while (summary.children.length > 0) {
        summary.removeChild(summary.lastChild)
    }

    let head = document.createElement('h2');
    head.setAttribute('id', "totalItem");
    head.setAttribute('style', 'color:white');
    head.innerHTML = 'Order Summary (' + cart.length + ' items)';
    let parentprice = document.createElement('div');
    parentprice.setAttribute('style', 'display:grid; grid-template-columns:50% 50%; margin-top:50px');
    let content = document.createElement('div');
    let p1 = document.createElement('p');
    p1.setAttribute('style', 'color:white;');
    p1.innerHTML = 'Original Price';
    let p2 = document.createElement('p');
    p2.setAttribute('style', 'color:white;');
    p2.innerHTML = 'discount';
    let p3 = document.createElement('p');
    p3.setAttribute('style', 'color:white;');
    p3.innerHTML = 'Delivery';
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);

    let price = document.createElement('div');
    price.setAttribute('style', 'display:grid;justify-content:end')
    let originalprice = document.createElement('i');
    originalprice.setAttribute('class', 'fa-solid fa-indian-rupee-sign');
    originalprice.setAttribute('style', 'color:white;font-size:22px;margin-bottom:13px');
    let originalPrice = cart.reduce((h1, h2) =>
        h1 + (h2.product.originalPrice * h2.count), 0);
    let finalPrice = cart.reduce((h1, h2) =>
        h1 + (h2.product.finalPrice * h2.count)
        , 0)

    originalprice.innerHTML = " " + originalPrice
    let discount = document.createElement('i');
    discount.setAttribute('class', 'fa-solid fa-indian-rupee-sign');
    discount.setAttribute('style', 'color:green;font-size:22px;margin-bottom:13px');
    discount.innerHTML = " " + originalPrice - finalPrice;
    let Delivery = document.createElement('h6');
    Delivery.setAttribute('style', 'color:green;font-size:22px;margin-bottom:13px');
    Delivery.innerHTML = 'Free';
    price.appendChild(originalprice);
    price.appendChild(discount);
    price.appendChild(Delivery);
    summary.appendChild(head);
    parentprice.appendChild(content);
    parentprice.appendChild(price);
    summary.appendChild(parentprice);

    let line = document.createElement('hr');
    line.setAttribute('style', 'border:1px solid gray;width:100%;margin-top:60px;margin-bottom:60px;');
    summary.appendChild(line);

    let heading = document.createElement('div');
    heading.setAttribute('style', 'display:grid;grid-template-columns:50% 50%;justify-content:space-between');
    let total = document.createElement('h2');
    total.setAttribute('style', 'color:white');
    total.innerHTML = "Total Price";
    let amount = document.createElement('i');
    amount.setAttribute('class', 'fa-solid fa-indian-rupee-sign')
    amount.setAttribute('style', 'color:white;display:flex;align-items:center;justify-content:end;font-size:25px;column-gap:7px');
    amount.innerHTML = "" + finalPrice;
    heading.appendChild(total);
    heading.appendChild(amount);
    summary.appendChild(heading);

    let btn = document.createElement('button');
    btn.innerHTML = 'Checkout';
    btn.setAttribute('style', 'background-color:red;margin-top:40px;width:100%;font-size:22px;padding:5px 0px;color:white;border-color:red;border-radius:7px;margin-bottom:50px');
    summary.appendChild(btn);
}

function removefn(id, productId) {
    let child = document.getElementById(id);
    let parent = document.getElementById("cartItems")
    parent.removeChild(child);
    let index = cart.findIndex(arr => arr.product.id == productId)

    cart.splice(index, 1)
    addToLocalStorage();

    if (parent.children.length == 0) {
        //remove summry card
        // cart item count
        let summary = document.getElementById('ordersummary')
        while (summary.children.length > 0) {
            summary.removeChild(summary.lastChild);
        }
        document.getElementById('countCart').innerHTML = "0"
        cartIcon()
    } else {
        let count = document.getElementById('countCart').innerHTML
        document.getElementById('countCart').innerHTML = --count;
        summarypart()
    }
}
function minus(id, countId) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id == id && cart[i].count > 1) {
            cart[i].count = cart[i].count - 1
            document.getElementById(countId).innerHTML = cart[i].count;
            summarypart()
            addToLocalStorage();
        }
    }

}

function plus(id, countId) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id == id) {
            cart[i].count = cart[i].count + 1
            document.getElementById(countId).innerHTML = cart[i].count;
            summarypart()
            addToLocalStorage();
        }
    }
}

function cartIcon() {
    let count = document.getElementById("countCart").innerHTML;
    if (count == 0) {
        emptyPage();
    } else {
        document.getElementById('hello1').style.display = 'grid';
        let carousel = document.getElementsByClassName('carousel slide');
        carousel[0].style.display = 'none';
        carousel[1].style.display = 'none';
        document.getElementById('top-product').style.display = 'none';
        document.getElementById('hoverPart').style.display = 'none';
        document.getElementById('search1').style.display = 'none';
        document.getElementById('cross-icon').style.display = 'none';
        document.getElementById('div-sec').style.display = 'none';
        cartClick();
    }
}

function relatedProducts(data) {

    let mainParent = document.getElementById('div-sec');
    let mainDiv = document.createElement('div');
    let heads = document.createElement('h2');
    heads.setAttribute('style', 'color:white;text-align:center;margin-top:50px;margin-bottom:80px');
    let headings = document.createTextNode('Related Products');
    heads.appendChild(headings);
    mainDiv.appendChild(heads);

    let list = document.createElement('ul');
    list.setAttribute('style', 'overflow:auto;display:flex;')
    list.setAttribute('id', 'scrollable-content');
    for (let j = 0; j < data.length; j++) {
        let listItem = document.createElement('li');
        listItem.setAttribute('style', 'display:inline-block;border:2px solid gray;margin:0px 7px;');
        let img = document.createElement('img');
        img.setAttribute('src', data[j].images[0]);
        img.setAttribute('onclick', 'detail("' + data[j].id + '")');
        img.setAttribute('style', 'height:260px;width:297px;background-color:#353333')
        listItem.appendChild(img);

        let stardiv = document.createElement('div');
        stardiv.setAttribute('style', 'padding-left:15px');
        //for loop with number of count
        for (let k = 0; k < data[j].rateCount; k++) {
            let star = document.createElement('i');
            star.setAttribute('class', "fa-solid fa-star fa-sm");
            star.setAttribute('style', 'color:red');
            stardiv.appendChild(star);
        };
        listItem.appendChild(stardiv);

        let head = document.createElement('h2');
        let heading = document.createTextNode(data[j].title);
        head.setAttribute('style', 'color:white;padding-left:15px')
        head.appendChild(heading);
        listItem.appendChild(head);
        let p = document.createElement('p');
        p.setAttribute('style', 'color:gray;padding-left:15px')
        let para = document.createTextNode(data[j].info);
        p.appendChild(para);
        listItem.appendChild(p);
        let hr = document.createElement('hr');
        hr.setAttribute('style', 'border:1px solid gray;width:280px;display:inline-block;margin-left:10px');
        listItem.appendChild(hr);
        let div = document.createElement('div');
        div.setAttribute('style', 'padding-left:15px');
        let i = document.createElement('i');
        i.setAttribute('style', 'color:white')
        i.setAttribute('class', 'fa-solid fa-indian-rupee-sign');
        let space = document.createElement('span');
        let space1 = document.createTextNode('&nbsp');
        space.setAttribute('style', 'color:rgb(34, 33, 33)')
        space.appendChild(space1);
        let i1 = document.createElement('i');
        i1.setAttribute('style', 'color:gray;text-decoration: line-through;')
        i1.setAttribute('class', 'fa-solid fa-indian-rupee-sign');
        div.appendChild(i);
        div.appendChild(space);
        div.appendChild(i1);
        listItem.appendChild(div);
        let price1 = document.createTextNode(data[j].originalPrice);
        let price = document.createTextNode(data[j].finalPrice);
        let br = document.createElement('br');
        let btn = document.createElement('button');
        btn.setAttribute('onclick', 'createobject("' + data[j].id + '")');
        btn.setAttribute('style', 'background-color:red;color:white;width:250px;font-size:21px;display:grid;justify-self:center;border-color:red;margin-left:15px;margin-bottom:25px;border-radius:10px')
        let btndata = document.createTextNode('Add to cart');
        btn.appendChild(btndata);
        i1.appendChild(price1);
        i.appendChild(price);
        listItem.appendChild(br)
        listItem.appendChild(btn);
        list.appendChild(listItem);
        mainDiv.appendChild(list);

        mainParent.appendChild(mainDiv);
    }
}

function specification() {
    setVisibility('grid', 'none', 'none')
    setStyle('h2reviews', '', '', '')
    setStyle('h2specification', 'red', '7px', '8px')
    setStyle('h2overview', '', '', '')
}

function onOverviewClick() {
    setVisibility('none', 'none', 'block')
    setStyle('h2reviews', '', '', '')
    setStyle('h2specification', '', '', '')
    setStyle('h2overview', 'red', '7px', '8px')
}

function onReviewClick() {
    setVisibility('none', 'block', 'none')
    setStyle('h2reviews', 'red', '7px', '8px')
    setStyle('h2specification', '', '', '')
    setStyle('h2overview', '', '', '')
}

function setStyle(id, backgroundColor, padding, borderRadius) {
    let detailItem = document.getElementById(id)
    detailItem.style.backgroundColor = backgroundColor;
    detailItem.style.padding = padding;
    detailItem.style.borderRadius = borderRadius;
}

function setVisibility(productspecification, productreviews, overview) {
    document.getElementById('productspecification').style.display = productspecification;
    document.getElementById('productreviews').style.display = productreviews;
    document.getElementById('Overviewsfn').style.display = overview;
}

function overview(object) {
    // OVERVIEW DETAIL PART
    let section = document.getElementById('div-sec');
    let mainparent = document.createElement('div');
    mainparent.setAttribute('id', 'Overviewsfn');
    mainparent.setAttribute('style', 'color:white;margin:40px 20px');
    let head = document.createElement('h3');
    let headtext = document.createTextNode(`The ${object.title} ${object.info} provides with fabulous sound quality`);
    head.appendChild(headtext);
    let list = document.createElement('ul');
    let listitem = document.createElement('li');
    let listitemdetail = document.createTextNode('Sound Tuned to Perfection');
    let listitem1 = document.createElement('li');
    let listitemdetail1 = document.createTextNode('Comfortable to Wear');
    let listitem2 = document.createElement('li');
    let listitemdetail2 = document.createTextNode('Long Hours Playback Time');
    listitem.appendChild(listitemdetail);
    listitem1.appendChild(listitemdetail1);
    listitem2.appendChild(listitemdetail2);
    list.appendChild(listitem);
    list.appendChild(listitem1);
    list.appendChild(listitem2);

    let para = document.createElement('p');
    let paradetail = document.createTextNode(`Buy the ${object.title} ${object.info} which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from.Enjoy perfectflexibilty and mobility with amazing musical quality with these Headphones giving you a truly awesome audio experience.it clends with exceptional sound quality and a range of smart feature for an unrivalled listening experience.`);
    para.appendChild(paradetail);

    mainparent.appendChild(head);
    mainparent.appendChild(list);
    mainparent.appendChild(para);
    section.appendChild(mainparent);

    document.getElementById('Overviewsfn').style.display = 'none';
}

function reviews() {
    // REVIEW PART DETAIL
    let maindivsec = document.createElement('div');
    maindivsec.setAttribute('id', 'productreviews');
    for (let i = 0; i < reviewsData.length; i++) {
        let section = document.getElementById('div-sec');
        let maindiv = document.createElement('div');
        maindiv.setAttribute('class', 'reviews');
        // maindiv.setAttribute('style', 'display:grid;grid-template-columns:7% 40%');
        let maindivfirstchild = document.createElement('div');
        maindivfirstchild.setAttribute('style', 'display:grid;justify-content:center;align-items:center');
        let imageicon = document.createElement('i');
        imageicon.setAttribute('class', "fa-solid fa-user fa-xl");
        imageicon.setAttribute('style', 'color:white;border:6px solid white;border-radius:100%;padding:25px 15px;background-color:lightgray');
        maindivfirstchild.appendChild(imageicon);
        maindiv.appendChild(maindivfirstchild);
        maindivsec.appendChild(maindiv);
        section.appendChild(maindivsec);

        let maindivsecondchild = document.createElement('div');
        let name = document.createElement('h4');
        name.setAttribute('style', 'color:white');
        let getname = document.createTextNode(reviewsData[i].name);
        name.appendChild(getname);
        maindivsecondchild.appendChild(name);

        let maindivstar = document.createElement('div');
        maindivstar.setAttribute('style', 'display:flex;align-items:center');
        let stardiv = document.createElement('div');
        for (let j = 0; j < reviewsData[i].rateCount; j++) {
            let staricon = document.createElement('i');
            staricon.setAttribute('class', "fa-solid fa-star fa-xs");
            staricon.setAttribute('style', 'color:red');
            stardiv.appendChild(staricon);
            maindivstar.appendChild(stardiv);

        }
        let line = document.createElement('h2');
        line.setAttribute('style', 'color:white')
        let makeline = document.createTextNode('I');
        line.appendChild(makeline);
        maindivstar.appendChild(line);

        let date = document.createElement('p');
        date.setAttribute('style', 'color:gray;margin-bottom:0%')
        let writedate = document.createTextNode(reviewsData[i].date);
        date.appendChild(writedate);
        maindivstar.appendChild(date);

        let intro = document.createElement('p');
        intro.setAttribute('style', 'margin-left:10px;color:white');
        let giveintro = document.createTextNode(reviewsData[i].review);
        intro.appendChild(giveintro);

        maindivsecondchild.appendChild(maindivstar);
        maindiv.appendChild(maindivsecondchild);
        maindivsec.appendChild(intro);
    }
    document.getElementById('productreviews').style.display = 'none';
}

function show() {
    let carousel = document.getElementsByClassName('carousel slide');
    carousel[0].style.display = 'block';
    carousel[1].style.display = 'block';
    document.getElementById('top-product').style.display = 'block';
    document.getElementById('emptyCart').style.display = 'none';
    document.getElementById('hello1').style.display = 'none';
    let list = document.getElementById('div-sec');
    while (list.children.length > 0) {
        list.removeChild(list.lastChild);
    }
    browseAllProduct = true;
    document.getElementById('unOrderedsecondlist').style.display = 'none';
    // document.getElementById('unOrdered').style.display = 'block';
    display(productsData)
}
function search() {
    document.getElementById('search1').style.display = 'block';
    document.getElementById('search1').style.color = 'white';
    document.getElementById('cross-icon').style.display = 'block';
    document.getElementById('hoverPart').style.display = 'none';
    document.getElementById('emptyCart').style.display = 'none';
    document.getElementById('searchList').style.display = 'block';
    const listParent = document.getElementById('searchList');
    while (listParent.children.length > 0) {
        listParent.removeChild(listParent.lastChild);
    }
    show();
}
function emptyPage() {
    let carousel = document.getElementsByClassName('carousel slide');
    carousel[0].style.display = 'none';
    carousel[1].style.display = 'none';
    document.getElementById('top-product').style.display = 'none';
    document.getElementById('emptyCart').style.display = 'block';
    document.getElementById('hoverPart').style.display = 'none';
    document.getElementById('search1').style.display = 'none';
    document.getElementById('cross-icon').style.display = 'none';
    document.getElementById('div-sec').style.display = 'none';
    document.getElementById('searchList').style.display = 'none';
}
function startShopping() {
    document.getElementById('emptyCart').style.display = 'none';
    let carousel = document.getElementsByClassName('carousel slide');
    carousel[0].style.display = 'block';
    carousel[1].style.display = 'block';
    document.getElementById('top-product').style.display = 'block';
}
function hover() {
    document.getElementById('hoverPart').style.display = 'block';
    document.getElementById('emptyCart').style.display = 'none';
    document.getElementById('search1').style.display = 'none';
    document.getElementById('cross-icon').style.display = 'none';
    document.getElementById('searchList').style.display = 'none';
    show();
}
function loginForm() {
    document.getElementById('loginP').showModal();
    document.getElementById('hoverPart').style.display = 'none';
    document.getElementById('signup').close();
}
function signUp() {
    document.getElementById('loginP').close();
    document.getElementById('signup').showModal();
}
function closeLogin() {
    document.getElementById('loginP').close();
    document.getElementById('signup').close();
}
addEventListener('dblclick', () => {
    document.getElementById('search1').style.display = 'none';
    document.getElementById('cross-icon').style.display = 'none';
    document.getElementById('hoverPart').style.display = 'none'
})
let icon = document.getElementById('scrollIcon');
icon.addEventListener('click', function () {
    const header = document.querySelector('header');
    const headerOffset = header.offsetTop;
    window.scrollTo({
        top: headerOffset,
        behavior: 'smooth'
    });
});

// Search list part
let searchinput1 = document.getElementById('search1');
let searchinputlist = document.getElementById('searchList');
searchinput1.addEventListener('input', function () {

    while (searchinputlist.children.length > 0) {
        searchinputlist.removeChild(searchinputlist.lastChild);
    }

    if (searchinput1.value.length > 0) {
        let filteredList = productsData.filter(arr => arr.title.includes(searchinput1.value))
        for (let x = 0; x < filteredList.length; x++) {
            let listItem = document.createElement('li');
            listItem.setAttribute('id', 'searchlistitems');
            listItem.setAttribute('style', 'background-color:gray;margin-bottom:2px;list-style-type:none;padding-left:20px;color:white;cursor:pointer');
            let listitem1 = document.createTextNode(filteredList[x].title);
            listItem.appendChild(listitem1);
            searchinputlist.appendChild(listItem);
            listItem.setAttribute('onclick', "removeSearchList('" + filteredList[x].id + "')")
        }
    }
})

window.addEventListener('scroll', function () {
    document.getElementById('searchList').style.display = 'none';
    document.getElementById('search1').value = '';
    document.getElementById('search1').style.display = 'none';
    document.getElementById('cross-icon').style.display = 'none';
})
function removeSearchList(filterid) {
    document.getElementById('searchList').style.display = 'none';
    document.getElementById('search1').value = '';
    document.getElementById('search1').style.display = 'none';
    document.getElementById('cross-icon').style.display = 'none';
    detail(filterid);
}
function feature() {
    let item = productsData.filter(arr => arr.tag == "featured-product");
    let parent = document.getElementById('3listitem');
    while (parent.children.length > 0) {
        parent.removeChild(parent.lastChild);
    }
    for (let i = 0; i < item.length; i++) {
        createListItem(item[i], parent);
    }
    document.getElementById('filterbtn').style.display = 'block';
}

function toprate() {
    let item = productsData.sort((a, b) => b.rateCount - a.rateCount);
    let parent = document.getElementById('3listitem');
    while (parent.children.length > 0) {
        parent.removeChild(parent.lastChild);
    }
    for (let i = 0; i < item.length; i++) {
        createListItem(item[i], parent);
    }
    document.getElementById('filterbtn').style.display = 'block';
}
function lowestprice() {
    //creating copy of array and then sorting it.
    let item = productsData.slice(0).sort((a, b) => a.finalPrice - b.finalPrice);
    console.log(item);
    let parent = document.getElementById('3listitem');
    while (parent.children.length > 0) {
        parent.removeChild(parent.lastChild);
    }
    for (let i = 0; i < item.length; i++) {
        createListItem(item[i], parent);
    }
    document.getElementById('filterbtn').style.display = 'block';
}
function highestprice() {
    //creating copy of array and then sorting it.
    let item = productsData.slice(0).sort((a, b) => b.finalPrice - a.finalPrice);
    console.log(item);
    let parent = document.getElementById('3listitem');
    while (parent.children.length > 0) {
        parent.removeChild(parent.lastChild);
    }
    for (let i = 0; i < item.length; i++) {
        createListItem(item[i], parent);
    }
    document.getElementById('filterbtn').style.display = 'block';
}

function jbl() {
    let jbl = document.getElementById('1').checked
    let boat = document.getElementById('2').checked
    let sony = document.getElementById('3').checked

    let item = productsData
    if (jbl || boat || sony) {
        item = productsData.filter(item => (jbl && item.brand.toUpperCase() == "JBL")
            || (boat && item.brand.toUpperCase() == "BOAT")
            || (sony && item.brand.toUpperCase() == "SONY"));
    }

    let headphone = document.getElementById('4').checked
    let earbud = document.getElementById('5').checked
    let earphone = document.getElementById('6').checked
    let band = document.getElementById('7').checked

    if (headphone || earbud || earphone || band) {
        item = item.filter(item => (headphone && item.category == "Headphones")
            || (earbud && item.category == "Earbuds")
            || (earphone && item.category == "Earphones")
            || (band && item.category == "Neckbands")
        );
    }
    let parent = document.getElementById('3listitem');
    while (parent.children.length > 0) {
        parent.removeChild(parent.lastChild);
    }
    for (let i = 0; i < item.length; i++) {
        createListItem(item[i], parent);
    }
    document.getElementById('filterbtn').style.display = 'block';
}

function removeAllFilters() {
    let parent = document.getElementById('3listitem');
    while (parent.children.length > 0) {
        parent.removeChild(parent.lastChild);
    }
    for (let i = 0; i < productsData.length; i++) {
        createListItem(productsData[i], parent);
    }
    document.getElementById('filterbtn').style.display = 'none';
}
const media = () => {
    let width = window.innerWidth;
    // search part
    if (width <= 1000) {
        document.getElementById('search1').style.width = '20%';
        document.getElementById('search1').style.marginLeft = '50%';
        document.getElementById('searchList').style.width = '30%';
        document.getElementById('searchList').style.marginLeft = '15%';
        document.getElementById('searchList').style.fontSize = '15px';
    } else {
        document.getElementById('search1').style.width = '45%';
        document.getElementById('search1').style.marginLeft = '30%';
        document.getElementById('searchList').style.width = '585px';
        document.getElementById('searchList').style.marginLeft = '0px';
        document.getElementById('searchList').style.fontSize = '20px';
    }
    // empty Cart
    if (width <= 700) {
        document.getElementById('emptyCart').style.marginTop = '10%';
    } else {
        document.getElementById('emptyCart').style.marginTop = '0%';
    }
    //signUp
    if (width <= 600) {
        document.getElementById('signup').style.paddingTop = '0px';
        document.getElementById('signupicon').style.transform = 'translate(295px,0px)';
    } else {
        document.getElementById('signup').style.padding = '10px 45px';
        document.getElementById('signupicon').style.transform = 'translate(327px,-10px)';
    }
    //Login Part
    if (width <= 600) {
        document.getElementById('loginP').style.paddingTop = '0px';
        document.getElementById('loginPicon').style.transform = 'translate(320px,0px)';
    } else {
        document.getElementById('loginP').style.padding = '40px';
        document.getElementById('loginPicon').style.transform = 'translate(345px,-40px)';
    }
    // hover part
    if (width <= 820) {
        document.getElementById('hoverPart').style.margin = '12px 10px 0px 60%';
        document.getElementById('hoverPart').style.padding = '5px 5px 0px 5px';
    } else {
        document.getElementById('hoverPart').style.margin = '12px 10px 0px 75%';
        document.getElementById('hoverPart').style.padding = '20px 20px 0px 20px';
    }
    // Carousal Part
    if (width <= 800) {
        document.getElementById('carousel-inner-div1').style.marginBottom = '20px';
        document.getElementById('carousel-inner-div2').style.paddingLeft = '0%';
        document.getElementById('carousel-item-div1').style.marginBottom = '20px';
        document.getElementById('carousel-item-div2').style.paddingLeft = '0%';
        document.getElementById('carousel-item1-div1').style.marginBottom = '20px';
        document.getElementById('carousel-item1-div2').style.paddingLeft = '0%';
    } else {
        document.getElementById('carousel-inner-div1').style.gridTemplateColumns = '40% 60%';
        document.getElementById('carousel-inner-div1').style.marginBottom = '0px';
        document.getElementById('carousel-inner-div2').style.paddingLeft = '100px';
        document.getElementById('carousel-item-div1').style.gridTemplateColumns = '40% 60%';
        document.getElementById('carousel-item-div1').style.marginBottom = '0px';
        document.getElementById('carousel-item-div2').style.paddingLeft = '100px';
        document.getElementById('carousel-item1-div1').style.gridTemplateColumns = '40% 60%';
        document.getElementById('carousel-item1-div1').style.marginBottom = '0px';
        document.getElementById('carousel-item1-div2').style.paddingLeft = '100px';
    }
    // featuredProduct
    if (width > 600 && width <= 1300) {
        document.getElementById('featuredProduct').style.display = 'grid';
        document.getElementById('featuredProduct').style.gridTemplateColumns = '45% 45%';
        document.getElementById('featuredProduct').style.paddingLeft = '0%';
        document.getElementById('featuredProduct').style.marginTop = '50px';
        document.getElementById('featuredProduct').style.justifyContent = 'space-evenly';
    } else if (width <= 600) {
        document.getElementById('featuredProduct').style.display = 'grid';
        document.getElementById('featuredProduct').style.paddingLeft = '0%';
        document.getElementById('featuredProduct').style.marginRight = '20px';
        document.getElementById('featuredProduct').style.textAlign = 'center';
    } else {
        document.getElementById('featuredProduct').style.display = 'grid';
        document.getElementById('featuredProduct').style.gridTemplateColumns = '18% 18% 18% 18% 18%';
        document.getElementById('featuredProduct').style.paddingLeft = '0%';
        document.getElementById('featuredProduct').style.marginTop = '50px';
        document.getElementById('featuredProduct').style.justifyContent = 'center';
    }
    // Top product
    if (width <= 600) {
        document.getElementById('top-product-div1').style.display = 'grid';
        document.getElementById('top-product-div1').style.gridTemplateColumns = '45% 45%';
    } else {
        document.getElementById('top-product-div1').style.display = 'grid';
        document.getElementById('top-product-div1').style.gridTemplateColumns = '17% 17% 17% 17% 17%';
        document.getElementById('top-product-div1').style.justifyContent = 'space-evenly';
    }
    // listItems
    if (width > 680 && width <= 1300) {
        document.getElementById('unOrdered').style.gridTemplateColumns = '45% 45%';
        document.getElementById('unOrdered').style.justifyContent = 'space-evenly';
    } else if (width <= 680) {
        document.getElementById('unOrdered').style.display = 'grid';
    } else {
        document.getElementById('unOrdered').style.gridTemplateColumns = '23% 23% 23% 23%';
        document.getElementById('unOrdered').style.justifyContent = 'space-evenly';
    }

    // Advantage
    if (width > 600 && width <= 1300) {
        document.getElementById('advantage-div1').style.gridTemplateColumns = '45% 45%';
        document.getElementById('advantage-div1').style.justifyContent = 'space-evenly';
    } else if (width <= 600) {
        document.getElementById('advantage-div1').style.display = 'grid';
        document.getElementById('advantage-div1').style.marginRight = '20px';
    } else {
        document.getElementById('advantage-div1').style.gridTemplateColumns = '23% 23% 23% 23%';
        document.getElementById('advantage-div1').style.justifyContent = 'space-evenly';
    }
    // Footer
    if (width > 500 && width <= 1000) {
        document.getElementById('footer-div1').style.gridTemplateColumns = '45% 45%';
        document.getElementById('footer-div1').style.justifyContent = 'space-evenly';
    } else if (width <= 500) {
        document.getElementById('footer-div1').style.display = 'grid';
        document.getElementById('footer-div1').style.marginRight = '20px';
    } else {
        document.getElementById('footer-div1').style.gridTemplateColumns = '23% 23% 23% 23%';
        document.getElementById('footer-div1').style.justifyContent = 'space-evenly';
    }
}
onresize = media;
onload = media;
