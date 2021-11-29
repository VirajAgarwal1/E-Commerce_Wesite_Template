ItemsInStore = {
    shoes : {
        quantity_available : 30,
        header : 'Nike Shoes',
        price : 224.97,
        subHeader : 'Brand Name',
        body : 'These shoes were made by me just kidding they are made by my hands so please buy them.',
        images : [
            'IMAGES/shoes1.jpg',
            'IMAGES/shoes2.jpg',
        ],
        type : 'shoes'
    },

    pants : {
        quantity_available : 1,
        header : 'Linux Pants Limited Edition sdghf dsaf ghf dsa fgh',
        price : 1799998.56,
        subHeader : 'Brand Name',
        body : 'These pants were made by me just kidding they are made by my hands so please buy them. And they are very cheap!',
        images : [
            'IMAGES/pants1.jpg',
            'IMAGES/pants2.jpg',
            'IMAGES/pants4.jpg'
        ],
        type : 'pants'
    },

    shirts : {
        quantity_available : 120,
        header : 'Linux Shirt',
        price : 476.45,
        subHeader : 'Brand Name',
        body : 'These shirts were made by me just kidding they are made by my hands so please buy them.',
        images : [
            'IMAGES/shirts2.jpg',
            'IMAGES/shirts3.jpg',
            'IMAGES/shirts2.jpg',
            'IMAGES/shirts3.jpg',
            'IMAGES/shirts2.jpg',
            'IMAGES/shirts3.jpg',
            'IMAGES/shirts2.jpg',
            'IMAGES/shirts3.jpg',
            'IMAGES/shirts2.jpg',
            'IMAGES/shirts3.jpg',
            'IMAGES/shirts2.jpg',
            'IMAGES/shirts3.jpg'
        ],
        type : 'shirts'
    },

    socks : {
        quantity_available : 100,
        header : 'Linux Socks',
        price : 133.32,
        subHeader : 'Brand Name',
        body : 'These socks were made by me just kidding they are made by my hands so please buy them.',
        images : [
            'IMAGES/socks1.jpg',
            'IMAGES/socks2.jpg',
            'IMAGES/socks3.jpg',
            'IMAGES/socks4.jpg'
        ],
        type : 'socks'
    }
};
ItemsInCart = {}




// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// ************************************PRODUCTS CARDS SECTION****************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************



//Selecting the products div where all the products pages will be shown
var products_inside_html = document.getElementById('products');

