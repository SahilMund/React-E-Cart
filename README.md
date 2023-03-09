
# Ecommerce React app

## Functionality:-

```
1.	Navbar
-	Showing cart items count
-	Showing relevant navigation links

2.	All products page
-	Showing list of products from the API.
-	Each product is editable by clicking on the “pencil” button. And we can edit that product inline. On finish editing the product, showing Notification.
-	Each product is deletable, on clicking of the delete    button user will be able to delete the product and showing Notification.
-	Implement a sort button. On clicking it will sort by “price” and show a cross button just beside it. On clicking the cross button removing the sort.
-	Giving the button to add a product to cart.

3.	Create page
-	On clicking the Add button adding the product and show Notification

4.	Product detail page
-	Showing all the details of a product
-	Giving a button to add a product to cart

5. Cart page
-	Showing all the items in the cart


```

## API Used :-

```
https://my-json-server.typicode.com/SahilMund/ecarts/
```

## Deployed URL :-

```
https://sahilmund.github.io/React-E-Cart
```

## Steps to run the project :-

####    Step 1 :-  Clone the repo
 
 ```
https://github.com/SahilMund/React-E-Cart.git
 ```
####    Step 2 :- To install the dependencies

```
npm install
```

#### Step 3 :- To run the application
```
npm start
```

<hr/>

## Folder Structure :-

```
.gitignore
README.md
package-lock.json
package.json
public
   |-- favicon.ico
   |-- index.html
   |-- logo192.png
   |-- logo512.png
   |-- manifest.json
   |-- api
   |   |-- index.js
   |-- components
   |   |-- Cart.js
   |   |-- CartItem.js
   |   |-- CreateProduct.js
   |   |-- Navbar.js
   |   |-- ProductDetails.js
   |   |-- ProductElement.js
   |   |-- ProductListing.js
   |-- db.json
   |-- index.js
   |-- local-storage.js
   |-- redux
   |   |-- actions
   |   |   |-- cartActions.js
   |   |   |-- productActions.js
   |   |-- constants
   |   |   |-- action-types.js
   |   |-- reducers
   |   |   |-- cartReducer.js
   |   |   |-- index.js
   |   |   |-- productReducer.js
   |   |-- store.js
```