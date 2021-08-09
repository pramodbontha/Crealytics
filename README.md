# Getting Started with Crealytics

The general idea of project is to implement a basic auto-complete list which will be updated dynamically while the user types in a search box. The result will be comprised of products containing information like title, price and a couple of images.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Frontend - client
As mentioned above, the frontend is implemented using React with Typescript. 
To start the application, run the following commands:
```
npm install
npm start
```

To start the application, run the following commands:
```
npm run test
```

Project structure is as follows
```
├── public
├── src
│   ├── components
│   │   ├── Header
│   │   ├── ProductCard
│   │   ├── ProductDialog
│   │   ├── ProductList
│   │   ├── SearchBox
│   ├── services
│   │   ├── products
│   ├── pages
│   │   ├── products
```
### Components
**Header**- Displays title for the project. 

**ProductCard**- Takes product details as input props to display them in the card and has **ProductDialog** nested in it.

**ProductDialog**- Takes additional image links input props to display images as carousel in the dialog.

**ProductList**- Displays the products in the grid list.

**SearchBox**- Displays the search input field and button. Filters the product list based on the input.


### Pages

**products** - This pages displays components Header, ProductCard and SearchBox.

### services

**products** - It has **getProductsService()** to return csv data parsed of product details using "papaparse".