function Make_Products() {
    products_inside_html.innerHTML = '';

    //This next for loop is just me making the layout of the html inside the products div for every product
    for (const [key, value] of Object.entries(ItemsInStore)) {
    
        let mainContainer = document.createElement('div');
        mainContainer.classList.add('mainContainer');
        products_inside_html.appendChild(mainContainer);
    
    //Images container here the slidshows and the images are shown here....
        let images_container = document.createElement('div');
        images_container.classList.add('images_container');
        mainContainer.appendChild(images_container);
    
        let image_shown = new Image();
        //Main image will be shown here..
        image_shown.classList.add('image_shown');
        image_shown.src = ItemsInStore[key]['images'][0];
        images_container.appendChild(image_shown);
    
        let next_Btn = new Image();
        next_Btn.classList.add('next_Btn_div_prod_card');
        next_Btn.src = 'images/icon-next.svg';
        images_container.appendChild(next_Btn);


        let index_now = 0;
        next_Btn.addEventListener('click',()=>{
            if (index_now == ItemsInStore[key]['images'].length - 1) {
                index_now = 0;
            }else {
                index_now += 1;
            }
            image_shown.src = ItemsInStore[key]['images'][index_now];
        });
    
        let prev_Btn = new Image();
        prev_Btn.classList.add('prev_Btn_div_prod_card');
        prev_Btn.src = 'images/icon-previous.svg';
        images_container.appendChild(prev_Btn);
       
        prev_Btn.addEventListener('click',()=>{
            if (index_now == 0) {
                index_now = ItemsInStore[key]['images'].length - 1;
            }else {
                index_now -= 1;
            }
            image_shown.src = ItemsInStore[key]['images'][index_now];
        });
    
        image_shown.addEventListener('click',()=>{
            Make_Img_Slider(ItemsInStore[key]['images'])
        })
    
    
    
        let image_slider = document.createElement('div');
        //Images slider is here....Very basic slider....
        image_slider.classList.add('image_slider');
        // image_slider.style.gridTemplateColumns = '0.5em'*ItemsInStore[key]['images'].length;
        images_container.appendChild(image_slider);
        //All the images in the images of the product
        for (let i = 0; i < ItemsInStore[key]['images'].length; i++) {
            let product_multiple_images = new Image();
            product_multiple_images.classList.add('product_multiple_images');
            product_multiple_images.src = ItemsInStore[key]['images'][i];
            product_multiple_images.draggable = false;
            product_multiple_images.addEventListener('click',()=>{
                image_shown.src = ItemsInStore[key]['images'][i];
            })
    
            image_slider.appendChild(product_multiple_images);
        }
    
        let container = document.createElement('div');
        container.classList.add('container');
    
        let subHeader = document.createElement('div');
        subHeader.classList.add('subHeader');
        container.appendChild(subHeader);
        subHeader.innerText = ItemsInStore[key]['subHeader'];
    
        let header = document.createElement('div');
        header.classList.add('header');
        container.appendChild(header);
        header.innerText = ItemsInStore[key]['header'];
    
        let body = document.createElement('div');
        body.classList.add('product_body');
        container.appendChild(body);
        body.innerText = ItemsInStore[key]['body'];
    
        let price = document.createElement('div');
        price.classList.add('prices');
        container.appendChild(price);
        price.innerText = '$' + ItemsInStore[key]['price'];
    
    
        //Container to put minus_number_plus_cont and add_to_cart_parentDiv so as to place them in flex.....
        let second_last_line = document.createElement('div');
        second_last_line.classList.add('second_last_line');
        container.appendChild(second_last_line);
    
            //Container for the plus minus and number of items divs and spans.....
            let minus_number_plus_cont = document.createElement('span');
            second_last_line.appendChild(minus_number_plus_cont);
            minus_number_plus_cont.classList.add('minus_plus_es');
    
                //This is the overlay which will be active when the item is already in cart...
                let overlay_minus_plus = document.createElement('div');
                // overlay_minus_plus.classList.add('overlay');
                minus_number_plus_cont.appendChild(overlay_minus_plus);
    
    
                //Here I added the - button to change th Quantity
                let btn_minus = document.createElement("button");
                btn_minus.classList.add('btn_minus');
                // btn_minus.innerHTML = '<svg width="12" height="6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/></svg>';
                btn_minus.addEventListener('click',subtract_number_of_items);
                minus_number_plus_cont.appendChild(btn_minus);
                //Making the function of subtracting number from number_of_items.innerHTML inside each products card
                function subtract_number_of_items() {
                    if (number_of_items.innerHTML > 0){
                        number_of_items.innerHTML = number_of_items.innerHTML - 1;
                    }
                }
    
                //This piece of code shows the number items you either alreday have in your cart or shows 0
                let number_of_items = document.createElement('span');
                number_of_items.classList.add('number_of_items');
                minus_number_plus_cont.appendChild(number_of_items);
                number_of_items.innerHTML = '0';
                
                //Here I added the + button to change the Quantity
                let btn_plus = document.createElement("button");
                btn_plus.classList.add('btn_plus');
                // btn_plus.innerHTML = '<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/></svg>';
                btn_plus.addEventListener('click',add_number_of_items);
                minus_number_plus_cont.appendChild(btn_plus);
                //Making the function of subtracting number from number_of_items.innerHTML inside each products card
                function add_number_of_items() {
                    if (number_of_items.innerHTML >= 0 && number_of_items.innerHTML < ItemsInStore[key]['quantity_available']){
                        number_of_items.innerHTML = Number(number_of_items.innerHTML) + 1;
                    }
                    if (number_of_items.innerHTML == ItemsInStore[key]['quantity_available']) {
                        if (ItemsInStore[key]['quantity_available'] == 0) {
                            alert(ItemsInStore[key]['header'] + ' is sold out');
                        }else{
                            alert('We only have '+ItemsInStore[key]['quantity_available']+' quantity available for '+ItemsInStore[key]['header'])
                        }
                    }
                }
    
    
            //Parent div for add to cart button so as to place it in flex with number of items div....
            let add_to_cart_parentDiv = document.createElement('span');
            second_last_line.appendChild(add_to_cart_parentDiv);
            add_to_cart_parentDiv.classList.add('add_to_cart_parentDiv');
            add_to_cart_parentDiv.addEventListener('click', add_Item);
    
    
                //Here I am adding the shopping cart image...
                let shopping_cart_img = new Image();
                shopping_cart_img.classList.add('shopping_cart_img');
                shopping_cart_img.src = 'images/icon-cart2.png';
                add_to_cart_parentDiv.appendChild(shopping_cart_img);
    
                //Here I am adding the add to cart button on each product card
                    let btn = document.createElement("span");
                    btn.classList.add('add_to_cart_btn');
                    btn.innerHTML = "Add to Cart";
                    add_to_cart_parentDiv.appendChild(btn);
    
                //Here I am setting what this button will do...
                    function add_Item() {
                        if (key in ItemsInCart){
                            ItemsInCart[key]['quantity_taken'] = ItemsInCart[key]['quantity_taken'] + Number(number_of_items.innerHTML);
                            ItemsInStore[key]['quantity_available'] = ItemsInStore[key]['quantity_available'] - ItemsInCart[key]['quantity_taken'];
                            number_of_items.innerHTML = '0';
                        }else {
                            if (Number(number_of_items.innerHTML) > 0) {
                                ItemsInCart[key] = {quantity_taken : Number(number_of_items.innerHTML)};
                                number_of_items.innerHTML = '0';
                                ItemsInStore[key]['quantity_available'] = ItemsInStore[key]['quantity_available'] - ItemsInCart[key]['quantity_taken'];
                            }
                        }
                        
                    }
    
    
            //Parent div for add to cart button so as to place it in flex with number of items div....
            let go_to_cart_parentDiv = document.createElement('span');
            second_last_line.appendChild(go_to_cart_parentDiv);
            go_to_cart_parentDiv.classList.add('add_to_cart_parentDiv');
            go_to_cart_parentDiv.addEventListener('click', go_to_cart);
    
    
                //Here I am adding the shopping cart image...
                let shopping_cart_img2 = new Image();
                shopping_cart_img2.classList.add('shopping_cart_img');
                shopping_cart_img2.src = 'images/icon-cart2.png';
                go_to_cart_parentDiv.appendChild(shopping_cart_img2);
    
                //Here I am adding the add to cart button on each product card
                    let btn2 = document.createElement("span");
                    btn2.classList.add('add_to_cart_btn');
                    btn2.innerHTML = "Go to Cart";
                    go_to_cart_parentDiv.appendChild(btn2);
    
                //Here I am setting what this button will do...
                    function go_to_cart() {
                        menuPop_or_unPop(); 
                    }
    
    
    
        let sold_out = document.createElement('div');
        sold_out.classList.add('sold_out');
        sold_out.classList.add('hidden');
        sold_out.innerHTML = 'Item is out of stock';
        container.appendChild(sold_out);
    
    
    //Here i am setting up a method which will enable us to see if item in cart then show go to cart and if not then show Add to carrt also this function right here makes the plus minus 
        window.setInterval(()=>{

            //Sold out or not...
            if (ItemsInStore[key]['quantity_available'] == 0){
                sold_out.classList.remove('hidden');
                overlay_minus_plus.classList.add('overlay');
                add_to_cart_parentDiv.style.display = 'none';
                go_to_cart_parentDiv.style.display = 'flex';
            }else {
                sold_out.classList.add('hidden');

                if (key in ItemsInCart) {
                    console.log(key + ' is in the cart now...');
                    overlay_minus_plus.classList.add('overlay');
                    add_to_cart_parentDiv.style.display = 'none';
                    go_to_cart_parentDiv.style.display = 'flex';
        
                }else{
                    overlay_minus_plus.classList.remove('overlay');
                    add_to_cart_parentDiv.style.display = 'flex';
                    go_to_cart_parentDiv.style.display = 'none';
                }            
            }
        },100);
    
    
    //Now that the container class div is prepared for this product I am now adding this div to the main #products div
        mainContainer.appendChild(container);
    };
}

