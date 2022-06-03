var entityCreated = true;
var isShown = false;
var selectedIcon = 0;




AFRAME.registerComponent('pin-gltf', {
	schema: {
	default: ''
	},
	init() {

	const sceneEl = this.el.sceneEl;
	
	
	this.el.classList.add("gltf-button");

	this.el.addEventListener('click', () => {

		
		console.log('Pin GLTF was Clicked!');

		

		if(!entityCreated){

			var entityEl = document.createElement('a-entity');
			entityEl.setAttribute('display-text', '');

			entityEl.setAttribute("text", "width", "8");

			sceneEl.appendChild(entityEl);
			entityCreated = true;
			isShown = true;

		}else if(entityCreated && isShown==true && selectedIcon == 1){

			var textComponent = sceneEl.querySelector('.text-component');
			//textComponent.setAttribute('visible', false);
			isShown=false;
		}else if(entityCreated && isShown==false || entityCreated && isShown==true && selectedIcon!=1){

			var textComponent = sceneEl.querySelector('.text-component');

			var text = document.getElementById('pin').textContent;
			changeText(sceneEl, text);

			textComponent.setAttribute('visible', true);
			textComponent.setAttribute("text", "width", "8");
			isShown=true;
		}

		selectedIcon = 1;

	});
	}
});


AFRAME.registerComponent('clock-gltf', {
	schema: {
	default: ''
	},
	init() {
	const sceneEl = this.el.sceneEl;
	this.el.classList.add("gltf-button");

	this.el.addEventListener('click', () => {


		console.log('Clock GLTF was Clicked!');
		
		

		if(!entityCreated){
			// create entity
			// var entityEl = document.createElement('a-box');
			// entityEl.setAttribute('display-box', '');

			var entityEl = document.createElement('a-entity');
			entityEl.setAttribute('display-text', '');
			entityEl.setAttribute("text", "width", "9");
			sceneEl.appendChild(entityEl);
			entityCreated = true;
			isShown = true;
		}else if(entityCreated && isShown==true && selectedIcon == 2){

			var textComponent = sceneEl.querySelector('.text-component');
			//textComponent.setAttribute('visible', false);
			isShown=false;
		}else if(entityCreated && isShown==false || entityCreated && isShown==true && selectedIcon!=2){

			var textComponent = sceneEl.querySelector('.text-component');

			var text = document.getElementById('clock').textContent;
			changeText(sceneEl, text);

			textComponent.setAttribute('visible', true);
			textComponent.setAttribute("text", "width", "9");
			isShown=true;
		}

		selectedIcon = 2;
		
	});
	}
});

AFRAME.registerComponent('priest-gltf', {
	schema: {
	default: ''
	},
	init() {
	const sceneEl = this.el.sceneEl;
	this.el.classList.add("gltf-button");

	this.el.addEventListener('click', () => {


		console.log('Priest GLTF was Clicked!');
		
		

		if(!entityCreated){
			// create entity
			// var entityEl = document.createElement('a-box');
			// entityEl.setAttribute('display-box', '');

			var entityEl = document.createElement('a-entity');
			entityEl.setAttribute('display-text', '');
			entityEl.setAttribute("text", "width", "10");

			sceneEl.appendChild(entityEl);
			entityCreated = true;
			isShown = true;
		}else if(entityCreated && isShown==true && selectedIcon == 3){

			var textComponent = sceneEl.querySelector('.text-component');
			//textComponent.setAttribute('visible', false);
			isShown=false;
		}else if(entityCreated && isShown==false || entityCreated && isShown==true && selectedIcon!=3){

			var textComponent = sceneEl.querySelector('.text-component');

			var text = document.getElementById('priest').textContent;
			changeText(sceneEl, text);

			textComponent.setAttribute('visible', true);
			textComponent.setAttribute("text", "width", "10");
			isShown=true;
		}

		selectedIcon = 3;
		
	});
	}
});


AFRAME.registerComponent('info-gltf', {
	schema: {
	default: ''
	},
	init() {
	const sceneEl = this.el.sceneEl;
	this.el.classList.add("gltf-button");

	this.el.addEventListener('click', () => {


		console.log('Info GLTF was Clicked!');
		
		

		if(!entityCreated){
			// create entity
			// var entityEl = document.createElement('a-box');
			// entityEl.setAttribute('display-box', '');

			var entityEl = document.createElement('a-entity');
			entityEl.setAttribute('display-text', '');
			entityEl.setAttribute("text", "width", "7");
			sceneEl.appendChild(entityEl);
			entityCreated = true;
			isShown = true;

		}else if(entityCreated && isShown==true && selectedIcon == 4){

			var textComponent = sceneEl.querySelector('.text-component');
			//textComponent.setAttribute('visible', false);
			isShown=false;
		}else if(entityCreated && isShown==false || entityCreated && isShown==true && selectedIcon!=3){

			var textComponent = sceneEl.querySelector('.text-component');

			var text = document.getElementById('info').textContent;
			changeText(sceneEl, text);

			textComponent.setAttribute('visible', true);
			textComponent.setAttribute("text", "width", "7");
			isShown=true;
		}

		selectedIcon = 4;
		
	});
	}
});


AFRAME.registerComponent('display-text', {
	init: function () {
		
		const sceneEl = this.el.sceneEl;

		//this.el.setAttribute('visible', false);
		isShown=false;

		// This will be called after the entity has properly attached and loaded.
		// console.log('I am ready!');
		this.el.classList.add("text-component");

		// this.el.object3D.position.set(0, 3, 0);
		this.el.setAttribute('position', {x: 4, y: 3, z: 0});
		this.el.setAttribute('rotation', {x: 0, y: -90, z: 0});
		this.el.setAttribute("text", "color", "red");
		this.el.setAttribute("text", "align", "center");
		this.el.setAttribute("text", "width", "7");
		this.el.setAttribute("text", "font", "kelsonsans");
		this.el.setAttribute("material", "color", "red");
		this.el.setAttribute("scale", "0.5 0.5 0.5");

		// this.el.setAttribute("look-at", "[gps-camera]")
		// this.el.setAttribute("gps-entity-place","latitude:  35.878502; longitude: 14.395198;")
		// this.el.setAttribute('position','0 1 0');


		changeText(sceneEl, "Select Icon");
	


	}
});	



function changeText(sceneEl, text){
	
	// console.log('Text: ' + text);
	
	var textComponent = sceneEl.querySelector('.text-component');
	textComponent.setAttribute("text", "value", text);
}


