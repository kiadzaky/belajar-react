const ProductList = ({ getProducts, deleteProduct }) => {
	return (
		<div>
			<ul>
				{getProducts.map((product) => (
					<li key={product.id}>
						{product.name} - Rp. {product.price}
						<button
							className="button is-danger"
							onClick={() => deleteProduct(product.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