Make_Products();




// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// ************************************MENU BUTTON SECTION*******************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************

//Making menu options show only items that are in cart.
var menu_div = document.getElementById('menu');

function menuPop_or_unPop() {

    menu_div.innerHTML = '';

    let cartText = document.createElement('div');
    cartText.classList.add('cartText');
    menu_div.appendChild(cartText);

        let actual_cart_text = document.createElement('div');
        actual_cart_text.innerText = 'Cart';
        cartText.appendChild(actual_cart_text);

        let cross_btn = document.createElement('div');
        cross_btn.innerHTML = '<svg width="14" height="15" fill="#69707D" fill-rule="evenodd" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" /></svg>';
        cross_btn.classList.add('cross_btn_menu');
        cross_btn.addEventListener('click',()=>{
            menu_div.classList.add('hidden');
        })
        cartText.appendChild(cross_btn);

    let all_products_in_cart_menu = document.createElement('div');
    all_products_in_cart_menu.classList.add('all_products_in_cart_menu');
    menu_div.appendChild(all_products_in_cart_menu);
    
    for (const [key,value] of Object.entries(ItemsInCart)) {
    
        let container = document.createElement('div');
        all_products_in_cart_menu.appendChild(container);
        container.classList.add('containerMenu');

            let product_Cart_Menu_Image_div = document.createElement('div');
            product_Cart_Menu_Image_div.classList.add('product_Cart_Menu_Image_div');
            container.appendChild(product_Cart_Menu_Image_div);
    
                let product_Cart_Menu_Image = new Image();
                product_Cart_Menu_Image.classList.add('product_Cart_Menu_Image');
                product_Cart_Menu_Image.src = ItemsInStore[key]['images'][0];
                product_Cart_Menu_Image_div.appendChild(product_Cart_Menu_Image);
    
            let body = document.createElement('div');
            body.classList.add('bodyMenu');
            container.appendChild(body);
    
                let bodyText = document.createElement('span');
                bodyText.classList.add('bodyTextMenu');
                body.appendChild(bodyText);
    
                    //Function to make header fit into the small space of menu....
                    if (ItemsInStore[key]['header'].length > 28) {
                        var menuHeader = ItemsInStore[key]['header'].substring(0,28) + '...';
    
                        let header = document.createElement('div');
                        header.classList.add('headerMenu');
                        bodyText.appendChild(header);
                        header.innerText = menuHeader;
    
                    }else {
    
                        let header = document.createElement('div');
                        header.classList.add('headerMenu');
                        bodyText.appendChild(header);
                        header.innerText = ItemsInStore[key]['header'];
                    }
    
                    let totalPrice = ItemsInStore[key]['price'] * ItemsInCart[key]['quantity_taken'];
    
                    let bodyTextContent = document.createElement('div');
                    bodyTextContent.classList.add('bodyTextContentMenu');
                    bodyText.appendChild(bodyTextContent);
                    bodyTextContent.innerHTML = '$'+ItemsInStore[key]['price'] + ' x' + ItemsInCart[key]['quantity_taken'] + " = <strong>$" + totalPrice + '</strong>';
        
    
                let del_icon = document.createElement('span');
                body.appendChild(del_icon);
                del_icon.innerHTML = '<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  fill="#C3CAD9" fill-rule="nonzero"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use xlink:href="#a"/></svg>';
    
                del_icon.addEventListener('click', ()=>{
                    ItemsInStore[key]['quantity_available'] =  ItemsInStore[key]['quantity_available'] + ItemsInCart[key]['quantity_taken'];
                    delete ItemsInCart[key];
                    // all_products_in_cart_menu.removeChild(container);
                    // if (Object.keys(ItemsInCart).length == 0) {
    
                    //     let no_item_disp = document.createElement('div');
                    //     no_item_disp.innerHTML = 'Your cart is empty';
                    //     no_item_disp.classList.add('no_item_disp');
                    //     all_products_in_cart_menu.appendChild(no_item_disp);
                    // }
                    menuPop_or_unPop();
                    menu_div.classList.remove('hidden');
                }); 
    
    }
    
    if (Object.keys(ItemsInCart).length == 0) {
    
        let no_item_disp = document.createElement('div');
        no_item_disp.innerHTML = 'Your cart is empty';
        no_item_disp.classList.add('no_item_disp');
        menu_div.appendChild(no_item_disp);
    
    }else{
    
        let checkOutBtn = document.createElement('div');
        checkOutBtn.classList.add('checkOutBtn');
        menu_div.appendChild(checkOutBtn);
        checkOutBtn.innerText = 'Checkout';
    }


    if (menu_div.classList.contains('hidden')) {
        menu_div.classList.remove('hidden');
    }else {
        menu_div.classList.add('hidden');
    }
    document.addEventListener("mouseup", (event)=>{
        var obj = menu_div;
        if (!obj.contains(event.target)) {
            menu_div.classList.add('hidden');
        }
    })

}


