import WebDirectoryService from '../services/webdirectory';
import RolesService from '../services/roles';
import UsersService from '../services/users';
import ProductServices from '../services/products';
import IngredientServices from '../services/ingredients';
import CostaRicaServices from '../services/costaRica';
import HelperService from '../services/helpers';

const getState = ({ getStore, getActions, setStore }) => {

	const WebDirectorySVC = new WebDirectoryService();
	const RolesSVC = new RolesService();
	const UsersSVC = new UsersService();
	const ProductSVC = new ProductServices();
	const IngredientSVC = new IngredientServices();
	const CostaRicaSVC = new CostaRicaServices();
	const HelperSVC = new HelperService();

	return {
		store: {
			// isLoading: true
			// , 
			isLogged: false
			, menu: []
			, ShopCart: []
			, WDList: []
			, RoleList: []
			, UsersList: []
			, ProductList: []
			, IngredientList: []
			, Provinces: []
			, Cantons: []
			, Districts: []
			, ExchangeRate: 0
		},
		actions: {
			uploadMenu: (model) => {
				WebDirectorySVC.Menu(model).then(items => {
					//console.log(items);
					setStore({ menu: items });
					setStore({ isLoading: false })
				});
			},
			uploadCostaRicaData: () => {
				CostaRicaSVC.CostaRicaData('Provinces').then(items => {
					setStore({ Provinces: items });
				});
				CostaRicaSVC.CostaRicaData('Cantons').then(items => {
					setStore({ Cantons: items });
				});
				CostaRicaSVC.CostaRicaData('Districts').then(items => {
					setStore({ Districts: items });
				});
			},
			UploadExchangeRate: () => {
				HelperSVC.ExchangeRate().then(res => {
					//console.log(res);
					var exchangerate = parseInt(res.compra/10000)-10;
					setStore({ ExchangeRate: exchangerate});
				});
			},
			uploadWDList: () => {
				setStore({ isLoading: true })
				WebDirectorySVC.List().then(items => {
					//console.log(items);
					setStore({ WDList: items });
					setStore({ isLoading: false })
				});
			},
			UploadRoleList: () => {
				setStore({ isLoading: true })
				RolesSVC.List().then(items => {
					//console.log(items);
					setStore({ RoleList: items });
					setStore({ isLoading: false })
				});
			},
			UploadUsersList: () => {
				setStore({ isLoading: true })
				UsersSVC.List().then(items => {
					//console.log(items);
					setStore({ UsersList: items });
					setStore({ isLoading: false })
				});
			},
			UploadProductList: () => {
				setStore({ isLoading: true })
				ProductSVC.PrimaryProductList().then(items => {
					//console.log(items);
					setStore({ ProductList: items });
					setStore({ isLoading: false })
				});
			},
			UploadIngredientList: () => {
				IngredientSVC.List().then(items => {
					setStore({ IngredientList: items });
				});
			},
			Login: () => {
				setStore({ isLogged: true });
				localStorage.removeItem('DeliveryAddress');
			},
			Logout: () => {
				setStore({ isLogged: false });
				localStorage.removeItem('DeliveryAddress');
			},
			// Loading: (value) => {
			// 	setStore({ isLoading: value })
			// },
			AddItemShopCart: (item) => {
				//console.log(item);
				let shopcart = localStorage.getItem('ShopCart');
				if (shopcart === null) {
					localStorage.setItem('ShopCart', JSON.stringify([item]));
					setStore({ ShopCart: [item] })
				} else {
					//console.log(JSON.parse(shopcart));
					let cart = JSON.parse(shopcart);

					let ProductIndex = cart.findIndex(src => src.ProductID === item.ProductID);

					if (ProductIndex >= 0) {
						cart.forEach(element => {
							if (element.ProductID === item.ProductID) {
								element.Qty = element.Qty + parseInt(item.Qty);
							}
						});
						localStorage.removeItem('ShopCart');
						localStorage.setItem('ShopCart',JSON.stringify(cart));
						setStore({ ShopCart: cart })
					} else {
						cart = [...cart, item];
						localStorage.removeItem('ShopCart');
						localStorage.setItem('ShopCart',JSON.stringify(cart));
						setStore({ ShopCart: cart })
					}					
				}				
			},
			UpdateShopCart: () => {
				let cart = JSON.parse(localStorage.getItem('ShopCart'));
				if(cart === null) {
					setStore({ ShopCart: [] })
				} else {
					setStore({ ShopCart: cart })
				}
			},
			RemoveItemShopCart: (ProductID) => {
				let cart = JSON.parse(localStorage.getItem('ShopCart'));
				const NewCart = cart.filter(src => src.ProductID !== ProductID);
				localStorage.removeItem('ShopCart');
				localStorage.setItem('ShopCart',JSON.stringify(NewCart));
				setStore({ ShopCart: NewCart });				
			}
		}
	};
};

export default getState;
