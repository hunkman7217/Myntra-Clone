
DisplayitemsOnhomePage();

let bagitems =[];

let bagitemstr = localStorage.getItem('bagitems');
bagitems = bagitemstr ? JSON.parse(bagitemstr):[];


function ADDTOBAG(itemId){
bagitems.push(itemId);
BagitemIcon();
localStorage.setItem('bagitems', JSON.stringify(bagitems));
}

function BagitemIcon (){

  let bagitemEelement = document.querySelector(".bag-item-count");

  if(bagitems.length > 0){
    bagitemEelement.style.visibility = 'visible';
bagitemEelement.innerText = bagitems.length;
}else{
bagitemEelement.style.visibility = 'hidden';
}

}


function DisplayitemsOnhomePage() {
  let productList = document.getElementById("product-list");
  let innerHTML = "";

  items.forEach((item) => {
    innerHTML += `
      <div class="w-[200px] flex flex-col p-4 bg-white rounded shadow-md border box-border">
       <a href="myntra.com"><img src="${item.item_image}" alt="product image" class="w-full h-[auto] object-cover mb-2" /></a>
        <div class="text-xs font-bold">${item.rating.stars}⭐ | ${item.rating.noOfReviews}</div>
        <div class="font-semibold text-base mt-2 truncate">${item.company_name}</div>
        <div class="text-sm text-gray-600 truncate">${item.product_name}</div>
        <div class="flex items-center gap-2 mt-1 text-sm">
          <span class="font-bold">Rs ${item.current_price}</span>
          <span class="line-through text-gray-400 text-xs">Rs ${item.original_price}</span>
          <span class="text-orange-500 text-xs">(${item.discount}% OFF)</span>
        </div>
        <button onclick="ADDTOBAG('${item.id}')" class="bg-green-600 text-white text-sm mt-2 py-1 rounded-full w-full">
  ADD TO BAG
</button>

      </div>
    `;
  });

  productList.innerHTML = innerHTML;
}


