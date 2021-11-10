import './App.css';
import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import { BrowserRouter as BR, Route, Routes } from 'react-router-dom';
import ProductList from './components/products/ProductList';
const App = () => {
	// BELAJAR MERUBAH TITLE

	const [getTitle, setTitle] = useState('Ini Title');
	const clickTitle = () => {
		setTitle('Title Dirubah');
	};

	//BELAJAR PROPS
	const [getProducts, setProducts] = useState([
		{ id: '1', name: 'ABC', price: '9299' },
		{ id: '2', name: 'DEF', price: '3219' },
		{ id: '3', name: 'GHI', price: '1429' },
		{ id: '4', name: 'JKL', price: '2312' },
	]);
	const deleteProduct = (productId) => {
		const newProduct = getProducts.filter(
			(products) => products.id !== productId
		);
		setProducts(newProduct);
	};

	// BELAJAR USE EFFECT JALAN KETIKA KLIK TOMBOL
	const [name, setName] = useState('Kia Dzaky');

	useEffect(() => {
		console.log('Running');
	}, [name]);

	return (
		<div className="App">
			<BR>
				<Routes>
					<Route exact path="/header" element={<Header />}></Route>
					{/* <Route path="/products"><h2>Data Dari State</h2></Route> */}
				</Routes>
			</BR>

			<h1>{getTitle}</h1>
			<button onClick={clickTitle}>Merubah Title</button>
			<h2>{name}</h2>
			<button onClick={() => setName('JOKO')}>Merubah Nama</button>
			<ProductList getProducts={getProducts} deleteProduct={deleteProduct} />
		</div>
	);
};

export default App;