// **************************************************************************************************
// **********The number of items in cart is shown here [On the cart icon in the NAVBAR]**************
// **************************************************************************************************

var cart_icon_number_of_prods = document.getElementById('cart_icon_number_of_prods');
cart_icon_number_of_prods.classList.add('hidden');

window.setInterval(()=>{
    let length = Object.keys(ItemsInCart).length
    if (length == 0) {
        cart_icon_number_of_prods.classList.add('hidden');
    }else{
        cart_icon_number_of_prods.classList.remove('hidden');
        cart_icon_number_of_prods.innerHTML = length;
    }
},100)


// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// ************************************IMAGE SLIDER SECTION******************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************


//The conatiner level -1 which contains the image slider...
var images_container_Lv_minus1 = document.getElementById('container_Lv_minus1');
//The conatiner level 0 which contains the image slider...
var images_container_Lv0 = document.getElementById('container_Lv0');


function Make_Img_Slider(array_of_images) {

    let images_container_Lv1 = document.createElement('div');
    images_container_Lv1.id = 'container_Lv1';
    images_container_Lv0.appendChild(images_container_Lv1);

    let next_Btn = document.createElement('div');
    next_Btn.id = 'next_Btn_div';
    next_Btn.innerHTML = '<svg id="next_Btn" stroke="#1D2026" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>';
    images_container_Lv0.appendChild(next_Btn);

    let prev_Btn = document.createElement('div');
    prev_Btn.id = 'prev_Btn_div';
    prev_Btn.innerHTML = '<svg id="prev_Btn" stroke="#1D2026" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>';
    images_container_Lv0.appendChild(prev_Btn);

    let radio_Btns_container = document.createElement('div');
    radio_Btns_container.id = 'radio_Btns_container';
    images_container_Lv0.appendChild(radio_Btns_container);




    let images_array = array_of_images;

    images_container_Lv0.classList.remove('hidden');
    images_container_Lv_minus1.classList.remove('hidden');

    //Counter to make the image slider move... Starts at 1 so that the first image shown is not the clone one...
    let counter = 1; 


    //Placing the last image's clone at starting to smoothen out the transition....
    let container_Lv2 = document.createElement('div');
    container_Lv2.classList.add('container_Lv2');
    images_container_Lv1.appendChild(container_Lv2);
    let image_temp = new Image();
    image_temp.src = images_array[images_array.length-1];
    container_Lv2.appendChild(image_temp);
    //Placing all the other images...
    for (let i = 0; i < images_array.length; i++) {

        let image_temp = new Image();
        image_temp.src = images_array[i];
        let container_Lv2 = document.createElement('div');
        container_Lv2.classList.add('container_Lv2');
        images_container_Lv1.appendChild(container_Lv2);
        container_Lv2.appendChild(image_temp);
    }
    //Placing the first image's clone at last to smoothen out the transition....
    let container_Lv2_2 = document.createElement('div');
    container_Lv2_2.classList.add('container_Lv2');
    images_container_Lv1.appendChild(container_Lv2_2);
    let image_temp2 = new Image();
    image_temp2.src = images_array[0];
    container_Lv2_2.appendChild(image_temp2);



    //Making radio buttons numbers and styling
    radio_Btns_container.classList.add('invisible');
    for (let i = 0; i < images_array.length; i++) {
        
        let radio_Btn_div = document.createElement('span');
        radio_Btn_div.classList.add('radio_Btn_div');
        radio_Btn_div.innerHTML = '<svg class="radio_Btn" fill="hsl(0, 0%, 45%)" xmlns="http://www.w3.org/2000/svg" width="15" height="15" version="1.1"><circle cx="7.5" cy="7.5" r="7.5" ></circle></svg>';

        radio_Btns_container.appendChild(radio_Btn_div);
    }
    images_container_Lv1.style.transform = 'translateX(-' + (35*counter) + 'em)'
    //Slecting the radio buttons with class radio_Btn with query selector all so that I can make their color diff with indexing...
    var radio_Btn_es = document.querySelectorAll('.radio_Btn'); 
    radio_Btn_es[0].style.fill = 'tomato';




    // Making radio buttons and nex and prev show up when mouse enters the image slider and making them invisible when mouse enters...
    images_container_Lv0.addEventListener('mouseenter' , ()=>{
        radio_Btns_container.classList.remove('invisible');
        next_Btn.classList.remove('invisible');
        prev_Btn.classList.remove('invisible');
    });
    images_container_Lv0.addEventListener('mouseleave' , ()=>{
        radio_Btns_container.classList.add('invisible');
        next_Btn.classList.add('invisible');
        prev_Btn.classList.add('invisible');
    });

    //Adding eventlistener for click on all radio buttons to enable them navigate through the images...￼
    for (let i = 0; i < radio_Btn_es.length; i++) {
        radio_Btn_es[i].addEventListener('click',()=>{
            images_container_Lv1.style.transition = 'none';
            counter = i + 1;
            images_container_Lv1.style.transform = 'translateX(-' + (35*counter) + 'em)';

            for (let i = 0; i < radio_Btn_es.length; i++) {
                radio_Btn_es[i].style.fill = 'hsl(0, 0%, 45%)';
            }

            radio_Btn_es[i].style.transition = 'fill 0.4s ease-in-out';
            radio_Btn_es[i].style.fill = 'tomato';
        });
    }


    next_Btn.addEventListener('click',()=>{
        if (counter < images_array.length+1){
            images_container_Lv1.style.transition = 'transform 0.6s ease-in-out';
            counter++;
            images_container_Lv1.style.transform = 'translateX(-' + (35*counter) + 'em)';

            for (let i = 0; i < radio_Btn_es.length; i++) {
                radio_Btn_es[i].style.fill = 'hsl(0, 0%, 45%)';
            }


            if (radio_Btn_es.length == counter - 1) {
                radio_Btn_es[0].style.transition = 'fill 0.4s ease-in-out';
                radio_Btn_es[0].style.fill = 'tomato';     
            }else{
                radio_Btn_es[counter-1].style.transition = 'fill 0.4s ease-in-out';
                radio_Btn_es[counter-1].style.fill = 'tomato';
            }
        }
    })
    prev_Btn.addEventListener('click',()=>{
        if (counter > 0){
            images_container_Lv1.style.transition = 'transform 0.6s ease-in-out';
            counter--;
            images_container_Lv1.style.transform = 'translateX(-' + (35*counter) + 'em)'

            for (let i = 0; i < radio_Btn_es.length; i++) {
                radio_Btn_es[i].style.fill = 'hsl(0, 0%, 45%)';
            }

            if (counter == 0) {
                radio_Btn_es[radio_Btn_es.length-1].style.transition = 'fill 0.4s ease-in-out';
                radio_Btn_es[radio_Btn_es.length-1].style.fill = 'tomato';     
            }else{
                radio_Btn_es[counter-1].style.transition = 'fill 0.4s ease-in-out';
                radio_Btn_es[counter-1].style.fill = 'tomato';
            }
        }
    })

    next_Btn.addEventListener('mouseenter',()=>{
        var style = document.createElement('style');
        style.innerHTML = `
        #next_Btn_div svg {
            stroke: tomato;
        }
        `;
        document.head.appendChild(style);
    })
    next_Btn.addEventListener('mouseleave',()=>{
        var style = document.createElement('style');
        style.innerHTML = `
        #next_Btn_div svg {
            stroke: #1D2026;
        }
        `;
        document.head.appendChild(style);
    })

    prev_Btn.addEventListener('mouseenter',()=>{
        var style = document.createElement('style');
        style.innerHTML = `
        #prev_Btn_div svg {
            stroke: tomato;
        }
        `;
        document.head.appendChild(style);
    })
    prev_Btn.addEventListener('mouseleave',()=>{
        var style = document.createElement('style');
        style.innerHTML = `
        #prev_Btn_div svg {
            stroke: #1D2026;
        }
        `;
        document.head.appendChild(style);
    })


    images_container_Lv1.addEventListener('transitionend', ()=>{

        if (counter == images_array.length+1) {
            images_container_Lv1.style.transition = 'none';
            counter = 1;
            images_container_Lv1.style.transform = 'translateX(-' + (35*counter) + 'em)';

        }else if (counter == 0) {
            images_container_Lv1.style.transition = 'none';
            counter = images_array.length;
            images_container_Lv1.style.transform = 'translateX(-' + (35*counter) + 'em)';
        }
    });





    document.addEventListener("mouseup", function(event) {
        var obj = images_container_Lv0;
        if (!obj.contains(event.target)) {
            images_container_Lv0.classList.add('hidden');
            images_container_Lv_minus1.classList.add('hidden');
            images_container_Lv1.innerHTML = '';
            radio_Btns_container.innerHTML = '';


            // *******************************************************************************************************
            // *******************************************************************************************************
            //Removing all the event listeners... By replacing their functions by EmptyFunction() which does nothing..


            // Making radio buttons and nex and prev show up when mouse enters the image slider and making them invisible when mouse enters...
            images_container_Lv0.addEventListener('mouseenter' , EmptyFunction);
            images_container_Lv0.addEventListener('mouseleave' , EmptyFunction);

            //Adding eventlistener for click on all radio buttons to enable them navigate through the images...￼
            for (let i = 0; i < radio_Btn_es.length; i++) {
                radio_Btn_es[i].addEventListener('click',EmptyFunction);
            }


            next_Btn.addEventListener('click',EmptyFunction)
            prev_Btn.addEventListener('click',EmptyFunction)

            next_Btn.addEventListener('mouseenter',EmptyFunction)
            next_Btn.addEventListener('mouseleave',EmptyFunction)

            prev_Btn.addEventListener('mouseenter',EmptyFunction)
            prev_Btn.addEventListener('mouseleave',EmptyFunction)


            images_container_Lv1.addEventListener('transitionend', EmptyFunction);
            images_array = [];



            images_container_Lv1.remove()
            next_Btn.remove()
            prev_Btn.remove()
            radio_Btns_container.remove()

        }
    });
}


