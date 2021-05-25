import WebDirectoryService from '../services/webdirectory';
import RolesService from '../services/roles';

const getState = ({ getStore, getActions, setStore }) => {
	
	const WebDirectorySVC = new WebDirectoryService();
	const RolesSVC = new RolesService();

	return {
		store: {
			menu: []
			,isLoading: true
			,isLogged: false
			,ShopCart: []
			,WDList:[]
			,RoleList: []
		},
		actions: {
			uploadMenu: (model) => {								
				WebDirectorySVC.Menu(model).then(items => {
					//console.log(items);
					setStore({ menu: items});
					setStore({ isLoading: false })
				});
			},
			uploadWDList: () => {			
				setStore({ isLoading: true })				
				WebDirectorySVC.List().then(items => {
					//console.log(items);
					setStore({ WDList: items});
					setStore({ isLoading: false })
				});
			},
			UploadRoleList: () => {
				setStore({ isLoading: true })				
				RolesSVC.List().then(items => {
					//console.log(items);
					setStore({ RoleList: items});
					setStore({ isLoading: false })
				});
			},
			Login: () => {
				setStore({ isLogged: true});
			},
			Logout: () => {
				setStore({ isLogged: false });				
			},
			Loading: (value) => {
				setStore({ isLoading: value })
			}
		}
	};
};

export default getState;