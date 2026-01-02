

var container=document.createElement("div");
container.setAttribute("id","container");
var res = fetch("https://fakestoreapi.com/products/");
res.then((data) => data.json()).then((data1) => 
    {console.log(data1);
        for(let i=0;i<=19;i++){
            var star=document.getElementById("starry");
            // creating elements 

            
            var card=document.createElement("div");
            var image=document.createElement("img");
             var title=document.createElement("h4");
            var description=document.createElement("p");
            var flexing=document.createElement("div");
            var price=document.createElement("p");
            var rating=document.createElement("div");
            var rate=document.createElement("p");
            var count=document.createElement("p");
           

            // adding id attributes to each element 

            card.setAttribute("id","card");
            image.setAttribute("id","image");
            title.setAttribute("id","title");
            description.setAttribute("id","description");
            price.setAttribute("id","price");
            rate.setAttribute("id","rate");
            count.setAttribute("id","count");
            flexing.setAttribute("id","flexing");
            rating.setAttribute("id","rating");

            // adding data from api 
            var url=data1[i].image;
            image.setAttribute("src",url);
            title.innerText=data1[i].title;
            description.innerText=data1[i].description;
            price.innerText="$"+(data1[i].price);
            rate.innerHTML='<i class="fa-solid fa-star" id="starry"></i>'+data1[i].rating.rate;
            // rate.innerText=;
            
            count.innerText="Count:"+(data1[i].rating.count);

            // adding data entried divs into body 

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(description);
            flexing.appendChild(price);
            rating.appendChild(rate);
            rating.appendChild(count);
            flexing.appendChild(rating);
            card.appendChild(flexing);
            container.appendChild(card);
            
        }
    });

document.body.append(container);
// Task: Print the Title of all Products.
// btn.onClick(setTimeout(print,5000));
// function print(){

//     var para=document.createElement("p");
//     heading.innerText="Download complete";
//     document.body.append(heading);
// }