function EmptyFunction() {
    return;
}


// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **********************************TAKE INPUT AND PLACE PRODUCT************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************


var want_to_add_prod_choice_Lv_minus_1 = document.getElementById('want_to_add_prod_choice_Lv-1');
var want_to_add_prod_choice = document.getElementById('want_to_add_prod_choice');
var plus_Button_for_add_prod_choice = document.getElementById('plus_Button_for_add_prod_choice');
var add_prod_user_input_div_container_Lv_minus_1 = document.getElementById('add_prod_user_input_div_container_Lv_-1');

var cross_btn_user_input_add_prod = document.getElementById('cross_btn_user_input_add_prod');

plus_Button_for_add_prod_choice.addEventListener('click',()=>{
    want_to_add_prod_choice_Lv_minus_1.classList.add('hidden');
    add_prod_user_input_div_container_Lv_minus_1.classList.remove('hidden');
});

cross_btn_user_input_add_prod.addEventListener('click',()=>{
    want_to_add_prod_choice_Lv_minus_1.classList.remove('hidden');
    add_prod_user_input_div_container_Lv_minus_1.classList.add('hidden');
    tag_product_input.value = '';
    body_product_input.value = '';
    price_product_input.value = '';
    header_product_input.value = '';
    subHeader_product_input.value = '';
    quantity_available_product_input.value = '';
    images_product_input.value = '';
    choosen_images_user_input.innerHTML = 'No Images Chosen';
});

// **************************************************************************************************
// **************************************************************************************************
//***********************************Actuall Input place**********************************************
// **************************************************************************************************
// **************************************************************************************************

var input_products =  document.getElementById('input_products');

var tag_product_input = document.getElementById('tag_product_input');
var body_product_input = document.getElementById('body_product_input');
var price_product_input = document.getElementById('price_product_input');
var header_product_input = document.getElementById('header_product_input');
var subHeader_product_input = document.getElementById('subHeader_product_input');
var quantity_available_product_input = document.getElementById('quantity_available_product_input');

var images_product_input = document.getElementById('images_product_input');
var choosen_images_user_input = document.getElementById('choosen_images_user_input');


// Listen for input event on numInput. To prevent user form typing negative number...
price_product_input.onkeydown = function(e) {
    if(!( (e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode == 8) || (e.keyCode == 190) || (e.keyCode == 69))) {
        return false;
    }
}
// Listen for input event on numInput. To prevent user form typing negative number...
quantity_available_product_input.onkeydown = function(e) {
    if( !( (e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || (e.keyCode == 8) ) ) {
        return false;
    }
}
// When Submit images text is clicked it clicks the actual hidden input type files buton.... This is all to hide the "No Files Choosen" text....
function Click_images_product_input() {
    images_product_input.click();
}
//Setting up that the images choosen show up in choosen_images_user_input div....
images_product_input.addEventListener('change',()=>{

    if (images_product_input.files.length != 0 && images_product_input.files.length <= 20) {
        choosen_images_user_input.innerHTML = '';
        let prod_images_input_URLS = [];
                    
        for (let index = 0; index < images_product_input.files.length; index++) {
            console.log('Image no: ' + String(index+1));
            prod_images_input_URLS.push(window.URL.createObjectURL(images_product_input.files[index]));
        }
        for (let index = 0; index < prod_images_input_URLS.length; index++) {
            const element = prod_images_input_URLS[index];
        
            let choosen_image = new Image;
            choosen_image.classList.add('choosen_image');
            choosen_image.src = element;
        
            choosen_images_user_input.append(choosen_image);
        }        
    }
    else {
        if (images_product_input.files.length > 20) {
            alert('Maximum of 20 images are allowed.');
        }
        choosen_images_user_input.innerHTML = 'No Images Chosen';
    }
})


function submit_input_prod() {
    let prod_tag_input = tag_product_input.value;
    let prod_body_input = body_product_input.value;
    let prod_price_input = price_product_input.value;
    let prod_header_input = header_product_input.value;
    let prod_subHeader_input = subHeader_product_input.value;
    let prod_quantAvail_input = quantity_available_product_input.value;
    let prod_images_input = images_product_input.files;


    //Making Blank and whitespace only checks and makind suitable arrangement for Updating products card....
    if (prod_tag_input.replace(/\s/g,'').length == 0) {
        alert('Please make sure to write in the Tag name of the Product.')
    }
    else if ( ItemsInStore.hasOwnProperty(prod_tag_input.replace(/\s/g,'')) && (prod_images_input.length <= 20 || prod_images_input == undefined )){
        const will_user_update = confirm('The tag name used already exists. Do you want to update the product?');

        if (will_user_update == true) {
            prod_tag_input = prod_tag_input.replace(/\s/g,'');

    //Adding check if blank or only blankspaces then it will give the value already in ItemsInStore...
        //Price 
            if (prod_price_input.length == 0) {
                prod_price_input = ItemsInStore[prod_tag_input]['price']
            }else {
                prod_price_input = Number(prod_price_input);
                ItemsInStore[prod_tag_input]['price'] = prod_price_input;
            }
        //Body
            if (prod_body_input.replace(/\s/g,'').length == 0) {
                prod_body_input = ItemsInStore[prod_tag_input]['body']
            }else {
                prod_body_input = prod_body_input.trim();
                ItemsInStore[prod_tag_input]['body'] = prod_body_input;
            }
        //Header
            if (prod_header_input.replace(/\s/g,'').length == 0) {
                prod_header_input = ItemsInStore[prod_tag_input]['header']
            }else {
                prod_header_input = prod_header_input.trim();
                ItemsInStore[prod_tag_input]['header'] = prod_header_input;
            }
        //SubHeader
            if (prod_subHeader_input.replace(/\s/g,'').length == 0) {
                prod_subHeader_input = ItemsInStore[prod_tag_input]['subHeader']
            }else {
                prod_subHeader_input = prod_subHeader_input.trim();
                ItemsInStore[prod_tag_input]['subHeader'] = prod_subHeader_input;
            }
        //Quantity Available
            if (prod_quantAvail_input.length == 0) {
                prod_quantAvail_input = ItemsInStore[prod_tag_input]['quantity_available']
            }else {
                prod_quantAvail_input = Number(prod_quantAvail_input);
                ItemsInStore[prod_tag_input]['quantity_available'] = prod_quantAvail_input;
            }
        //Images
            if (prod_images_input.length == 0) {
                prod_images_input = ItemsInStore[prod_tag_input]['images']
            }else {
                let prod_images_input_URLS = [];
        
                for (let index = 0; index < prod_images_input.length; index++) {
                    prod_images_input_URLS.push(window.URL.createObjectURL(prod_images_input[index]));
                }
                ItemsInStore[prod_tag_input]['images'] = prod_images_input_URLS;
            }      

            Make_Products();
            tag_product_input.value = '';
            body_product_input.value = '';
            price_product_input.value = '';
            header_product_input.value = '';
            subHeader_product_input.value = '';
            quantity_available_product_input.value = '';
            images_product_input.value = '';
            choosen_images_user_input.innerHTML = 'No Images Chosen';
        }
    }
    else if (prod_images_input.length > 20) {
        return;
    }
    else {

        if (prod_tag_input.replace(/\s/g,'').length != 0  &&
            prod_price_input.length != 0 &&
            prod_body_input.replace(/\s/g,'').length != 0 &&
            prod_header_input.replace(/\s/g,'').length != 0 &&
            prod_subHeader_input.replace(/\s/g,'').length != 0 &&
            prod_quantAvail_input.length != 0 &&
            prod_images_input.length != 0) {

                prod_tag_input = prod_tag_input.replace(/\s/g,'');
                prod_price_input = Number(prod_price_input);
                prod_quantAvail_input = Number(prod_quantAvail_input);
            
                let prod_images_input_URLS = [];
                
                for (let index = 0; index < prod_images_input.length; index++) {
                    prod_images_input_URLS.push(window.URL.createObjectURL(prod_images_input[index]));
                }
    
                prod_body_input = prod_body_input.trim();
                prod_header_input = prod_header_input.trim();
                prod_subHeader_input = prod_subHeader_input.trim();
                
                ItemsInStore[prod_tag_input] = {
                    quantity_available : prod_quantAvail_input,
                    header : prod_header_input,
                    price : prod_price_input,
                    subHeader : prod_subHeader_input,
                    body : prod_body_input,
                    images : prod_images_input_URLS
                }
            
                Make_Products();
                tag_product_input.value = '';
                body_product_input.value = '';
                price_product_input.value = '';
                header_product_input.value = '';
                subHeader_product_input.value = '';
                quantity_available_product_input.value = '';
                images_product_input.value = '';
                // cross_btn_user_input_add_prod.click();
                choosen_images_user_input.innerHTML = 'No Images Chosen';
        }
        else {
            alert('Please fill all the input fields for the new product');
        }
    }
}

//The info button and its div which displays info about TagName....
var info_tagName_div = document.getElementById('info_tagName_div');
var info_tagName_image = document.getElementById('info_tagName_image');

info_tagName_image.addEventListener('mouseenter',()=>{
    info_tagName_div.classList.remove('hidden');
});
info_tagName_image.addEventListener('mouseleave',()=>{
    info_tagName_div.classList.add('hidden');
});



// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **********************************TOGGLE LIGHT AND DARK MODE**************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************
// **************************************************************************************************


var dark_light_mode_toggler = document.getElementById('dark_light_mode_toggler');
var dark_light_mode_toggler_img = document.querySelector('#dark_light_mode_toggler img');


 if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dark_light_mode_toggle_link.dataset.mode = 'dark_mode'
    dark_light_mode_toggle_link.href = 'dark_mode_css.css'
    dark_light_mode_toggler_img.src = 'images/sun-outline.png';
 }else{
    dark_light_mode_toggle_link.dataset.mode = 'light_mode'
    dark_light_mode_toggle_link.href = 'styles.css'
    dark_light_mode_toggler_img.src = 'images/moon-outline.png';
 }


dark_light_mode_toggler.addEventListener('click',()=>{
    let dark_light_mode_toggle_link = document.getElementById('dark_light_mode_toggle_link');

    if (dark_light_mode_toggle_link.dataset.mode == 'light_mode') {

        dark_light_mode_toggle_link.dataset.mode = 'dark_mode'
        dark_light_mode_toggle_link.href = 'dark_mode_css.css'
        dark_light_mode_toggler_img.src = 'images/sun-outline.png';

    }else{
        dark_light_mode_toggle_link.dataset.mode = 'light_mode'
        dark_light_mode_toggle_link.href = 'styles.css'
        dark_light_mode_toggler_img.src = 'images/moon-outline.png';
    }

})

// **************************************************************************************************
// **************************************************************************************************
// ************************SMALL SCREEN NAVBAR MENU ON LEFT SIDE JS**********************************
// **************************************************************************************************
// **************************************************************************************************

var small_screen_alt_navbar_nav_menu_Lv_minus_1 = document.getElementById('small_screen_alt_navbar_nav_menu_Lv-1'); 
var small_screen_alt_navbar_nav_menu = document.getElementById('small_screen_alt_navbar_nav_menu');
var navbar_small_screen_only_menu = document.getElementById('navbar_small_screen_only_menu');

navbar_small_screen_only_menu.addEventListener('click',()=>{
    if (small_screen_alt_navbar_nav_menu.classList.contains('hidden')) {
        small_screen_alt_navbar_nav_menu_Lv_minus_1.classList.remove('hidden');
        small_screen_alt_navbar_nav_menu.classList.remove('hidden');
    }else {
        small_screen_alt_navbar_nav_menu.classList.add('hidden');
        small_screen_alt_navbar_nav_menu_Lv_minus_1.classList.add('hidden');
    }
});

document.addEventListener("mouseup", (event)=>{
    let obj = small_screen_alt_navbar_nav_menu;
    if ( (!obj.contains(event.target))  && (!small_screen_alt_navbar_nav_menu.classList.contains('hidden')) && (!navbar_small_screen_only_menu.contains(event.target)) ) {
        small_screen_alt_navbar_nav_menu.classList.add('hidden');
        small_screen_alt_navbar_nav_menu_Lv_minus_1.classList.add('hidden');
    }
})










































